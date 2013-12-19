'use strict';

describe('utils service', function () {

    var $injector,
        utils;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_) {
        $injector = _$injector_;
        utils = $injector.get('utils');
    }));

    it('should exist', function () {
        expect(utils).toBeDefined();
    });

    it('should be an object', function () {
        expect(typeof utils).toBe('object');
    });

    describe('deepExtend method', function () {


        it('should exist', function () {
            expect(utils.deepExtend).toBeDefined();
        });

        it('should be a function', function () {
            expect(typeof utils.deepExtend).toBe('function');
        });


    });

});
