import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {VillainsComponent} from './villains/villains.component'
// guards
//import { AuthGuard } from './core/guards/auth.guard';
//import { LoginGuard } from './core/guards/login.guard';

// components


const routes: Routes = [
    { path: '', redirectTo: '/villains', pathMatch: 'full' },
  
  {
    path: 'villains',
    loadChildren: 'app/villains/villains.module#VillainsModule',
  
  },
  {
    path: 'reports',
    loadChildren: 'app/rprts/rprts.module#RprtsModule',
  
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
