angular.module('app', ['showpadHighcharts'])

    .controller('IndexCtrl', ['$scope', 'BarChartConfig', function($scope, BarChartConfig){

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
        $scope.chartConfig = new BarChartConfig({
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            series: [{
                name: 'John',
                data: createMockSeriesData(5, 10)
            }, {
                name: 'Jane',
                data: createMockSeriesData(5, 10)
            }, {
                name: 'Joe',
                data: createMockSeriesData(5, 10)
            }]
        });

        // Helper function to update chart data to simulate new data coming in
        var timer = setInterval(function(){

            // Grab chart from API provided by showpadChart
            var chart = $scope.chart.chart;

            if(chart){
                console.log('update series');
                chart.series[0].setData(createMockSeriesData(5, 10), false);
                chart.series[1].setData(createMockSeriesData(5, 10), false);
                chart.series[2].setData(createMockSeriesData(5, 10), false);

                console.log('redraw');
                chart.redraw();
            }
        }, 2000)

    }])

;