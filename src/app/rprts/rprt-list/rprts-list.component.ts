import {Component, OnInit, Inject, ChangeDetectionStrategy,AfterViewInit,OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
// observable
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// models
import {Rprt} from '../shared/rprt';
/*
import {Message} from '../../modal-message/message';
import {MessageType} from '../../modal-message/message-type';
import {MessageStatus} from '../../modal-message/message-status';
import {ModalMessageSettings} from '../../modal-message/modal-message-settings';
*/
// services
/*import {LoggerService} from '../../core/services/logger.service';
import {MessageService} from '../../modal-message/message.service';
import {AuthHelper} from '../../core/services/auth.helper';
import {AlertService} from '../../core/alert/alert.service';
*/
// NgRx
import {Store} from '@ngrx/store';
import {RprtDtlsPopupService} from '../shared/rprt-dtls.service';
import {RprtDtlsComponent} from '../shared/rprt-dtls.component';
import * as rprtsActions from '../store/rprts.actions';
import {AppState} from '../../app.state';
import {getAllRprts} from '../store/rprts.reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import {Editorial} from '../../core/models/editorial';
//import {EditorialService} from '../../core/services/editorial.service';
import { default as Tabulator } from 'tabulator-tables';


interface RowInfo {
    row: Tabulator.RowComponent,
    pos: number,
    id: number
}


@Component({
  selector: 'app-hero-list',
  templateUrl: './rprts-list.component.html',
  styleUrls: ['./rprts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RprtsListComponent implements OnInit,AfterViewInit,OnDestroy {
	private rprts: Observable<Rprt[]>;   
    private columnNames: any[];
	private selectedData: any[] = [];
	private datum : any[]=[];
	private selectedRowsData: any[];
	private rowDataSub = new BehaviorSubject<any[]>(undefined);
	private subscription= new Subscription();
	idProp :string;
	
	 //modalRef;
	constructor(/*@Inject('LoggerService') private loggerService: LoggerService,
			  private authHelper: AuthHelper,
			  private editorialService: EditorialService,
			  private alertService: AlertService,
			  private messageService: MessageService,
			  */
			  private mds: RprtDtlsPopupService
			  ,private modalService: NgbModal
			  ,private translate: TranslateService
			  ,private store: Store<AppState>
			  ) {
	}
	ngAfterViewInit() {

	}
	onSuccess(data){
		this.datum=data;
		this.columnNames = [
		{formatter:"rowSelection", titleFormatter:"rowSelection", hozAlign:"center", headerSort:false, 
			cellClick:(e, cell) => { this.selectEntry(e, cell)}}
			,{title: "Id", field: "id" }
			,{title: "name",field:"name"}
			,{title: "displayName",field:"displayName"}
			,{title: "description",field:"description"}
			/*,{title: "disabled",field:"disabled"}	*/
			,{title: "Justification",field:"justification"}	
			,{title: "delete",
				field: "delete",
				
				headerSort: false,
				formatter: "buttonCross",
				hozAlign: "center",
				width: 60,
            },
		
		];
		
		this.rowDataSub.next(this.datum);		
	}
	cellClicked(data:any){	
		
	}
	rowSelection(data:any){	
		if(data.length > 0){
			document.getElementById('fillForm').removeAttribute("disabled");
		}
		if(data.length == 0){
			document.getElementById('fillForm').setAttribute("disabled","true");
		}
		this.selectedData=data;
	}
	handleError(data:any){
	
	}
	fillForm(){
		console.log("fill form clicked");	
		const modalRef = this.mds.open(RprtDtlsComponent,{windowClass: 'my-class'});
	//	this.mds.modalRef.next(this.modalRef);
		//this.modalRef.componentInstance.rprts = row.getData();
	 	modalRef.componentInstance.columnNames = this.columnNames; 
		modalRef.componentInstance.tableData = this.selectedData;
		//modalRef.componentInstance.idProp = "someId";
		this.subscription.add(
		 modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
		console.log("receivedEntry: "+JSON.stringify(receivedEntry));
		/*let res = this.datum.reduce((a,b) => {
			let a1 = receivedEntry.find(e=> e.id === b.id) || {};
			return a.concat(Object.assign(a1, b));
		},[]);
		
		*/
		
//console.log("result:"+JSON.stringify(res));

let mergedSubjects = this.datum.map(subject => {
    let otherSubject = receivedEntry.find(element => 
	{
	if(element.id == subject.id){
	console.log("temp element:"+JSON.stringify(element));
	console.log("temp subject:"+JSON.stringify(subject));
		return true;
	}
	
	return false;
	}
	)
	
    return { ...subject, ...otherSubject }
})
		this.datum = mergedSubjects;		
		this.rowDataSub.next(this.datum);		
		})
		);
	}
	onComplete(){
	
	}
	selectEntry(e: UIEvent, cell: Tabulator.CellComponent) {
		
	}
	
	

	ngOnInit() {
	console.log("rowSelection");
	this.idProp="this_is_id of tabulator";
		this.rprts = this.store.select(getAllRprts);
		this.subscription.add(
			this.rprts.subscribe(
				data => this.onSuccess(data)
				,error => this.handleError(error)
				,() => this.onComplete()
			)
		);
	
		document.getElementById('fillForm').setAttribute("disabled","true");
	}
 
    public ngOnDestroy() : void{	
		console.log("rprt list on destroy");
		this.subscription.unsubscribe();
	}

  /**
   * Delete the selected hero
   * @param {number} id the hero id
   */
  delete(id: number) {
  
    /*this.authHelper.checkAuthentication();
    this.alertService.clear();

    this.translate.get('heroes.confirmDeleteMsg').subscribe(text => {
      // create settings
      const settings = new ModalMessageSettings();
      settings.onConfirmCallback = this.onOkDelete.bind(this, id);

      // display the modal calling the service
      this.messageService.showMessage(new Message(text, MessageStatus.WARNING, MessageType.CONFIRM, settings));
    });
	*/
  }

  /**
   * What to do if confirm to delete the hero
   * @param id the hero identifier
   */
  onOkDelete(id) {
   // this.store.dispatch(new heroActions.RemoveHero(id));
   
  }

  /**
   * The track by function
   *
   * @param index the index
   * @param item the item
   */
  trackById(index, item) {
  
    return item.id;
  }
}

/*
https://github.com/marcellourbani/vscode_abap_remote_fs/blob/cf89d4746852efa09a9b2d096b70a6660523d54d/client/media/query.js#L9
function showResult(result) {

    let cols = result.columns.map(obj => {
        return { title: obj.description, field: obj.name };
    });

    var table = new Tabulator("#result-table", {
        data: result.values, //assign data to table
        columns: cols,
        // pagination: "local",
        // paginationSize: 10,
        // paginationSizeSelector: [10, 20, 50, 100]
    });

}
*/