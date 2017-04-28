var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./public/scripts/index.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/build'));



});
gulp.task('browserify2', function(){
  var b = browserify({
    entries: ['./public/scripts/sub.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('appsub.js'))
    .pipe(gulp.dest('./public/build'));



});
