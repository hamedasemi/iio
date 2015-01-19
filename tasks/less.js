var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    minify = require('gulp-minify-css'),
    base64 = require('gulp-base64'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.less;

gulp.task('less', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(plumber())
        .pipe(less())
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

gulp.task('less:watch', ['less'], function() {
    this.watch(conf.src + '/' + conf.type, ['less']);
});
