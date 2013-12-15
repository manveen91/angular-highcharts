# angular-highcharts

AngularJS module for working with Highcharts

## How to load the module

First make sure the Highcharts library is loaded:

    <script src="highcharts.js"></script>

Then load `showpad-highcharts.js`:

    <script src="showpad-highcharts.js"></script>

Finally list the module as a dependency in your AngularJS app:

    angular.module('yourApp', ['showpadHighcharts']);

## How to see it working locally

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

