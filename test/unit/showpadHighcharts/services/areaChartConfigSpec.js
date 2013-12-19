'use strict';

describe('AreaChartConfig service', function () {

    var $injector,
        AreaChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        AreaChartConfig = $injector.get('AreaChartConfig');
    }));

    it('should exist', function () {
        expect(AreaChartConfig).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof AreaChartConfig).toBe('function');
    });

    describe('returned constructor function', function () {

        it('should return new configs every time it is called', function () {
            var obj1 = new AreaChartConfig();
            var obj2 = new AreaChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function () {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new AreaChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });


        it('should set the correct chart type', function () {
            var config = new AreaChartConfig();
            expect(config.chart.type).toBe('area');
        });

    });

});
