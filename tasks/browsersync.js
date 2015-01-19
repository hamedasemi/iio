var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    conf = gulp.config.server;

gulp.task('browser:sync', function() {
    browserSync(conf.options);
});
