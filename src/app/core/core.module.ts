import {NgModule, Optional, SkipSelf, ErrorHandler} from '@angular/core';

// modules
import {SharedModule} from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './nav/nav.component';
import {ValidationService} from './services/validation.service';
import {JsonFileService} from './services/json-file.service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
	 NgbModule.forRoot(),
  ],
  exports: [
  NavComponent
  ],
  declarations: [
    NavComponent
  ],
  providers: [
    ValidationService
	,JsonFileService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
     console.log("==========rooot module==========");
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
