# The showpadHighcharts module

AngularJS module for working with Highcharts

## How to load the module

First make sure the jQuery library and the Highcharts library are loaded:

    <script src="jquery.js"></script>
    <script src="highcharts.js"></script>

Then load `showpad-angular-highcharts.js`:

    <script src="showpad-angular-highcharts.js"></script>

Finally list the module as a dependency in your AngularJS app:

    angular.module('yourApp', ['showpadHighcharts']);

## Quick start

To add a chart to a page, just use the following HTML:

    <div highchart="chartConfig"><div>

where chartConfig is a valid chart configuration.

## Chart configuration

Several helper services are available to help you
create chart configurations in a quick and convenient way:

- SplineChartConfig
- AreaChartConfig
- AreasplineChartConfig
- ColumnChartConfig
- BarChartConfig
- PieChartConfig
- ScatterChartConfig
- PolarChartConfig
- GaugeChartConfig
- ArearangeChartConfig
- AreasplinerangeChartConfig
- ColumnRangeChartConfig

Each helper service returns a constructor that allows
you to create a chart configuration for a certain type of chart.

To view a list of all available properties, please
visit the [Highcharts API documentation](http://api.highcharts.com/highcharts).

## Line chart example

First use the `LineChartConfig` service to create a line chart configuration:

    angular.module('yourApp')
        .controller('yourController', ['$scope', 'LineChartConfig', function($scope, LineChartConfig){

            $scope.chartConfig = new LineChartConfig({
                title: {
                    text: 'Line chart demo'
                }
                series: [] // Data should come here
            });

        }]);

Then display the chart in your view:

    <div highchart="chartConfig"><div>

Check out the [line chart example page](https://github.com/showpad/angular-highcharts/tree/master/examples/line-chart).

## Pie chart example

First use the `PieChartConfig` service to create a line chart configuration:

    angular.module('yourApp')
        .controller('yourController', ['$scope', 'PieChartConfig', function($scope, PieChartConfig){

            $scope.chartConfig = new PieChartConfig({
                title: {
                    text: 'Pie chart demo'
                }
                series: [] // Data should come here
            });

        }]);

Then display the chart in your view:

    <div highchart="chartConfig"><div>

Check out the [pie chart example page](https://github.com/showpad/angular-highcharts/tree/master/examples/pie-chart).

## Area chart example

First use the `AreaChartConfig` service to create a line chart configuration:

    angular.module('yourApp')
        .controller('yourController', ['$scope', 'AreaChartConfig', function($scope, AreaChartConfig){

            $scope.chartConfig = new AreaChartConfig({
                title: {
                    text: 'Area chart demo'
                }
                series: [] // Data should come here
            });

        }]);

Then display the chart in your view:

    <div highchart="chartConfig"><div>

Check out the [area chart example page](https://github.com/showpad/angular-highcharts/tree/master/examples/area-chart).

## Column chart example

First use the `ColumnChartConfig` service to create a line chart configuration:

    angular.module('yourApp')
        .controller('yourController', ['$scope', 'ColumnChartConfig', function($scope, ColumnChartConfig){

            $scope.chartConfig = new ColumnChartConfig({
                title: {
                    text: 'Column chart demo'
                }
                series: [] // Data should come here
            });

        }]);

Then display the chart in your view:

    <div highchart="chartConfig"><div>

Check out the [column chart example page](https://github.com/showpad/angular-highcharts/tree/master/examples/column-chart).

## The showpad-highcharts API

Use the showpad-highcharts API if you need to dynamically
update your chart after initially rendering it.

To access the API, use the `ng-model` directive:

    <div highchart="chartConfig" ng-model="someChart"><div>

This will assign the API to the `someChart` property of the current scope.

The API then lets you:

    // Access the actual element
    someChart.element;

    // Access the underlying Highcharts API
    someChart.chart;

    // Access the configuration used to render the chart
    someChart.config;

See the API in action in the [examples](https://github.com/showpad/angular-highcharts/tree/master/examples).

## The utils service

To prevent relying on third party libraries such as jQuery, the utils service provides a few helper methods:

### utils.extend()

The `utils.extend()` method is virtually a clone of [jQuery.extend()](http://api.jquery.com/jQuery.extend/).

It is refactored to use AngularJS methods so it doesn't rely on jQuery.

## How to run the demo locally

Clone this repository on your local machine:

    git clone https://github.com/showpad/angular-highcharts.git

Install Node.js dependencies:

    npm install

Install bower dependencies:

    bower install

Start local web server:

    grunt serve

Open your web browser and navigate to:

    http://localhost:9000/examples/

## Change log

v0.7.0

- Added support to purge memory when directive is removed
- Updated directive and package name

v0.6.0

- Added example page for bar chart
- Added example page for stacked bar chart
- Added example page for stacked column chart

v0.5.0

- Added utils.extend() helper method
- Updated example page for line chart
- Added example page for pie chart
- Added example page for area chart
- Added example page for column chart
- Added additional unit tests
- Updated documentation

v0.4.0

- Removed dependency for jQuery
- Added SplineChartConfig
- Added AreaChartConfig
- Added AreasplineChartConfig
- Added ColumnChartConfig
- Added BarChartConfig
- Added PieChartConfig
- Added ScatterChartConfig
- Added PolarChartConfig
- Added GaugeChartConfig
- Added ArearangeChartConfig
- Added AreasplinerangeChartConfig
- Added ColumnRangeChartConfig

v0.3.0

- Added ng-model support for providing a handle to the API
- Updated example page with dynamic data updates
- Updated documentation

v0.2.0

- Added check to make sure the Highcharts library is loaded
- Added support for global Highcarts configuration
- Added unit tests
- Updated documentation

v0.1.0

- Initial commit
- Added modular directory structure for src and test files
- Added GruntJS support for building dist files
- Added Karma support for running unit tests
- Added Bower support

