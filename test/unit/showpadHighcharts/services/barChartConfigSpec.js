'use strict';

describe('BarChartConfig service', function () {

    var $injector,
        BarChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        BarChartConfig = $injector.get('BarChartConfig');
    }));

    it('should exist', function () {
        expect(BarChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof BarChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new BarChartConfig();
            var obj2 = new BarChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new BarChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new BarChartConfig();
            expect(config.chart.type).toBe('bar');
        });

    });

});
