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
    .directive('showpadChart', ['showpadHighcharts.config', 'BaseChartConfig', 'utils', function (showpadHighchartsConfig, BaseChartConfig, utils) {

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
                var configFromAttrs = scope.$eval(iAttrs.showpadChart);

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
                if(showpadChartController){
                    showpadChartController._chart = chart;
                    showpadChartController._config = config;
                }

                // Set initial model value if a model is defined
                if (ngModelController) {
                    ngModelController.$setViewValue(showpadChartController);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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
            utils.extend(true, this, defaultConfig, config);
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

            /**
             * Extend method as implemented by jQuery
             * https://github.com/jquery/jquery/blob/master/src/core.js
             *
             * jQuery specific code is replaced by AngularJS specific code
             *
             * @returns {*|{}}
             */
            extend   : function () {
                var options, name, src, copy, copyIsArray, clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;

                // Handle a deep copy situation
                if (typeof target === "boolean") {
                    deep = target;

                    // skip the boolean and the target
                    target = arguments[ i ] || {};
                    i++;
                }

                // Handle case when target is a string or something (possible in deep copy)
                if (typeof target !== "object" && !angular.isFunction(target)) {
                    target = {};
                }

                // extend jQuery itself if only one argument is passed
                if (i === length) {
                    target = this;
                    i--;
                }

                for (; i < length; i++) {
                    // Only deal with non-null/undefined values
                    if ((options = arguments[ i ]) !== null) {
                        // Extend the base object
                        for (name in options) {
                            src = target[ name ];
                            copy = options[ name ];

                            // Prevent never-ending loop
                            if (target === copy) {
                                continue;
                            }

                            // Recurse if we're merging plain objects or arrays
                            // Moved isArry to front of comparison since we don't have isPlainObject method available
                            if (deep && copy && ( (copyIsArray = angular.isArray(copy)) || angular.isObject(copy) )) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && angular.isArray(src) ? src : [];

                                } else {
                                    clone = src && angular.isObject(src) ? src : {};
                                }

                                // Never move original objects, clone them
                                target[ name ] = this.extend(deep, clone, copy);

                                // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[ name ] = copy;
                            }
                        }
                    }
                }

                // Return the modified object
                return target;
            }

        };

    }]);})(window, document);