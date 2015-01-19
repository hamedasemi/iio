var gulp = require('gulp'),
    karma = require('karma').server;

gulp.task('karma:single', function(done) {
    karma.start({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            "app/main.js",
            "app/main.spec.js"
        ],
        singleRun: true
    }, done);
});

gulp.task('karma:tdd', function(done) {
    karma.start({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            "app/main.js",
            "app/main.spec.js"
        ],
        action: "run"
    }, done);
});
