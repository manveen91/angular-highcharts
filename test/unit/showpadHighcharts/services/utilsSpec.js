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

    describe('extend method', function () {


        it('should exist', function () {
            expect(utils.extend).toBeDefined();
        });

        it('should be a function', function () {
            expect(typeof utils.extend).toBe('function');
        });

        it('should merge into the first argument', function () {
            var a = {},
                b = {};

            var extended = utils.extend(a, b);
            expect(extended).toBe(a);
        });

        it('should handle empty objects correctly', function () {
            var a = {},
                b = {},
                c = {};

            var extended = utils.extend(a, b, c);

            expect(extended).toEqual(b);
        });

        it('should deep extend objects correctly', function () {
            var a = {
                    a: {
                        one: 'a'
                    }
                },
                b = {
                    b: {
                        one: 'b'
                    }
                },
                c = {
                    c: {
                        one: 'c'
                    },
                    b : {
                        two: 'bb'
                    }
                };

            var extended = utils.extend(true, a, b, c);

            expect(extended).toEqual({
                a: {
                    one: 'a'
                },
                b: {
                    one: 'b',
                    two: 'bb'
                },
                c: {
                    one: 'c'
                }
            });
        });


    });

});
