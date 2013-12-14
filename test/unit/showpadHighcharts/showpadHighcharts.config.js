'use strict';

describe('showpadHighcharts.config', function() {

    var Highcharts = window.Highcharts;

    beforeEach(module('showpadHighcharts.config'));

    describe('Highcharts configuration', function(){

        it('should set global.useUTC correctly', function() {
            var options = Highcharts.getOptions();
            expect(options.global.useUTC).toBe(true);
        });

    })

});
