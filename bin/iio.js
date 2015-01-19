#!/usr/bin/env node

var cwd = process.cwd();

var colors = require('chalk');
console.log(colors.bold.cyan.underline('\nYap! iio is fast\n'));

var config = require(cwd + '/iio.config');

var tasks = [];
for (var task in config) {
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
