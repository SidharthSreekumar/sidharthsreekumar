'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
}

exports.default = function () {
  browserSync.init({
    server: "./"
  });
  gulp.watch('scss/**/*.scss', buildStyles);
  gulp.watch(['./**/*.html', './js/**/*.js', './css/**/*.css']).on('change', browserSync.reload);
}
