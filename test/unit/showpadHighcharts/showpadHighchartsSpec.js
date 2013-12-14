'use strict';

describe('showpadHighcharts', function () {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function (module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function () {

        // Get module
        module = angular.module('showpadHighcharts');
        dependencies = module.requires;
    });

    it('should load config module', function () {
        expect(hasModule('showpadHighcharts.config')).toBeTruthy();
    });


    it('should load filters module', function () {
        expect(hasModule('showpadHighcharts.filters')).toBeTruthy();
    });


    it('should load directives module', function () {
        expect(hasModule('showpadHighcharts.directives')).toBeTruthy();
    });


    it('should load services module', function () {
        expect(hasModule('showpadHighcharts.services')).toBeTruthy();
    });


});
