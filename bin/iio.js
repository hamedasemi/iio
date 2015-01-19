#!/usr/bin/env node

var cwd = process.cwd();

var config = require(cwd + '/iio.config');
var iio = require('./../index.js')(config);

// TODO: Get all the args after iio command and run them like below

iio.start([
  'jade:html:watch',
  'browser:sync',
  'less:watch'
]);