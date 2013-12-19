'use strict';

describe('AreasplinerangeChartConfig service', function () {

    var $injector,
        AreasplinerangeChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        AreasplinerangeChartConfig = $injector.get('AreasplinerangeChartConfig');
    }));

    it('should exist', function () {
        expect(AreasplinerangeChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof AreasplinerangeChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new AreasplinerangeChartConfig();
            var obj2 = new AreasplinerangeChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new AreasplinerangeChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new AreasplinerangeChartConfig();
            expect(config.chart.type).toBe('areasplinerange');
        });

    });

});
