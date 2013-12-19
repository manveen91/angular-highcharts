'use strict';

describe('ScatterChartConfig service', function () {

    var $injector,
        ScatterChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        ScatterChartConfig = $injector.get('ScatterChartConfig');
    }));

    it('should exist', function () {
        expect(ScatterChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ScatterChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new ScatterChartConfig();
            var obj2 = new ScatterChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new ScatterChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new ScatterChartConfig();
            expect(config.chart.type).toBe('scatter');
        });

    });

});
