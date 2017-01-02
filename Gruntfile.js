module.exports = function (grunt) {

    grunt.initConfig({
        // tasks
        less: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/stylesheets/',
                    src: ['**/*.less'],
                    dest: 'public/tmp/css/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/tmp/css/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'public/build/css/',
                    ext: '.min.css'
                }]
            }
        },
        browserify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/javascripts/',
                    src: ['**/*.js', '!module-*.js'], // module-*.js are modules that are used by other JS files, don't include them
                    dest: 'public/tmp/js/',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/tmp/js/',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'public/build/js/',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['public/javascripts/**/*.js'],
                tasks: ['browserify', 'uglify'] // note: the sequence matters?
            },
            styles: {
                files: ['public/stylesheets/**/*.less'],
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