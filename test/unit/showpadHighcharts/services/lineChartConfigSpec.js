'use strict';

describe('LineChartConfig service', function() {

    var $injector,
        LineChartConfig;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function(_$injector_){
        $injector = _$injector_;
        LineChartConfig = $injector.get('LineChartConfig');
    }));

    it('should exist', function() {
        expect(LineChartConfig).toBeDefined();
    });

    it('should be a function', function() {
        expect(typeof LineChartConfig).toBe('function');
    });

    describe('returned constructor function', function(){

        it('should return new configs every time it is called', function() {
            var obj1 = new LineChartConfig();
            var obj2 = new LineChartConfig();
            expect(obj1).not.toBe(obj2);
        });

        it('should return a config that is an instance of baseChartConfig', function() {
            var BaseChartConfig = $injector.get('BaseChartConfig');
            var config = new LineChartConfig();
            expect(config instanceof BaseChartConfig).toBeTruthy();
        });

    });

});
