# iNFINITE i/o Development Environment

The right way of using node.js none blocking I/O to ease and speed up configuration and development environment common tasks using Gulp, Grunt and other NPM useful plug-ins.

The current startup version supports Browserify, BrowserSync, Jade, Jasmine, JavaScript, Less, Markdown, Fontface, Stylus, Karma and task listing.

Soon will be added supports for Typecript, CoffeeScript, Sass, Modernizr, Sketch, Image resize and optimization, Favicon and etc.

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

Set the config file as "iio.config.json" in your project root directory and list your needed tasks to load:

```json
{
	"browsersync": {},
	"jade": {},
	"stylus": {},
	"less": {},
	"markdown": {}
}
```

Also it is possible to overwrite the default config which shows like below:

```json
{
    "fontface": {
        "src": "app/assets/fonts",
        "dest": {
            "fontface": "app/styles",
            "files": "www/css/assets/fonts",
            "relative": "css/assets/fonts"
        },
        "output": "fontfaces.less",
        "type": "*.ttf",
        "options": {
            "options": {
                "embed": ["woff"],
                "collate": true
            }
        },
        "dependencies": []
    },
    "browserify": {
        "src": "app",
        "dest": "www/js",
        "input": "main.js",
        "output": "bundle.min.js",
        "type": "*.js",
        "options": {
            "options": {
                "_transform": ["debowerify", "deglobalify"]
            }
        },
        "dependencies": []
    },
    "js": {
        "src": "app",
        "dest": "www/js",
        "input": "{main,another}.js",
        "output": "bundle.min.js",
        "type": "*.js",
        "options": {
            "options": {},
            "uglify": {}
        },
        "dependencies": []
    },
    "markdown": {
        "src": ".",
        "dest": ".",
        "input": "README.md",
        "output": "index.html",
        "type": "*.md",
        "options": {
            "options": {}
        },
        "dependencies": []
    },
    "stylus": {
        "src": "app/styles",
        "dest": "www/css",
        "input": "main.styl",
        "output": "bundle.min.css",
        "type": "*.styl",
        "options": {
            "options": {

            },
            "prefix": [
                "last 2 versions",
                "> 1%",
                "ie 9",
                "safari"
            ],
            "base64": {
                "maxImageSize": 300000000,
                "debug": true
            },
            "minify": "",
            "cmq": {
                "log": true
            }
        },
        "dependencies": [],
        "extensions": []
    },
    "jade": {
        "src": "app",
        "dest": "www",
        "input": "main.jade",
        "output": "index.html",
        "type": "*.jade",
        "options": {
            "options": {}
        },
        "dependencies": [],
        "extensions": [],
        "pretty": true
    },
    "less": {
        "src": "app/styles",
        "dest": "www/css",
        "input": "main.less",
        "output": "bundle.min.css",
        "type": "*.less",
        "options": {
            "options": {

            },
            "prefix": [
                "last 2 versions",
                "> 1%",
                "ie 9",
                "safari"
            ],
            "base64": {
                "maxImageSize": 30000,
                "extensions": ["jpeg"],
                "debug": true
            },
            "minify": "",
            "cmq": {
                "log": true
            }
        },
        "dependencies": [],
        "extensions": []
    },
    "jasmine": {
        "src": "app",
        "type": "*[sS]pec.js",
        "options": {
            "options": {
                "integration": true,
                "specHtml": "test/index.html"
            }
        },
        "dependencies": []
    },
    "browsersync": {
        "options": {
            "options": {
                "logSnippet": false,
                "server": {
                    "baseDir": "./www"
                },
                "_proxy": "localhost:3000",
                "https": false,
                "logConnections": true,
                "logFileChanges": true,
                "online": false,
                "logLevel": "debug",
                "open": "external",
                "logFileChanges": true,
                "logPrefix": "Synced",
                "startPath": "/?Hello",
                "notify": true,
                "browser": ["google chrome"],
                "ghostMode": {
                    "clicks": true,
                    "forms": true,
                    "scroll": false
                }
            }
        },
        "dependencies": [],
        "extensions": []
    }
}
```

We are done &#9786;


## Start Coding

Run iio to get the list of available tasks and example.

```sh
$ iio
```

License
----

ISC

<html><head></head><body></body></html>
