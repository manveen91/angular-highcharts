angular.module('showpadHighcharts.services')
    .factory('LineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', function (config, BaseChartConfig) {

        var LineChartConfig = function LineChartConfig() {

            // Call parent constructor
            BaseChartConfig.call(this, arguments);
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
    }]);