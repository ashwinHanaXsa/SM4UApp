import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-widget-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {

    chartOptions: {};
    Highcharts = Highcharts;

    constructor() { }

    ngOnInit(): void {
        this.chartOptions =
        {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Reconciliation'
            },
            subtitle: {
                enabled: false
            },
            xAxis: {
                categories: ['Master Data'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                labels: {
                    overflow: 'justify'
                }
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
            credits: {
                enabled: false
            },
            series: [{
                // color: 'rgba(165,170,217,1)',
                name: 'Missing from DCE',
                data: [4000]
            },{
                name: 'Missing from MDM',
                data: [5400]
             },
            { 
                name: 'Missing from DCE & MDM',
                data: [4500]
             }
            ]
        },

            HC_exporting(this.Highcharts);

    }

}
