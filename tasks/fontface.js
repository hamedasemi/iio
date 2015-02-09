var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    gulpfontgen = require("./../plugins/iio-fontface"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.fontface;

var _ = require("underscore");

gulp.task('fontface', conf.dependencies, function() {
    gulp.src(conf.src + '/' + conf.type)
        .pipe(gulpfontgen(_.extend({
            ext: conf.output.ext,
            fontface: conf.dest.fontface,
            relative: conf.dest.relative,
            dest: conf.dest.files
        }, conf.options.options)));
});
