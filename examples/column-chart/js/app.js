angular.module('app', ['showpadHighcharts'])

    .controller('IndexCtrl', ['$scope', 'ColumnChartConfig', function($scope, ColumnChartConfig){

        // Help function to create mock data
        var createMockSeriesData = function(numberOfPoints, max){
            var data = [];
            for(var i = 0; i < numberOfPoints; i++){
                data.push(Math.random() * max);
            }
            return data;
        };

        // Placeholder for Chart API
        $scope.chart = void 0;

        // Chart config
        $scope.chartConfig = new ColumnChartConfig({
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            series: [{
                name: 'Year 1800',
                data: createMockSeriesData(5, 1000)
            }, {
                name: 'Year 1900',
                data: createMockSeriesData(5, 1000)
            }, {
                name: 'Year 2008',
                data: createMockSeriesData(5, 1000)
            }]
        });

        // Helper function to update chart data to simulate new data coming in
        var timer = setInterval(function(){

            // Grab chart from API provided by showpadChart
            var chart = $scope.chart.chart;

            if(chart){
                console.log('update series');
                chart.series[0].setData(createMockSeriesData(5, 1000), false);
                chart.series[1].setData(createMockSeriesData(5, 1000), false);
                chart.series[2].setData(createMockSeriesData(5, 1000), false);

                console.log('redraw');
                chart.redraw();
            }
        }, 2000)

    }])

;