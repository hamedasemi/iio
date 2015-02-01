#!/usr/bin/env node

var cwd = process.cwd();

var colors = require('chalk');
console.log(colors.bold.cyan.underline('\nYap! iio is fast\n'));

var config = {};

var defaultConfig = require(cwd + '/defaults/iio.config');
var userConfig = require(cwd + '/iio.config');

for (var attrname in defaultConfig) {
    config[attrname] = defaultConfig[attrname];
}
for (var attrname in userConfig) {
    config[attrname] = userConfig[attrname];
}

var tasks = [];
for (var task in userConfig) {
    tasks.push(task);
}
config.tasks = tasks;

var iio = require('./../index.js')(config);

args = process.argv;
args.splice(0, 2);

if (args.length) {
    iio.start(args);
} else {
    iio.start(['support:tasks']);
}
