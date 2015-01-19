var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.browserify;

gulp.task('browserify', conf.dependencies, function() {
    gulp.src(conf.src + '/' + conf.input, {
            read: false
        })
        .pipe(plumber())
        .pipe(browserify({
            transform: conf.transform,
            extensions: conf.extensions
        }))
        .pipe(rename(conf.output))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browserify:watch', ['browserify'], function() {
    this.watch(conf.src + '/' + conf.type, ['browserify']);
});
