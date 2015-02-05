module.exports = function(config) {

    var colors = require('colors');
    var gulp = require('gulp');

    gulp.config = config;
    config.tasks.push('support');

    console.log(colors.white("  Loading tasks:"));
    for (var task in config.tasks) {
        eval(config.tasks[task] + ' = require("./tasks/' + config.tasks[task] + '")');
        console.log(colors.blue("     " + colors.bold.blue.underline(config.tasks[task]) + ""));
    }
    console.log(colors.white("  Done! \n"));
    return gulp;
};
