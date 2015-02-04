var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown'),
    markdownGithub = require('./../plugins/iio-markdown.js'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    conf = gulp.config.markdown;

gulp.task('markdown', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(markdown())
        .pipe(rename(conf.output))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('markdown:map', function() {
    gulp.src(conf.src + '/' + conf.type)
        .pipe(markdown())
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('markdown:github', function() {
    gulp.src(conf.src + '/' + conf.input)
        .pipe(markdownGithub())
        .pipe(rename(conf.output))
        .pipe(gulp.dest(conf.dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('markdown:watch', ['markdown'], function() {
    this.watch(conf.src + '/' + conf.type, ['markdown']);
});

gulp.task('markdown:map:watch', ['markdown:map'], function() {
    this.watch(conf.src + '/' + conf.type, ['markdown:map']);
});

gulp.task('markdown:github:watch', ['markdown:github'], function() {
    this.watch(conf.src + '/' + conf.type, ['markdown:github']);
});
