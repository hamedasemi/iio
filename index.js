module.exports = function(config) {

		var colors = require('colors');
    var gulp = require('gulp');

    gulp.config = config;
    config.tasks.push('support');

    for (var task in config.tasks){
    	eval(config.tasks[task] + ' = require("./tasks/' + config.tasks[task] + '")');
    }
    return gulp;
};
