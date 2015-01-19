module.exports = function(config) {
    var gulp = require('gulp');
    gulp.config = config;
    var help = require('./tasks/help'),
        stylus = require('./tasks/stylus'),
        less = require('./tasks/less'),
        jade = require('./tasks/jade'),
        js = require('./tasks/js'),
        karma = require('./tasks/karma'),
        browserify = require('./tasks/browserify'),
        browsersync = require('./tasks/browsersync'),
        jasmine = require('./tasks/jasmine');

    gulp.task('default', ['tasklist'], function() {

    });
    return gulp;
};
