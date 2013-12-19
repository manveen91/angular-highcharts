'use strict';

describe('SplineChartConfig service', function () {

    var $injector,
        SplineChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        SplineChartConfig = $injector.get('SplineChartConfig');
    }));

    it('should exist', function () {
        expect(SplineChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof SplineChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new SplineChartConfig();
            var obj2 = new SplineChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new SplineChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new SplineChartConfig();
            expect(config.chart.type).toBe('spline');
        });

    });

});
