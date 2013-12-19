angular.module('showpadHighcharts.services')
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
    }]);