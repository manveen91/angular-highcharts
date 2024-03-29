angular.module('showpadHighcharts.services')
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
    }]);