'use strict';

describe('GaugeChartConfig service', function () {

    var $injector,
        GaugeChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        GaugeChartConfig = $injector.get('GaugeChartConfig');
    }));

    it('should exist', function () {
        expect(GaugeChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof GaugeChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new GaugeChartConfig();
            var obj2 = new GaugeChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new GaugeChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new GaugeChartConfig();
            expect(config.chart.type).toBe('gauge');
        });

    });

});
