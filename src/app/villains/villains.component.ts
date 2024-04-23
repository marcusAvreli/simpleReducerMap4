import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';



// NgRx
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {GetAllVillains} from './store/villains.actions';
import {getDeleteError, getVillainsError, isDeleted} from './store/villains.reducers';

@Component({
 
  template: `
    <router-outlet></router-outlet>`
})
export class VillainsComponent implements OnInit {

  constructor(
   private router: Router,
  private store: Store<AppState>) {

   
  }

  ngOnInit() {
    console.log('... Initializing Villains component');
	 this.store.dispatch(new GetAllVillains());
    

    // subscriptions when success or error action
    this.store.select(getVillainsError).subscribe((error) => this.loadingError(error));
    this.store.select(isDeleted).subscribe((done) => {
      this.actionSuccess(done, 'villains.deleteOkMsg');
    });
    this.store.select(getDeleteError).subscribe((error) => {
      this.actionError(error, 'villains.deleteErrMsg');
    });
	
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
