import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {rprtRoutedComponents, RprtsRoutingModule} from './rprts-routing.module';

import {RprtService} from './shared/rprt.service';
import {RprtDtlsPopupService} from './shared/rprt-dtls.service';
import {RprtDtlsComponent} from './shared/rprt-dtls.component';
//import {VillainSearchComponent} from './villain-search/villain-search.component';
import {UITabulatorTableComponent} from '../ui-elements/ui-table/ui-table.component';
// NgRx elements
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RprtsEffects} from './store/rprts.effects';
import * as rprtsReducer from './store/rprts.reducers';

export const reducers: ActionReducerMap<any> = {
  rprts: rprtsReducer.reducer
};

@NgModule({
  imports: [
    SharedModule,
    RprtsRoutingModule,
   StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RprtsEffects])
  ],
   entryComponents: [
   RprtDtlsComponent ,UITabulatorTableComponent
   ],
  declarations: [rprtRoutedComponents,RprtDtlsComponent],
  providers: [RprtService
  ,RprtDtlsPopupService
  
  ]
 //,entryComponents: [UITabulatorTableComponent]
})
export class RprtsModule {
}
