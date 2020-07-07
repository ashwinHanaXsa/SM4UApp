import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SubviewComponent } from './modules/subview/subview.component';


const routes: Routes = [{
  path : '',
  component: DefaultComponent,
  children:[{
    path: '',
    component: DashboardComponent
  }, {
    path: 'view',
    component: SubviewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
