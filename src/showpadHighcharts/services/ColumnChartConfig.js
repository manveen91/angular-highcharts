angular.module('showpadHighcharts.services')
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
    }]);