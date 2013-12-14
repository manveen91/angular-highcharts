angular.module('showpadHighcharts.directives')
    .directive('showpadChart', ['showpadHighcharts.config', 'BaseChartConfig', function (showpadHighchartsConfig, BaseChartConfig) {

        return{
            restrict: 'A',
            link    : function (scope, iElement, iAttrs) {

                // Evaluate config in current scope
                var config = scope.$eval(iAttrs.showpadChart);

                // Make sure config is as expected
                if (!(config instanceof BaseChartConfig)) {
                    console.log('Skipped rendering chart because config is not instance of BaseChartConfig');
                    return;
                }

                // Create chart
                $(iElement).highcharts(config);

                // Debugging
                if (showpadHighchartsConfig.debug) {
                    console.dir('Created chart with config:');
                    console.dir(config);
                }

            }
        };

    }]);