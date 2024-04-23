import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RprtsComponent } from './rprts.component';
import {RprtsListComponent} from './rprt-list/rprts-list.component';
import {RprtCreateComponent} from './rprt-create/rprt-create.component';


export const rprtRoutes: Routes = <Routes>[
{
  path: '',
  component: RprtsComponent,
  children: [
	{path: '', component: RprtsListComponent},
    { path: 'create', component: RprtCreateComponent },
	
   
   
  ]
}];

@NgModule({
    imports: [RouterModule.forChild(rprtRoutes)],
    exports: [RouterModule]
})
export class RprtsRoutingModule {}

export const rprtRoutedComponents = [  RprtsComponent,RprtCreateComponent,RprtsListComponent];
