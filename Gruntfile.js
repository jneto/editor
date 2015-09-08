module.exports = function(grunt) {
    var nightwatch = require('nightwatch');

    nightwatch.initGrunt(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'dist/app.js': ['src/**/*.js'],
                }
            }
        },
        copy: {
            html: {
                files: [
                    {src: 'index.html', dest: 'dist/'}
                ]
            }
        },
        express: {
            test: {
                options: {
                    script: './server.js'
                }
            }
        },
        nightwatch: {
            options: {
                cwd: './'
            },
            default: {},
            chrome: {
                argv: {
                    env: 'chrome'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            files: ['src/**/*.js', 'index.html', 'sass/**/*.scss'],
            tasks: ['browserify', 'copy:html', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['browserify', 'copy:html', 'sass']);
    grunt.registerTask('test', ['build', 'express:test', 'nightwatch']);
};