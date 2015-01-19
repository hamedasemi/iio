module.exports = function(config) {
    var gulp = require('gulp');
    gulp.config = config;

// TODO: Show all available tasks and configured tasks
// TODO: Load the tasks based on config file

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
