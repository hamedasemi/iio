var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    conf = gulp.config.browsersync;

gulp.task('browser:sync', function() {
    browserSync(conf.options.options);
});
