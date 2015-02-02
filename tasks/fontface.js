var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    gulpfontgen = require("gulp-fontgen"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.fontface;

var _ = require("underscore");

gulp.task('fontface', conf.dependencies, function() {
    gulp.src(conf.src + '/' + conf.type)
        .pipe(gulpfontgen(_.extend({
            dest: conf.dest.files,
            css: conf.dest.fontface + '/' + conf.output,
            css_fontpath: conf.dest.relative
        }, conf.options.options)));
});
