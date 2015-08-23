module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['src/**/*.js', 'index.html', 'sass/**/*.scss'],
            tasks: ['browserify', 'copy:html', 'sass']
        },
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
        sass: {
            dist: {
                files: {
                    'dist/style.css' : 'sass/style.scss'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};