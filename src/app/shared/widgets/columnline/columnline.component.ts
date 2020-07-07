import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-widget-columnline',
    templateUrl: './columnline.component.html',
    styleUrls: ['./columnline.component.sass']
})
export class ColumnlineComponent implements OnInit {

    Highcharts = Highcharts;

    chartOption: {};
    @Input() data = [];
    constructor() { }

    ngOnInit(): void {
        this.chartOption =
        {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Missed Read Meter Count Trending - Last 7 days'
            },
            subtitle: {
                enable: false
            },
            credits: {
                enabled: false
            },
            xAxis: [{
                categories: ['19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020'
                ],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                categories: [0, 10, 20, 30, 40, 50, 60],
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Unknown/ Missed Read',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                //   categories: [107100,107125,107150,107175,107200,107225,107250],
                title: {
                    text: 'Active Meter Counts',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Active Meter Counts',
                type: 'column',
                yAxis: 1,
                data: [107162, 107162, 107164, 107165, 107164, 107164, 107162],
                tooltip: {
                    valueSuffix: ''
                }

            }, {
                name: 'Unknown/ Missed Read',
                type: 'spline',
                data: [45, 42, 50, 42, 50, 40, 48],
                tooltip: {
                    valueSuffix: ''
                }
            }]
        },

            HC_exporting(this.Highcharts);

    }

}
