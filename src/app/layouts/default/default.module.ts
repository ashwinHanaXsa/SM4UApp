import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SubviewComponent } from 'src/app/modules/subview/subview.component';
import { MeteranalysisComponent } from 'src/app/modules/reports/asset/meteranalysis/meteranalysis.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SubviewComponent,
    MeteranalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
