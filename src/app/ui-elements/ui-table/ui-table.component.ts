import { Component, EventEmitter,Input,Output, OnChanges, OnInit ,SimpleChanges,OnDestroy,AfterViewInit } from '@angular/core';
import { default as Tabulator,EditModule
 } from 'tabulator-tables';
import { ColumnDefinitionSorterParams, ColumnDefinition, LabelValue, Options, CellComponent, RowComponent, ColumnComponent, ListEditorParams } from 'tabulator-tables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs/Subscription';
import {RprtDtlsPopupService} from '../../rprts/shared/rprt-dtls.service';
import {RprtDtlsComponent} from '../../rprts/shared/rprt-dtls.component';
//https://github.com/surveyjs/survey-analytics/blob/31ae7462416f4764908276d29f8c0af2c6cb8f73/src/tables/tabulator.ts#L6
//https://github.com/buddy-red/bks-Chinese/blob/44bd26219f138514aaa7d5f94d568075be965cfe/shared/src/lib/tabulator/helpers.ts#L115
//https://github.com/modxcms/Collections/blob/234cdfd4cc06ba4f6c027dcc4aed5ac6942f44f3/_build/assets/js/Sidebar/index.ts#L158
//https://github.com/kerski/Bravo/blob/00e37a853d7a6af53253f4be5655cb693df3ae1e/src/Scripts/view/scene-dax-formatter.ts#L8
//deleteEntry
//https://github.com/danjo/batchspooler/blob/625c44219f77520b3f7ae82dbdd6839044b95fa2/src/controller.ts#L186
//https://github.com/ortwic/song-repo/blob/2106c132250c7ca513e6c57cffcff9e8ef92db55/src/store/notification.store.ts
//https://github.com/Toxygates/Panomicon/blob/f833af3e1dba649b0b8b89b1265a1237fbcf9d14/angular/src/app/viewer/sample-browser/sample-table/sample-table.component.ts#L177
//save all changes  this.table.on('cellClick', this._onCellClick.bind(this));
//https://github.com/UniStuttgart-VISUS/damast/blob/50d47cbff82c10edac08f95d8eb25e20a640bfc4/src/geodb/table.ts#L605
//https://github.com/certinia/debug-log-analyzer/blob/a2f5150bafc396d71263627f4ce318744a50429f/log-viewer/modules/components/calltree-view/CalltreeView.ts#L15
//deleteRow
//https://github.com/WISE-Community/WISE-Client/blob/23f8208594902ca8ac1a4bbb8279a165c66af475/src/assets/wise5/components/table/table-authoring/table-authoring.component.ts#L251
//https://github.com/WISE-Community/WISE-Client/blob/1c733033016c2d5af6cc5923ea7fb7d96627a024/src/assets/wise5/components/table/table-show-work/table-show-work.component.ts
/*
 @Output() rowClick = new EventEmitter<TabulatorEvent<T>>();
    @Output() rowContext = new EventEmitter<TabulatorEvent<T>>();
    @Output() rowDblClick = new EventEmitter<TabulatorEvent<T>>();
	eyboard.onKeyCommand({
*/
//https://github.com/knackstedt/dotglitch-ngx/blob/f4cb8aee2ec4f8f4ee81d92bf73b84ed869ee2d3/packages/common/src/components/tabulator/tabulator.component.ts#L14
//https://github.com/marat-karimov/factotum/tree/512a5fb5c2a7587bfc972f0aabd93f162a92048e
//confirm
//https://github.com/sql-bi/Bravo/blob/1e9c78ba2e995d7158c9bd9247ed14b22065ecd0/src/Scripts/view/options-dialog-dev.ts#L13
//rowDblClick: this.rowDblClick.bind(this),
//https://github.com/dgurkaynak/stalk/blob/1a39e33fe2100d6a5287b23f3b37dfbca7586cfa/src/components/spans-table/spans-table.ts#L606
//keybindings
//https://github.com/certinia/debug-log-analyzer/blob/a2f5150bafc396d71263627f4ce318744a50429f/log-viewer/modules/components/AnalysisView.ts#L12
//const deleteRow = async (song: UserSong): Promise<void> => {
//https://github.com/ortwic/song-repo/blob/2106c132250c7ca513e6c57cffcff9e8ef92db55/src/components/table/SongResource.class.ts#L49
// @Output() cellChanged = new EventEmitter<CellComponent>();

//https://github.com/David-Mawer/tabulator-angular-sample/blob/1217985717375e26511d5600afcfc214478a5e38/src/app/tabulator-grid/tabulator-grid.component.ts#L121
//https://github.com/Toxygates/Panomicon/blob/f833af3e1dba649b0b8b89b1265a1237fbcf9d14/angular/src/app/viewer/expression-table/expression-table/expression-table.component.ts#L237
//keyboard
//https://github.com/jackft/beholder-tool/blob/a1aca5e992e04078f04b03820121038cb42f4231/src/table.ts#L163

//https://github.com/rucula-js/rucula-js/blob/5b1d4ce560d6d870f161249d3b5711d9a39c46d1/src/tabulator/Tabulator.ts#L5
//simple wizard
//https://github.com/ignatandrei/MicroservicesPortChooser/blob/a38716008c6b6b41090a27d1766adfa203d1f7b8/src/MicroservicesAng/src/app/registered-mpc/registered-mpc.component.ts#L58
//https://github.com/IHK-GfI/lux-components/blob/7ea59ad710d446394e7d0f49645690b888144ba0/src/app/modules/lux-filter/lux-filter-form/lux-filter-form.component.ts#L38
//ag-grid modal
//https://github.com/YummyYom/vlct/blob/06a15993893c07a7a78f01997b76fc18754b946a/src/main/webapp/app/shared/ag-grid/suppress-button.component.ts#L56
//  @Input() columnConfig: ColumnDefinition[] = [];
//https://github.com/David-Mawer/tabulator-angular-sample/blob/1217985717375e26511d5600afcfc214478a5e38/src/app/tabulator-grid/tabulator-grid.component.ts#L29
//dynamic html
//https://github.com/knackstedt/dotglitch-ngx/blob/f4cb8aee2ec4f8f4ee81d92bf73b84ed869ee2d3/packages/common/src/components/dynamic-html/dynamic-html.service.ts#L65
//https://github.com/acceleratedscience/open-ad-toolkit/blob/5f93ae8e462693ed6d068943385c282aacfd8b46/openad/flask_apps/dataviewer/js/table.js#L568
//https://github.com/fusion-tech-org/fusion-ui/blob/9d32b44c60f4fc394f009fd133ad6d9482697969/packages/fusion-tabulator/src/tabulator/interface.ts#L17


interface RowInfo {
    row: Tabulator.RowComponent,
    pos: number,
    id: number
}
 

/**
 * This is a wrapper class for the tabulator JS library.
 * For more info see https://tabulator.info
 */
@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UITabulatorTableComponent implements OnInit ,OnChanges,OnDestroy,AfterViewInit {
  @Input() tableData: any[] = [];
  contents: any[] = [];
  deletedRows : any[] = [];
  @Input() columnNames: any[] = [];
  @Input() height: string = '311px';
  @Input() dynamicTabulatorId:string;
  // list properties you want to set per implementation here...
	private table: Tabulator;
  tab = document.createElement('div');
 modalRef;
	showModalParent: boolean;
	private subscription= new Subscription();
	//@Output() public cellClicked : EventEmitter<any> = new EventEmitter<any>();
	@Output() public rowSelected : EventEmitter<any> = new EventEmitter<any>();
	@Output() public deletedRowRowChanged : EventEmitter<any> = new EventEmitter<any>();
	constructor(private mds: RprtDtlsPopupService,private modalService: NgbModal) {
	}
  ngOnInit() {
    //this.showModalParent = false;
	console.log("ui-table on init");
	// this.table.redraw(false);
	
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log("ui-table on changes");
  
    //this.drawTable();
	  //this.drawTable();
	    console.log("ui-table drawtable");
		  this.contents = [...this.tableData];
    this.table = new Tabulator(this.tab, {
      data: this.contents,
     // reactiveData:true, //enable data reactivity
      columns: this.columnNames,
      layout: 'fitData',
	  selectable: true,
      height: '330px',
	 
	 //cellClick : this.binded.cellClick,
	 //https://github.com/davidthegardens/AutoReg-NeuralNet
	      // cellEdited: (cell: any) => this.cellEdited(cell),
		cellClick : ( event: UIEvent, cell: CellComponent) => this.cellClicked(event, cell),
		dataChanged : this.checkMe,
		replaceData :(data : any) => this.checkMe2(data),
	   rowSelectionChanged: this.binded.rowSelectionChanged,
	  //rowDblClick: this.binded.rowDblClick,
    });
	 // this.table.value.on('cellClick', this._onCellClick.bind(this));
	// this.table.onCellClick(e, cell)
  }
	cellEdited(cell: any): void {
		console.log("cell edited");
	}
	checkMe(){
		console.log("ffffffffffffffffffffffffffffff");
	}
	checkMe2(data:any){
		console.log("ffffffffffffffffffffffffffffff");
	}
	cellClicked( event:UIEvent,cell: CellComponent): void {	   
	   //damast
	   const field = cell.getColumn().getField();	   
	   switch (field) {
			case 'delete':
				return this.onDelete(event, cell);
			default:
				console.log("cell clicked 2");
			return;
	   } 
	}
   
	private onDelete( event:UIEvent,cell: CellComponent) {	
		//https://github.com/davidthegardens/AutoReg-NeuralNet
		if (event.stopPropagation) {
			event.stopPropagation()		
		}
		else {
			event.cancelBubble = true
		}
 
		let row = cell.getRow();
		let pos = row.getPosition();
		this.deletedRows.push(this.tableData[pos]);
		this.tableData.splice(pos,1);
		this.table.deleteRow(cell.getRow());
		this.deletedRowRowChanged.emit(this.deletedRows);
	}
	private getRowInfo(cell: Tabulator.CellComponent): RowInfo {
	 
        let row = cell.getRow();
        let pos = row.getPosition();
        let id: number = Number(row.getIndex());
        if (isNaN(id)) {
            throw new Error("getPosId(): id=" + id);
        }

        return { row, pos, id };
    }
	ngAfterViewInit(){
		
		this.drawTable();
	}
    private _onCellClick(evt: UIEvent, cell: CellComponent): void {
	}
 private binded = {
 //stalk
 // rowDblClick: this.rowDblClick.bind(this),
  rowSelectionChanged: this.rowSelectionChanged.bind(this),
   //cellClick : this.cellClick.bind(this)
  }
	private drawTable(): void {
		console.log("draw  table");
		document.getElementById(this.dynamicTabulatorId).appendChild(this.tab);
		this.table.redraw(true);
	}
 
  private rowDblClick(e: MouseEvent, row: any) {
	
	 this.modalRef = this.modalService.open(RprtDtlsComponent,{windowClass: 'changePasswordOverlay'});

	  /*
		this.subscription.add(
			this.modalRef.componentInstance.deleteEmitter.take(1).subscribe((value) => {
	
			this.emittJustification(value);
		}));
		*/
	 // const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
	//modalRef.componentInstance.productOrder = productOrder;
    //const data: TraceSearchResultsTableRowData = row.getData();
    //this.emit(TraceSearchResultsTableEvent.TRACE_DOUBLE_CLICKED, data);
  }
    private rowSelectionChanged(data: any, rows: any) {
    //this.emit(TraceSearchResultsTableEvent.SELECTIONS_UPDATED, data);
	
	this.rowSelected.emit(data);
  }
  public emittJustification(value:any){
  //	console.log("emmit this:"+JSON.stringify(value)) // here you will get the value
 // this.cellClicked.emit(value)
  }
	public ngOnDestroy() : void{
		console.log("on destroy");
		this.subscription.unsubscribe();
	}
	deleteRow($event){
	console.log("deleteRow");
	}
	ddd($event){
	console.log("deleteRow");
	}
}

/*
cellEvents
this.table.options.cellEdited
cellEvents = self.column.cellEvents,
this.column.cellEvents.cellEdited.call(this.table, component);



this.table.options.cellEdited
cellEvents = self.column.cellEvents,
https://github.com/t-yanaka/zabbix-report/blob/ef471b60626dd5fef9bcaa74d6cbbc00cca10c9b/src/js/cell.js#L184

cellEvents
https://github.com/search?q=repo%3ACollinsMunene%2FE-meeting%20cellEdited&type=code  

handle(type, component, name){ bind
https://github.com/SanjeevmUNC/bittorrentclient/blob/44fafca014ac6c98666772dc782b100461ed1611/src/renderer/tabulator-tables/src/js/core/tools/ComponentFunctionBinder.js#L9


import Module from 'tabulator-tables/src/js/core/Module';
class ResponsiveLayout extends Module{
CellEditEventCallback, ColumnComponent, Editor, ListEditorParams, RowComponent, SortDirection
import type { MessageFormatter } from '../../../service/i18n';
  super.subscribe('column-delete', this.initializeResponsivity.bind(this));
https://github.com/ortwic/song-repo/blob/2106c132250c7ca513e6c57cffcff9e8ef92db55/src/components/table/tabulator/modules/ResponsiveLayout.ts#L51
https://github.com/whitedigital-eu/frontend-shared/blob/d135f8c6bf212259f20ca4525a75bdc734f801a9/src/components/Table/createTableConfig.ts#L106

   let configuration = this.getConfiguration()

    this.tabulator = new Tabulator(container, configuration)
https://github.com/davidthegardens/AutoReg-NeuralNet/blob/6097213e1e56d85d5fc8d574077d7e6f95763f76/venv/Lib/site-packages/panel/models/tabulator.ts#L173

*/