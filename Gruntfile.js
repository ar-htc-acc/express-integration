module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            main: {
                options: {
                    paths: ['public/stylesheets']
                },
                files: {
                    'public/tmp/css/main.css': 'public/stylesheets/main.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/tmp/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/build/css',
                    ext: '.min.css'
                }]
            }
        },
        browserify: {
            client: {
                src:['public/javascripts/main.js'],
                dest: 'public/tmp/js/main.js'
            }
        },
        uglify: {
            myApp: {
                files: {
                    'public/build/js/main.min.js': ['public/tmp/js/main.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/javascripts/*.js'], // check why **/*.js is not working?
                tasks: ['browserify', 'uglify'] // note: the sequence matters?
            },
            styles: {
                files: ['public/stylesheets/*.less'],
                tasks: ['less', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); // watch and execute tasks

    // dev
    grunt.registerTask('default', ['browserify', 'less']); // npm run grunt

    // prod
    grunt.registerTask('build', ['browserify', 'less', 'uglify', 'cssmin']); // npm run grunt build
};