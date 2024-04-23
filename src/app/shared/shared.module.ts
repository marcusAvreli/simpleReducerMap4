// modules
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UIElementsModule} from '../ui-elements/ui-elements.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
	NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
	UIElementsModule,
	TranslateModule
   
  ],
  declarations: [
    
  ],
  providers: [
   
  ],
  exports: [
    CommonModule,
	NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
	 UIElementsModule,
  TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
