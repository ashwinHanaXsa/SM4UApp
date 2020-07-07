import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  line = [];
  constructor( private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart =  this.dashboardService.bigChart();
    this.line =  this.dashboardService.line();
};
}
