angular.module('showpadHighcharts.services')
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
    }]);