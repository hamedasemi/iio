var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.js;

gulp.task('js', function() {
    gulp.src(conf.src + '/' + conf.type)
        .pipe(plumber())
        .pipe(concat(conf.output))
        .pipe(uglify())
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js:watch', ['js'], function() {
    this.watch(conf.src + '/' + conf.type, ['js']);
});
