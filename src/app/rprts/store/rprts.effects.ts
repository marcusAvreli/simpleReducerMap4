import {Injectable} from '@angular/core';
// RxJs
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// NgRx
import * as rprtActions from './rprts.actions';
import {
  GetAllRprtsError,
	GetAllRprtsSuccess,
	GetRprt,
	GetRprtError,
	GetRprtSuccess,
	AddRprt,
	AddRprtError,
	AddRprtSuccess,
	RemoveRprt,
	RemoveRprtError,
	RemoveRprtSuccess
} from './rprts.actions';
import {Actions, Effect} from '@ngrx/effects';

// services
import {RprtService} from '../shared/rprt.service';
//import {RprtService} from '../shared/rprt.service';
import {Rprt} from '../shared/rprt';

@Injectable()
export class RprtsEffects {
  constructor(private actions$: Actions,
              
			 private rprtService: RprtService
			  ) {
			  console.log("villain effects:"+JSON.stringify(actions$));
  }

  @Effect()
  getAllRprts$: Observable<Action> = this.actions$
    .ofType(rprtActions.GET_RPRTS)
    .switchMap(() => this.rprtService.findAll())
    .map(villains => {
	console.log("============");
	return new GetAllRprtsSuccess(villains)})
    .catch((err) => [new GetAllRprtsError(err)]);
	
 @Effect()
  createRprt$: Observable<Action> = this.actions$
    .ofType(rprtActions.CREATE_RPRT)
    .map((action: AddRprt) => action.payload)
    .switchMap(newHero => this.rprtService.insert(newHero))
    .map((response) => new AddRprtSuccess(response.id))
    .catch((err) => [new AddRprtError(err)]);

  @Effect()
  getVillain$ = this.actions$
    .ofType(rprtActions.GET_RPRT)
    .map((action: GetRprt) => action.payload)
    .switchMap(id => this.rprtService.findById(id))
    .map(villain => new GetRprtSuccess(villain))
    .catch((err) => [new GetRprtError(err)]);

  @Effect()
  removeRprt$ = this.actions$
    .ofType(rprtActions.DELETE_RPRT)
    .map((action: RemoveRprt) => action.payload)
    .switchMap(id => this.rprtService.delete(id))
    .map((villain: Rprt) => new RemoveRprtSuccess(villain))
    .catch((err) => [new RemoveRprtError(err)]);
}
