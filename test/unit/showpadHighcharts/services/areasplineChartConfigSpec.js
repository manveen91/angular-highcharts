'use strict';

describe('AreasplineChartConfig service', function () {

    var $injector,
        AreasplineChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        AreasplineChartConfig = $injector.get('AreasplineChartConfig');
    }));

    it('should exist', function () {
        expect(AreasplineChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof AreasplineChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new AreasplineChartConfig();
            var obj2 = new AreasplineChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new AreasplineChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new AreasplineChartConfig();
            expect(config.chart.type).toBe('areaspline');
        });

    });

});
