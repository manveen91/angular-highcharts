# The showpadHighcharts module

AngularJS module for working with Highcharts

## How to load the module

First make sure the jQuery library and the Highcharts library are loaded:

    <script src="jquery.js"></script>
    <script src="highcharts.js"></script>

Then load `showpad-highcharts.js`:

    <script src="showpad-highcharts.js"></script>

Finally list the module as a dependency in your AngularJS app:

    angular.module('yourApp', ['showpadHighcharts']);

## Quick start

To add a chart to a page, just use the following HTML:

    <div showpad-chart="chartConfig"><div>

where chartConfig is a valid chart configuration.

## Chart configuration

Several helper services are available to help you
create chart configurations in a quick and convenient way.

Each helper service returns a constructor that allows
you to create a chart configuration for a certain type of chart.

To view a list of all available properties, please
visit the [Highcharts API documentation](http://api.highcharts.com/highcharts).

### LineChartConfig

First use the `LineChartConfig` service to create a line chart configuration:

    angular.module('yourApp')
        .controller('yourController', ['$scope', 'LineChartConfig', function($scope, LineChartConfig){

            $scope.chartConfig = new LineChartConfig({
                title: {
                    text: 'Line chart demo'
                }
                series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
            });

        }]);

Then display the chart in your view:

    <div showpad-chart="chartConfig"><div>

## The showpad-highcharts API

Use the showpad-highcharts API if you need to dynamically
update your chart after initially rendering it.

To access the API, use the `ng-model` directive:

    <div showpad-chart="chartConfig" ng-model="someChart"><div>

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

v0.5.0

- Added utils.extend() helper method

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

