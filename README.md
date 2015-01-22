# iio Development Environment

The right way of using node.js none blocking I/O to ease and speed up configuration and development environment common tasks using Gulp, Grunt and other NPM useful plug-ins.

The current startup version supports Browserify, BrowserSync, Jade, Jasmine, JavaScript, Less, Stylus, Karma and task listing.

## Background
-   [Node.js®](http://nodejs.org) is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
-   [NPM](https://www.npmjs.org/), Node Packaged Modules.
-   [Bower](http://bower.io/), A package manager for the web.
-   [Gulp](http://gulpjs.com/), gulp's use of streams and code-over-configuration makes for a simpler and more intuitive build.
-   [Grunt](http://gruntjs.com/), in one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.
-   [Browserify](http://browserify.org/), Browserify lets you require('modules') in the browser by bundling up all of your dependencies.

## Platform and Requirements
Download node.js Installer from [http://nodejs.org/download/](http://nodejs.org/download/) and install node and keep all options default.

Make sure Node.js installed properly by running command:
```sh
$ node --version
```
NPM is already installed together with node.js, test this as well, using command:
```sh
$ npm --version
```

## Installation
Now install iio CLI Tools globaly
```sh
$ npm install iio --global
```

## Configuration

Set the config file in your project root directory as "iio.config.json" like below:

```json
{
    "browserify": {
        "src": "app",
        "dest": "www/js",
        "input": "main.js",
        "type": "*.js",
        "output": "bundle.min.js",
        "dependencies": [],
        "transform": ["debowerify", "deglobalify"]
    },
    "js": {
        "src": "app",
        "dest": "www/js",
        "input": "main.js",
        "type": "*.js",
        "output": "bundle.min.js",
        "dependencies": []
    },
    "stylus": {
        "src": "app/styles",
        "dest": "www/css",
        "input": "main.styl",
        "type": "*.styl",
        "output": "bundle.min.css",
        "options": ["last 2 versions", "> 1%", "ie 9", "safari"],
        "maxImageSize": 300000000,
        "dependencies": [],
        "extensions": [],
        "transform": []
    },
    "jade": {
        "src": "app",
        "dest": "www",
        "input": "main.jade",
        "type": "*.jade",
        "output": "index.html",
        "dependencies": [],
        "extensions": [],
        "pretty": true
    },
    "less": {
        "src": "app/styles",
        "dest": "www/css",
        "input": "main.less",
        "type": "*.less",
        "output": "bundle.min.css",
        "options": ["last 2 versions", "> 1%", "ie 9", "safari"],
        "maxImageSize": 300000000,
        "dependencies": [],
        "extensions": [],
        "transform": []
    },
    "jasmine": {
        "src": "app",
        "type": "*[sS]pec.js",
        "options": {
            "integration": true,
            "specHtml": "test/index.html"
        },
        "dependencies": []
    },
    "browsersync": {
        "dependencies": [],
        "options": {
            "logSnippet": false,
            "server": {
                "baseDir": "./www"
            },
            "_proxy": "localhost:3000",
            "https": false,
            "logConnections": true,
            "logFileChanges": true,
            "online": true,
            "open": "external",
            "browser": ["google chrome"]
        }
    }
}
```

We are done &#9786;


## Start Coding

Run iio and start coding

```sh
$ iio
```

License
----

ISC
