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
                useUTC: false
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
    .factory('ColumnChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'column'
            }
        };

        var ColumnChartConfig = function ColumnChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        ColumnChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return ColumnChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('AreaChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'area'
            }
        };

        var AreaChartConfig = function AreaChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        AreaChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return AreaChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('ArearangeChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'arearange'
            }
        };

        var ArearangeChartConfig = function ArearangeChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        ArearangeChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return ArearangeChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('AreasplineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'areaspline'
            }
        };

        var AreasplineChartConfig = function AreasplineChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        AreasplineChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return AreasplineChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('AreasplinerangeChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'areasplinerange'
            }
        };

        var AreasplinerangeChartConfig = function AreasplinerangeChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        AreasplinerangeChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return AreasplinerangeChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('BarChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'bar'
            }
        };

        var BarChartConfig = function BarChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        BarChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return BarChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('BaseChartConfig', ['showpadHighcharts.config', function (config) {

        var BaseChartConfig = function BaseChartConfig() {
        };

        return BaseChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('ColumnrangeChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'columnrange'
            }
        };

        var ColumnrangeChartConfig = function ColumnrangeChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        ColumnrangeChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return ColumnrangeChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('GaugeChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'gauge'
            }
        };

        var GaugeChartConfig = function GaugeChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        GaugeChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return GaugeChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('LineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'line'
            }
        };

        var LineChartConfig = function LineChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
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
    }]);angular.module('showpadHighcharts.services')
    .factory('PieChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'pie'
            }
        };

        var PieChartConfig = function PieChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        PieChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return PieChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('PolarChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                polar: true
            }
        };

        var PolarChartConfig = function PolarChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        PolarChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return PolarChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('ScatterChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'scatter'
            }
        };

        var ScatterChartConfig = function ScatterChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        ScatterChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return ScatterChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('SplineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (config, BaseChartConfig, utils) {

        var defaultConfig = {
            chart: {
                type: 'spline'
            }
        };

        var SplineChartConfig = function SplineChartConfig(config) {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);

            // Deep extend
            utils.deepExtend(this, defaultConfig, config);
        };

        // Initialize prototype as new object who's prototype is the BaseCharConfig prototype
        SplineChartConfig.prototype = new (angular.extend(
            function () {
            },
            {
                prototype: BaseChartConfig.prototype
            }
        ))();

        return SplineChartConfig;
    }]);angular.module('showpadHighcharts.services')
    .factory('utils', ['showpadHighcharts.config', function (config) {

        return {

            // Deep extend method as explained here:
            // http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
            deepExtend: function (destination, source) {
                for (var property in source) {
                    if (source[property] && source[property].constructor &&
                        source[property].constructor === Object) {
                        destination[property] = destination[property] || {};
                        arguments.callee(destination[property], source[property]);
                    } else {
                        destination[property] = source[property];
                    }
                }
                return destination;
            }
        };

    }]);})(window, document);