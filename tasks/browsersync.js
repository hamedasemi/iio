var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    conf = gulp.config.browsersync;

var _ = require("underscore");

// Override basic _.defaults
_.defaults = require('merge-defaults');

gulp.task('browser', function() {
    browserSync(_.defaults({
            open: true,
            codeSync: false
        },
        conf.options.options
    ));
});

gulp.task('browser:ext', function() {
    browserSync(_.defaults({
            open: "external",
            codeSync: false
        },
        conf.options.options
    ));
});

gulp.task('browser:sync', function() {
    browserSync(_.defaults({
            open: true,
            codeSync: true
        },
        conf.options.options
    ));
});

gulp.task('browser:ext:sync', function() {
    browserSync(_.defaults({
            open: "external",
            codeSync: true
        },
        conf.options.options
    ));
});
