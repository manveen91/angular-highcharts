'use strict';

describe('PolarChartConfig service', function () {

    var $injector,
        PolarChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        PolarChartConfig = $injector.get('PolarChartConfig');
    }));

    it('should exist', function () {
        expect(PolarChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof PolarChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new PolarChartConfig();
            var obj2 = new PolarChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new PolarChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new PolarChartConfig();
            expect(config.chart.type).toBe('polar');
        });

    });

});
