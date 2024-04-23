import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//import {GetAllRprts} from './store/rprts.actions';


// NgRx
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {GetAllRprts} from './store/rprts.actions';
//import {getDeleteError, getRprtsError, isDeleted} from './store/rprts.reducers';

@Component({
 
  template: `
    <router-outlet></router-outlet>`
})
export class RprtsComponent implements OnInit {

  constructor(
   private router: Router,
  private store: Store<AppState>) {

   
  }

  ngOnInit() {
    console.log('... Initializing Villains component');
	// this.store.dispatch(new GetAllVillains());
     this.store.dispatch(new GetAllRprts());


    // subscriptions when success or error action
	/*
    this.store.select(getVillainsError).subscribe((error) => this.loadingError(error));
    this.store.select(isDeleted).subscribe((done) => {
      this.actionSuccess(done, 'villains.deleteOkMsg');
    });
    this.store.select(getDeleteError).subscribe((error) => {
      this.actionError(error, 'villains.deleteErrMsg');
    });
	*/
  }

  /**
   * Display error message if load of villains fails
   */
  loadingError(error) {
    
  }

  /**
   * Display success message after execute specific action over the hero
   * @param done true if action was completed or false
   * @param message the message to be displayed
   */
  actionSuccess(done: boolean, message: string) {
   
  }

  /**
   * Display error message if execution of action fails
   * @param error the error thrown
   * @param message the i18n key of the message to be displayed
   */
  actionError(error, message: string) {
   
  }

}
