import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// observable
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

// models
import {Villain} from '../shared/villain';

// services

// NgRx
import {Store} from '@ngrx/store';
import * as villainActions from '../store/villains.actions';
import {GetVillain} from '../store/villains.actions';
import {AppState} from '../../app.state';
import {getVillain} from '../store/villains.reducers';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent implements OnInit {
  villain: Observable<Villain>;
 // editorials: Observable<Editorial[]>;

  constructor(
              private store: Store<AppState>) {
  }

  ngOnInit() {
   // this.alertService.clear();
    
  //  this.editorials = this.editorialService.findAll();
    this.villain = this.store.select(getVillain);
  }

  /**
   * Delete the selected villain
   * @param {number} id the villain id
   */
  delete(id: number) {
   // this.authHelper.checkAuthentication();
    //this.alertService.clear();
/*
    this.translate.get('villains.confirmDeleteMsg').subscribe(text => {
      // create settings
      const settings = new ModalMessageSettings();
      settings.onConfirmCallback = this.onOkDelete.bind(this, id);

      // display the modal calling the service
      this.messageService.showMessage(new Message(text, MessageStatus.WARNING, MessageType.CONFIRM, settings));
    });
	*/
  }

  /**
   * What to do if confirm to delete the villain
   * @param id the villain identifier
   */
  onOkDelete(id) {
    this.store.dispatch(new villainActions.RemoveVillain(id));
  }
}
