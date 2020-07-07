import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.sass']
})
export class BulletsComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  @Input () data = [];
  constructor() { }
  ngOnInit() {
    this.chartOptions =  {
      colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
      chart: {
          type: 'column',
          inverted: true,
          polar: true
      },
      title: {
          text: 'Meter Analysis'
      },
      tooltip: {
          outside: true
      },
      pane: {
          size: '85%',
          innerSize: '20%',
          endAngle: 270
      },
      xAxis: {
          tickInterval: 1,
          labels: {
              align: 'right',
              useHTML: true,
              allowOverlap: true,
              step: 1,
              y: 3,
              style: {
                  fontSize: '13px'
              }
          },
          lineWidth: 0,
          categories: [
              // 'Norway <span class="f16"><span id="flag" class="flag no">' +
              // '</span></span>',
              // 'United States <span class="f16"><span id="flag" class="flag us">' +
              // '</span></span>',
              // 'Germany <span class="f16"><span id="flag" class="flag de">' +
              // '</span></span>',
              // 'Canada <span class="f16"><span id="flag" class="flag ca">' +
              // '</span></span>',
              // 'Austria <span class="f16"><span id="flag" class="flag at">' +
              // '</span></span>'
          ]
      },
      yAxis: {
          crosshair: {
              enabled: true,
              color: '#333'
          },
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              borderWidth: 0,
              pointPadding: 0,
              groupPadding: 0.15
          }
      },
      series: [{
          name: 'In DCE but not in CIS',
          data: [132, 105, 92, 73, 64]
      }, {
          name: 'In CIS but not in DCE',
          data: [125, 110, 86, 64, 81]
      }, {
          name: 'In MDM but not in CIS',
          data: [111, 90, 60, 62, 87]
      }]
  }
     
      HC_exporting(Highcharts);

      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      },300 )
    }
  }
