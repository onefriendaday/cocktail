module.exports = function(grunt) {
	"use strict";

    var paths = {
        src: {
            bower: 'bower_components',
            css: 'source/css',
            fonts: 'source/fonts',
            js: 'source/js',
            images: 'source/images'
        },
        dest: {
            css: 'public/css',
            fonts: 'public/fonts',
            js: 'public/js',
            images: 'public/images'
        }
    };

    var git = require('git-rev');

    grunt.registerTask('writeVersion', function() {
        var done = this.async();

        git.short(function (str) {
            grunt.log.ok('Write Version');
            grunt.file.write('public/version.cache', str);
            grunt.file.delete('public/jsmin', str);
            grunt.config('version', str);
            done();
        })
    });

    require('load-grunt-config')(grunt, {
        config: {
            paths: paths
        }
    });

};