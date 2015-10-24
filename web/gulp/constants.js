'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();


/**
 * Task is building index.constants.js file from config.json taking into account environment
 */
gulp.task('constants', function () {
  return gulp.src(path.join(conf.paths.src, '/app/config.json'))
    .pipe($.ngConfig(conf.appName, {
        createModule: false,
        environment: (process.env['NODE_ENV'] || 'development')
      }))
    .pipe($.rename('index.constants.js'))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app')));
});
