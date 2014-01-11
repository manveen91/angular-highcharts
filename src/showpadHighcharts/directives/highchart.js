angular.module('showpadHighcharts.directives')
    .directive('highchart', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (showpadHighchartsConfig, BaseChartConfig, utils) {

        return{
            restrict  : 'A',
            require   : ['highchart', '?ngModel'],
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
                var highchartController = controllers[0];
                var ngModelController = controllers[1];

                // Get config to work with
                var configFromAttrs = scope.$eval(iAttrs.highchart);

                // Make sure config passed as argument is a valid config
                if (!(configFromAttrs instanceof BaseChartConfig)) {
                    console.log('Skipped rendering chart because config is not instance of BaseChartConfig');
                    return;
                }

                // Create config to work with
                // We don't use the config passed as argument
                // to avoid changing the original config
                var config = utils.extend(true, {}, configFromAttrs);

                // Create chart programmatically so we get a handle of the API
                var element = iElement[0];
                config.chart.renderTo = element;
                var chart = new Highcharts.Chart(config);

                // Assign showpadController chart
                if(highchartController){
                    highchartController._chart = chart;
                    highchartController._config = config;
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

            }
        };

    }]);