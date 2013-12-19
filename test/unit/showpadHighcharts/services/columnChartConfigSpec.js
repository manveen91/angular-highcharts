'use strict';

describe('ColumnChartConfig service', function () {

    var $injector,
        ColumnChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        ColumnChartConfig = $injector.get('ColumnChartConfig');
    }));

    it('should exist', function () {
        expect(ColumnChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ColumnChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new ColumnChartConfig();
            var obj2 = new ColumnChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new ColumnChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new ColumnChartConfig();
            expect(config.chart.type).toBe('column');
        });

    });

});
