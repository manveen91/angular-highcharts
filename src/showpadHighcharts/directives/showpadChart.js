angular.module('showpadHighcharts.directives')
    .directive('showpadChart', ['showpadHighcharts.config', 'BaseChartConfig', function (showpadHighchartsConfig, BaseChartConfig) {

        return{
            restrict  : 'A',
            require   : ['showpadChart', '?ngModel'],
            controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {

                // Placeholder for element
                this._element = $element[0];

                // Placeholder for chart API returned by Highcharts
                // to allow access to the API
                this._chart = void 0;

                // Define properties we wish to expose
                Object.defineProperties(this, {
                    element: {
                        get: function(){
                            return this._element;
                        },
                        configurable: false
                    },
                    chart: {
                        get: function(){
                            return this._chart;
                        },
                        configurable: false
                    },
                    config: {
                        get: function(){
                            return this._config;
                        },
                        configurable: false
                    }
                });

            }],
            link      : function (scope, iElement, iAttrs, controllers) {

                console.log('link');
                console.dir(controllers);
                console.dir(scope);

                // Define controller(s)
                var showpadChartController = controllers[0];
                var ngModelController = controllers[1];

                // Get config to work with
                // We don't use the scope.config to avoid changes to affect the original config in the scope
                var config = scope.$eval(iAttrs.showpadChart);

                // Make sure config passed as argument is a valid config
                if (!(config instanceof BaseChartConfig)) {
                    console.log('Skipped rendering chart because config is not instance of BaseChartConfig');
                    return;
                }

                // Create chart programmatically so we get a handle of the API
                var element = iElement[0];
                config.chart.renderTo = element;
                var chart = new Highcharts.Chart(config);

                // Assign showpadController chart
                if(showpadChartController){
                    showpadChartController._chart = chart;
                }

                // Set initial model value if a model is defined
                if (ngModelController) {
                    ngModelController.$setViewValue(showpadChartController);
                }

                // Debugging
                if (showpadHighchartsConfig.debug) {
                    console.dir('Created chart with config:');
                    console.dir(config);
                }

            }
        };

    }]);