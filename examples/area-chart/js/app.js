angular.module('app', ['showpadHighcharts'])

    .controller('IndexCtrl', ['$scope', 'AreaChartConfig', function($scope, AreaChartConfig){

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
        $scope.chartConfig = new AreaChartConfig({
            title: {
                text: 'Showpad Highcharts demo'
            },
            series: [
                {
                    name: 'USA',
                    data: createMockSeriesData(50, 100)
                },
                {
                    name: 'Russia',
                    data: createMockSeriesData(50, 100)
                }
            ]
        });

        // Helper function to update chart data to simulate new data coming in
        var timer = setInterval(function(){

            // Grab chart from API provided by showpadChart
            var chart = $scope.chart.chart;

            if(chart){
                console.log('update series');
                chart.series[0].setData(createMockSeriesData(50, 100), false);
                chart.series[1].setData(createMockSeriesData(50, 100), false);

                console.log('redraw');
                chart.redraw();
            }
        }, 2000)

    }])

;