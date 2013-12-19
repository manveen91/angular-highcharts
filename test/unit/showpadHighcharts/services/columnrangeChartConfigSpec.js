'use strict';

describe('ColumnrangeChartConfig service', function () {

    var $injector,
        ColumnrangeChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        ColumnrangeChartConfig = $injector.get('ColumnrangeChartConfig');
    }));

    it('should exist', function () {
        expect(ColumnrangeChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ColumnrangeChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new ColumnrangeChartConfig();
            var obj2 = new ColumnrangeChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new ColumnrangeChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new ColumnrangeChartConfig();
            expect(config.chart.type).toBe('columnrange');
        });

    });

});
