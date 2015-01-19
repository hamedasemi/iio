#!/usr/bin/env node

var cwd = process.cwd();

var config = require(cwd + '/iio.config');
var iio = require('./../index.js')(config);

args = process.argv;
args.splice(0, 2);

iio.start(args);
