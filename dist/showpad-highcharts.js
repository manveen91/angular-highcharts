(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('showpadHighcharts.config', [])
    .value('showpadHighcharts.config', {
        debug: true
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
})(window, document);