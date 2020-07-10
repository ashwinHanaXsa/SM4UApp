import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SubviewComponent } from './modules/subview/subview.component';
import { MeteranalysisComponent } from './modules/reports/asset/meteranalysis/meteranalysis.component';


const routes: Routes = [{
  path : '',
  component: DefaultComponent,
  children:[{
    path: '',
    component: DashboardComponent
  }, {
    path: 'view',
    component: SubviewComponent
  },
  {
    path: 'asset/meteranalysis',
    component: MeteranalysisComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
