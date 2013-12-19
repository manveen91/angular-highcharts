'use strict';

describe('ArearangeChartConfig service', function () {

    var $injector,
        ArearangeChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        ArearangeChartConfig = $injector.get('ArearangeChartConfig');
    }));

    it('should exist', function () {
        expect(ArearangeChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ArearangeChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new ArearangeChartConfig();
            var obj2 = new ArearangeChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new ArearangeChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new ArearangeChartConfig();
            expect(config.chart.type).toBe('arearange');
        });

    });

});
