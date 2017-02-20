var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('time', () => console.log(Date.now()))

gulp.task('CoryAndBrianna', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});


gulp.task('sass', function () {
return gulp.src('./css/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});
