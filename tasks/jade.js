var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.jade;

gulp.task('jade:html', function() {

    // TODO: Use gulp-data to fetch the data from a json file

    var data = {};
    gulp.src(conf.src + '/' + conf.input)
        .pipe(plumber())
        .pipe(jade({
            locals: data,
            pretty: conf.pretty
        }))
        .pipe(rename(conf.output))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jade:html:watch', ['jade:html'], function() {
    this.watch(conf.src + '/' + conf.type, ['jade:html']);
});

gulp.task('jade:js', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(plumber())
        .pipe(jade({
            client: true
        }))
        .pipe(uglify())
        .pipe(rename(conf.output))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jade:js:watch', ['jade:js'], function() {
    this.watch(conf.src + '/' + conf.type, ['jade:js']);
});
