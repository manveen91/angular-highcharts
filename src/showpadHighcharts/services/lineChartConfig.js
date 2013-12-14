angular.module('showpadHighcharts.services')
    .factory('LineChartConfig', ['showpadHighcharts.config', 'BaseChartConfig', function(config, BaseChartConfig){

        var LineChartConfig = function LineChartConfig(){
            BaseChartConfig.call(this, arguments);
        };

        LineChartConfig.prototype = new (angular.extend(
            function () {}, { prototype: BaseChartConfig.prototype}
        ))();

        return LineChartConfig;
    }]);