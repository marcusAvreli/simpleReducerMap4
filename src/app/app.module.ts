import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {createTranslateLoader} from './app.translate.factory';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// modules
import {VillainsModule} from './villains/villains.module'
import  {VillainsComponent} from './villains/villains.component'
@NgModule({
  declarations: [
    AppComponent
	
  ],
  imports: [
    BrowserModule
	 ,CoreModule
    ,SharedModule
	,AppRoutingModule
	 ,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
	 StoreDevtoolsModule.instrument(
	  {name: 'TodoMVC app using Angular & NgRx',
          maxAge: 50,
	 }
	 ),
	
  ],
  providers: [
  {provide: 'api.config', useValue: environment.apiConfig},
  {provide: 'defaultLanguage', useValue: environment.defaultLanguage},
  
  ],
  bootstrap: [AppComponent]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
