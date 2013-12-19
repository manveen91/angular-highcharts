'use strict';

describe('PieChartConfig service', function () {

    var $injector,
        PieChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        PieChartConfig = $injector.get('PieChartConfig');
    }));

    it('should exist', function () {
        expect(PieChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof PieChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new PieChartConfig();
            var obj2 = new PieChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new PieChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new PieChartConfig();
            expect(config.chart.type).toBe('pie');
        });

    });

});
