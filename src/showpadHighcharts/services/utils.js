angular.module('showpadHighcharts.services')
    .factory('utils', ['showpadHighcharts.config', function (config) {

        return {

            // Deep extend method as explained here:
            // http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
            deepExtend: function (destination, source) {
                for (var property in source) {
                    if (source[property] && source[property].constructor &&
                        source[property].constructor === Object) {
                        destination[property] = destination[property] || {};
                        arguments.callee(destination[property], source[property]);
                    } else {
                        destination[property] = source[property];
                    }
                }
                return destination;
            }
        };

    }]);