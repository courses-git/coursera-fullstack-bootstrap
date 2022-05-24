'use strict';

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt);

  // Need to work correct with grunt-sass v.^3
  const sass = require('node-sass');

  // Define the configuration for all the tasks
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourcemap: 'none'
      },
      dist: {
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    },
    watch: {
      files: 'css/*.scss',
      tasks: ['sass']
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
