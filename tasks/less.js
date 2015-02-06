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

var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less(conf.options.options))
        .pipe(autoprefixer(conf.options.prefix))
        .pipe(cmq(conf.options.cmq))
        .pipe(minify(conf.options.minify))
        .pipe(sourcemaps.write())
        .pipe(rename(conf.output))
        .pipe(base64(conf.options.base64))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('less:watch', ['less'], function() {
    this.watch(conf.src + '/' + conf.type, ['less']);
});
