import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineComponent } from './widgets/line/line.component';
import { ColumnlineComponent } from './widgets/columnline/columnline.component';
import { ColumnComponent } from './widgets/column/column.component';
import { BulletsComponent } from './widgets/bullets/bullets.component';
import { BarComponent } from './widgets/bar/bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    LineComponent,
    ColumnlineComponent,
    ColumnComponent,
    BulletsComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    LineComponent,
    ColumnlineComponent,
    ColumnComponent,
    BulletsComponent,
    BarComponent
  ]
})
export class SharedModule { }
