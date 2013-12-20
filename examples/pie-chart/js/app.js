angular.module('app', ['showpadHighcharts'])

    .controller('IndexCtrl', ['$scope', 'PieChartConfig', function($scope, PieChartConfig){

        // Help function to create mock data
        var createMockSeriesData = function(max){
            data = [
                ['Firefox', (Math.random() * max)],
                ['IE', (Math.random() * max)],
                {
                    name: 'Chrome',
                    y: (Math.random() * max),
                    sliced: true,
                    selected: true
                },
                ['Safari', (Math.random() * max)],
                ['Opera', (Math.random() * max)],
                ['Others', (Math.random() * max)]
            ]
            return data;
        };

        // Placeholder for Chart API
        $scope.chart = void 0;

        // Chart config
        $scope.chartConfig = new PieChartConfig({
            title: {
                text: 'Showpad Highcharts demo'
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: createMockSeriesData(10)
            }]
        });

        // Helper function to update chart data to simulate new data coming in
        var timer = setInterval(function(){

            // Grab chart from API provided by showpadChart
            var chart = $scope.chart.chart;

            if(chart){
                console.log('update series');
                chart.series[0].setData(createMockSeriesData(10), false);

                console.log('redraw');
                chart.redraw();
            }
        }, 2000)

    }])

;