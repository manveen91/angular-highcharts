// Make sure the jQuery library is loaded
if (!window.jQuery) {
    throw new Error('Cannot load showpadHighcharts module because jQuery library is not loaded');
}

// Make sure the Highcharts library is loaded
if (!window.Highcharts) {
    throw new Error('Cannot load showpadHighcharts module because Highcharts library is not loaded');
}

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('showpadHighcharts.config', [])
    .value('showpadHighcharts.config', {
        debug: true
    })
    .config(function () {
        window.Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
    });

// Modules
angular.module('showpadHighcharts.directives', []);
angular.module('showpadHighcharts.filters', []);
angular.module('showpadHighcharts.services', []);
angular.module('showpadHighcharts',
    [
        'showpadHighcharts.config',
        'showpadHighcharts.directives',
        'showpadHighcharts.filters',
        'showpadHighcharts.services'
    ]);