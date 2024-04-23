import { Component, OnInit, EventEmitter,Input,Output, OnChanges ,SimpleChanges,ViewChild,ElementRef,AfterViewInit} from '@angular/core';EventEmitter
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RprtDtlsPopupService } from './rprt-dtls.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { default as Tabulator } from 'tabulator-tables';
import {Rprt,RprtJ} from './rprt';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
//import { default as Tabulator } from 'tabulator-tables';
@Component({
  selector: 'rprt-dtls',
  templateUrl: './rprt-dtls.component.html',
    styleUrls: ['./rprt-dtls.component.css']
})
export class RprtDtlsComponent implements OnInit,OnChanges,AfterViewInit {
	modalRef;
	showModal: boolean;
	@Input() tableData: any[] = [];
	@Input() columnNames: any[] = [];

	justification:string;
	@Input() rprt:Rprt;
	@Input() idProp:any;
	rprtJ : RprtJ = new RprtJ(-1,null,-1);
	tab = document.createElement('div');
	idProp2 :string;
		
	private rowDataSub = new BehaviorSubject<any[]>(undefined);
  
	@Output() public deleteEmitter = new EventEmitter<any>();
	@Output() passEntry: EventEmitter<any> = new EventEmitter();
	constructor(private modalService: NgbModal, private mds: RprtDtlsPopupService) {	
	}
  _keyup(event){	
		console.log("event.keyCode"+event.keyCode);  
		//event.preventDefault();
		if(event.keyCode == 27) {
			console.log("escape pressed");
			return false;
		}
	}
	 
	ngOnInit() {		
		this.idProp2="tabulator_dtls";	
	}
	ngOnChanges(changes: SimpleChanges): void {
		
			
	}
	closeModal(){
		//this.modalRef.close();
		//this.mds.modalRef.next(null);
		this.mds.close();
	}
	mouseenter(){
		
	}
	saveProduct() {
		//this.mds.close("sdfdsfdssd");
		if(this.tableData.length>0){
			this.tableData.forEach( (element) => {
				element.justification = this.justification;
			});
		}
		this.passEntry.emit(this.tableData);
		this.mds.close();
	}
	cancel() {
		
		this.mds.close();
	}
	ngAfterViewInit() {
		document.getElementById("myModal").addEventListener('keypress' ,(e) => this._keyup(e))
		document.getElementById("myModal").addEventListener('mouseenter', () => this.mouseenter());
		document.getElementById("myModal").focus();
	}
	
	cellClicked(data:any){	
		console.log("received object:"+JSON.stringify(data));
	}
	
	rowSelection(data:any){		
		console.log("rowselection:"+data);
	}
	deletedRows(data:any){
	
	//console.log("deletedRows:"+data.length);
	//console.log("tableData:"+this.tableData.length);
	}
	dismiss() {
		//const testThis = this.input2.nativeElement.value;
		//console.log("testThis:"+testThis);
		
		console.log('dismiss', this.modalRef);
		this.rprtJ.rprt_id=this.rprt.id;
		//this.deleteEmitter.emit(this.rprtJ);
		console.log("dismiss");
		this.modalRef.dismiss();
		//this.mds.modalRef.next(this.rprtJ);
	
	}
	close() {
		console.log("saveProduct");
		//  console.log('close', reportContent);
		// this.modalRef.close();
		//this.mds.modalRef.next(null);
	} 
}