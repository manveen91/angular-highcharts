angular.module('showpadHighcharts.directives')
    .directive('highchart', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (showpadHighchartsConfig, BaseChartConfig, utils) {

        return{
            restrict  : 'A',
            require   : ['highchart', '?ngModel'],
            controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {

                // Placeholder for element
                this.element = $element[0];

                // Placeholder for chart API returned by Highcharts
                // to allow access to the API
                this.chart = void 0;

                // Placeholder for chart config
                this.config = void 0;

            }],
            link      : function (scope, iElement, iAttrs, controllers) {

                console.log('link');
                console.dir(controllers);
                console.dir(scope);

                var config,
                    element,
                    chart,
                    highchartController,
                    ngModelController,
                    configFromAttrs;


                // Define controller(s)
                highchartController = controllers[0];
                ngModelController = controllers[1];

                // Get config to work with
                configFromAttrs = scope.$eval(iAttrs.highchart);

                // Make sure config passed as argument is a valid config
                if (!(configFromAttrs instanceof BaseChartConfig)) {
                    console.log('Skipped rendering chart because config is not instance of BaseChartConfig');
                    return;
                }

                // Create config to work with
                // We don't use the config passed as argument
                // to avoid changing the original config
                config = utils.extend(true, {}, configFromAttrs);

                // Create chart programmatically so we get a handle of the API
                element = iElement[0];
                config.chart.renderTo = element;
                chart = new Highcharts.Chart(config);

                // Assign showpadController chart
                if (highchartController) {
                    highchartController.chart = chart;
                    highchartController.config = config;
                }

                // Set initial model value if a model is defined
                if (ngModelController) {
                    ngModelController.$setViewValue(highchartController);
                }

                // Debugging
                if (showpadHighchartsConfig.debug) {
                    console.dir('Created chart:');
                    console.dir(chart);
                    console.dir('with config:');
                    console.dir(config);
                }

                // Clean up chart when scope is destroyed to purge memory
                scope.$on('$destroy', function () {

                    // Destroy chart object to purge memory
                    chart.destroy();

                    if (showpadHighchartsConfig.debug) {
                        console.log('Directive scope ' + scope.$id + ' destroyed!');
                        console.log('Chart object removed, memory purged');
                    }
                });

            }
        };

    }]);