module.exports = function(grunt) {
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'compass': {
            options: {
                sassDir: 'sass',
                fontsDir: 'fonts',
                cssDir: 'css',
            },
            dist: {
                options: {
                    environment: 'production',
                    outputStyle: 'compress',
                },
            },
            dev: { },
        },
        'jshint': {
            options: {
                jshintrc: '.jshintrc',
            },
            js: ['js/**/*.js'],
        },
        'watch': {
            options: {
                spawn: true,
                atBegin: true,
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['jshint:js'],
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            },
        },
        'concurrent': {
            options: {
                logConcurrentOutput: true,
            },
            dev: {
                tasks: ['watch:scripts', 'watch:css'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:dev']);

};
