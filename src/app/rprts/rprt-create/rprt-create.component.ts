import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

// models
import {Rprt} from '../shared/rprt';
import {Mode} from '../../core/models/mode.enum';
//import {Editorial} from '../../core/models/editorial';

// services
import {ValidationService} from '../../core/services/validation.service';
//import {AuthHelper} from '../../core/services/auth.helper';
//import {EditorialService} from '../../core/services/editorial.service';
//import {AlertService} from '../../core/alert/alert.service';

// components
import {UIFormComponent} from '../../ui-elements/ui-form';

// NgRx
import * as rprtActions from '../store/rprts.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-rprt-create',
  templateUrl: './rprt-create.component.html',
  styleUrls: ['./rprt-create.component.scss']
})
export class RprtCreateComponent extends UIFormComponent {
  @Input() mode: Mode = Mode.CREATE;
  rprt: Rprt = new Rprt(-1, null,null,null,0,null,-1);
  //editorials: Editorial[] = [];

  constructor(
  /*private editorialService: EditorialService,
              private alertService: AlertService,
              private authHelper: AuthHelper,
			  */
              validation: ValidationService,
			  
              private store: Store<AppState>) {
    super(validation);

    /*this.editorialService.findAll().subscribe(result => {
      this.editorials = [new Editorial(-1, 'Select value ...')].concat(result);
    });
	*/
  }

  /**
   * Create a new hero
   */
  onSaveHero() {
    //this.authHelper.checkAuthentication();
    //this.alertService.clear();

    //if (this.validate()) {
	//console.log("this.rprt:"+this.rprt.name);
	//console.log("this.rprt:"+this.rprt.display_name);
	
      this.store.dispatch(new rprtActions.AddRprt(this.rprt));
    //}
  }

  reset() {
    /*this.rprt.editorial = -1;
    this.rprt.name = '';
    this.rprt.creationDate = null;
	*/
  }
}
