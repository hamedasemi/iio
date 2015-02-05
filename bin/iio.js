#!/usr/bin/env node

var _ = require("underscore");
var cwd = process.cwd();
var colors = require('chalk');

console.log(colors.bold.cyan.underline('\nYap! iio is easy\n'));

try {
    var userConfig = require(cwd + '/iio.config');
} catch (ex) {
    var userConfig = {};
}

var defaultConfig = require(cwd + '/defaults/iio.config');

var tasks = [];
for (var task in userConfig) {
    tasks.push(task);
}

// Override basic _.defaults
_.defaults = require('merge-defaults');

var config = _.defaults(userConfig, defaultConfig);

config.tasks = tasks;

var iio = require('./../index.js')(config);

args = process.argv;
args.splice(0, 2);

if (args.length) {
    iio.start(args);
} else {
    iio.start(['support:tasks']);
}
