angular.module('showpadHighcharts.services')
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
    }]);