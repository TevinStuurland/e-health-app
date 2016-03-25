'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");

gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', function(err) {
            notify().write(err);
            this.emit('end');
        }))
        .pipe(gulp.dest('./app/styles'))
        .pipe(notify({ message: 'Sassified :)' }));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
