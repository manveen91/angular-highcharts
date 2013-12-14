# angular-highcharts

AngularJS module for working with Highcharts

## How to load the module

First make sure the Highcharts library is loaded:

    <script src="highcharts.js"></script>

Then load `showpad-highcharts.js`:

    <script src="showpad-highcharts.js"></script>

Finally list the module as a dependency in your AngularJS app:

    angular.module('yourApp', ['showpadHighcharts']);

## Change log

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

