var gulp = require('gulp'),
    jasmine = require('gulp-jasmine-phantom'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.jasmine,
    confBrowserify = gulp.config.browserify;

gulp.task('jasmine', function() {
    gulp.src(conf.src + '/' + conf.type)
        .pipe(jasmine(conf.options.options));
});

gulp.task('jasmine:watch', ['jasmine'], function() {
    this.watch(conf.src + '/' + conf.type, ['jasmine']);
    this.watch(confBrowserify.src + '/' + confBrowserify.type, ['jasmine']);
});
