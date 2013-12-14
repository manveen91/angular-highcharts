module.exports = function (grunt) {

    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        concat : {
            options: {
                separator: ''
            },
            library: {
                src : [
                    'src/showpadHighcharts/showpadHighcharts.prefix',
                    'src/showpadHighcharts/showpadHighcharts.js',
                    'src/showpadHighcharts/directives/**/*.js',
                    'src/showpadHighcharts/filters/**/*.js',
                    'src/showpadHighcharts/services/**/*.js',
                    'src/showpadHighcharts/showpadHighcharts.suffix'
                ],
                dest: 'dist/showpad-highcharts.js'
            }
        },
        uglify : {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            jid    : {
                files: {
                    'dist/showpad-highcharts.min.js': ['<%= concat.library.dest %>']
                }
            }
        },
        jshint : {
            beforeConcat: {
                src: ['gruntfile.js', 'showpadHighcharts/**/*.js']
            },
            afterConcat : {
                src: [
                    '<%= concat.library.dest %>'
                ]
            },
            options     : {
                // options here to override JSHint defaults
                globals     : {
                    jQuery  : true,
                    console : true,
                    module  : true,
                    document: true,
                    angular : true
                },
                globalstrict: false
            }
        },
        connect: {
            server: {
                options: {
                    port      : 9000,
                    base      : './',
                    hostname  : 'localhost',
                    keepalive : true,
                    livereload: true
                }
            }
        },
        watch  : {
            options: {
                livereload: true
            },
            files  : [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks  : ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint:beforeConcat', 'concat', 'jshint:afterConcat', 'uglify']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('livereload', ['default', 'watch']);

};