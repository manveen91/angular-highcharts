angular.module('app', ['showpadHighcharts'])

    .controller('IndexCtrl', ['$scope', 'LineChartConfig', function($scope, LineChartConfig){

        // Help function to create mock data
        var createMockSeriesData = function(numberOfPoints, max){
            var data = [];
            for(var i = 0; i < numberOfPoints; i++){
                data.push(Math.random() * max);
            }
            return data;
        };

        // Placeholder for Chart API
        $scope.lineChart = void 0;

        // Chart config
        $scope.lineChartConfig = new LineChartConfig({
            title: {
                text: 'Showpad Highcharts demo'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: createMockSeriesData(12, 10),
                step: 'right',
                name: 'Right'
            }, {
                data: createMockSeriesData(12, 10),
                step: 'center',
                name: 'Center'
            }, {
                data: createMockSeriesData(12, 10),
                step: 'left',
                name: 'Left'
            }]
        });

        // Helper function to update chart data to simulate new data coming in
        var timer = setInterval(function(){

            // Grab chart from API provided by showpadChart
            var chart = $scope.lineChart.chart;

            if(chart){
                console.log('update series');
                chart.series[0].setData(createMockSeriesData(12, 10), false);
                chart.series[1].setData(createMockSeriesData(12, 15), false);
                chart.series[2].setData(createMockSeriesData(12, 20), false);

                console.log('redraw');
                chart.redraw();
            }
        }, 2000)

    }])

;