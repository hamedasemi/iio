var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    minify = require('gulp-minify-css'),
    base64 = require('gulp-base64'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.stylus;

gulp.task('stylus', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer(conf.options))
        .pipe(cmq({
            log: true
        }))
        .pipe(minify())
        .pipe(rename(conf.output))
        .pipe(base64({
            maxImageSize: conf.maxImageSize,
            debug: true
        }))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('stylus:watch', ['stylus'], function() {
    this.watch(conf.src + '/' + conf.type, ['stylus']);
});
