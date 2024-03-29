angular.module('showpadHighcharts.services')
    .factory('utils', ['showpadHighcharts.config', function (config) {

        return {

            /**
             * Extend method as implemented by jQuery
             * https://github.com/jquery/jquery/blob/master/src/core.js
             *
             * jQuery specific code is replaced by AngularJS specific code
             *
             * @returns {*|{}}
             */
            extend   : function () {
                var options, name, src, copy, copyIsArray, clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;

                // Handle a deep copy situation
                if (typeof target === "boolean") {
                    deep = target;

                    // skip the boolean and the target
                    target = arguments[ i ] || {};
                    i++;
                }

                // Handle case when target is a string or something (possible in deep copy)
                if (typeof target !== "object" && !angular.isFunction(target)) {
                    target = {};
                }

                // extend jQuery itself if only one argument is passed
                if (i === length) {
                    target = this;
                    i--;
                }

                for (; i < length; i++) {
                    // Only deal with non-null/undefined values
                    if ((options = arguments[ i ]) !== null) {
                        // Extend the base object
                        for (name in options) {
                            src = target[ name ];
                            copy = options[ name ];

                            // Prevent never-ending loop
                            if (target === copy) {
                                continue;
                            }

                            // Recurse if we're merging plain objects or arrays
                            // Moved isArry to front of comparison since we don't have isPlainObject method available
                            if (deep && copy && ( (copyIsArray = angular.isArray(copy)) || angular.isObject(copy) )) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && angular.isArray(src) ? src : [];

                                } else {
                                    clone = src && angular.isObject(src) ? src : {};
                                }

                                // Never move original objects, clone them
                                target[ name ] = this.extend(deep, clone, copy);

                                // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[ name ] = copy;
                            }
                        }
                    }
                }

                // Return the modified object
                return target;
            }

        };

    }]);