(function(window, document) {

// Make sure the jQuery library is loaded
if (!window.jQuery) {
    throw new Error('Cannot load showpadHighcharts module because jQuery library is not loaded');
}

// Make sure the Highcharts library is loaded
if (!window.Highcharts) {
    throw new Error('Cannot load showpadHighcharts module because Highcharts library is not loaded');
}

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('showpadHighcharts.config', [])
    .value('showpadHighcharts.config', {
        debug: true
    })
    .config(function () {
        window.Highcharts.setOptions({
            global: {
                useUTC: true
            }
        });
    });

// Modules
angular.module('showpadHighcharts.directives', []);
angular.module('showpadHighcharts.filters', []);
angular.module('showpadHighcharts.services', []);
angular.module('showpadHighcharts',
    [
        'showpadHighcharts.config',
        'showpadHighcharts.directives',
        'showpadHighcharts.filters',
        'showpadHighcharts.services'
    ]);angular.module('showpadHighcharts.directives')
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

                // Placeholder for config for this directive
                // This allows us to make changes to this config
                // without affectingt the original config in the scope
                // this._config = jQuery.extend(true, {}, $scope.$eval($attrs.showpadChart));

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

    }]);angular.module('showpadHighcharts.services')
    .factory('BaseChartConfig', ['showpadHighcharts.config', function (config) {

        var BaseChartConfig = function BaseChartConfig() {
        };

        return BaseChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('LineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', function (config, BaseChartConfig) {

        var defaultConfig = {
            chart: {
                type: 'line'
            }
        };

        var LineChartConfig = function LineChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            jQuery.extend(true, this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        LineChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return LineChartConfig;
    }]);})(window, document);