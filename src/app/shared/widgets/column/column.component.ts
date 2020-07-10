import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {

  Highcharts = Highcharts;
  barOptions: {};

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.barOptions =
    {
      chart: {
        renderTo: 'container',
        type: 'bar',
        options3d: {
          enabled: true,
          alpha: 0,
          beta: 340,
          depth: 72,
          viewDistance: 25
        }
      },
      title: {
        text: 'Missed Read Meter Count- Aging'
      },
      subtitle: {
        enabled: false
      },
      xAxis: {
        categories: ['1-6 Days','7-13 Days','14-20 Days','21-29 Days','30+ Days'],
        title: {
          text: 'Days'
        }
      },
      credits:{
        enabled: false
      },
      yAxis: {
        title: {
          text: 'Missed Read Meter',
          style: {
              color: Highcharts.getOptions().colors[0]
          }
      },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
      series: [{
        name: 'Aging',
        data: [19,14,10,3,2]
      }]
    },

      HC_exporting(this.Highcharts);
  }

}
