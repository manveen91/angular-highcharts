'use strict';

describe('showpadChart directive', function () {

    var $injector,
        $compile,
        $rootScope,
        scope;

    beforeEach(module('showpadHighcharts'));

    beforeEach(inject(function (_$injector_, _$compile_, _$rootScope_) {
        $injector = _$injector_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
    }));

    it('should skip rendering when no config is passed', function () {
        var element = angular.element('<div showpad-chart></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element).toBeEmpty();
    });

    it('should skip rendering when an empty object literal is passed as config', function () {
        var element = angular.element('<div showpad-chart="config"></div>');
        scope.config = {};
        $compile(element)(scope);
        scope.$digest();
        expect(element.html()).toBe('');
    });

    it('should render a line chart when a LineChartConfig instance is passed', function () {
        var LineChartConfig = $injector.get('LineChartConfig');
        scope.config = new LineChartConfig();
        var element = angular.element('<div showpad-chart="config"></div>');
        $compile(element)(scope);
        scope.$digest();
        expect(element).toContain('div.highcharts-container');
        expect(element).toContain('svg');
    });

});
