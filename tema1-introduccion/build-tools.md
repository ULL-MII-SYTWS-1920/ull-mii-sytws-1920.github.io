# Gulp: a tool to Automate and Enhance your Workflow

## Gulp Tutorial Getting Started

*   [Quick Start](https://gulpjs.com/docs/en/getting-started/quick-start)
*   [JavaScript and Gulpfiles](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles)
*   [Creating Tasks](https://gulpjs.com/docs/en/getting-started/creating-tasks)
*   [Async Completion](https://gulpjs.com/docs/en/getting-started/async-completion)
*   [Working with Files](https://gulpjs.com/docs/en/getting-started/working-with-files)
*   [Explaining Globs](https://gulpjs.com/docs/en/getting-started/explaining-globs)
*   [Using Plugins](https://gulpjs.com/docs/en/getting-started/using-plugins)
*   [Watching Files](https://gulpjs.com/docs/en/getting-started/watching-files)

## Gulp API Documentation

*   [Concepts](https://gulpjs.com/docs/en/api/concepts)
*   [src()](https://gulpjs.com/docs/en/api/src)
*   [dest()](https://gulpjs.com/docs/en/api/dest)
*   [symlink()](https://gulpjs.com/docs/en/api/symlink)
*   [lastRun()](https://gulpjs.com/docs/en/api/lastrun)
*   [series()](https://gulpjs.com/docs/en/api/series)
*   [parallel()](https://gulpjs.com/docs/en/api/parallel)
*   [watch()](https://gulpjs.com/docs/en/api/watch)
*   [task()](https://gulpjs.com/docs/en/api/task)
*   [registry()](https://gulpjs.com/docs/en/api/registry)
*   [tree()](https://gulpjs.com/docs/en/api/tree)
*   [Vinyl](https://gulpjs.com/docs/en/api/vinyl)
*   [Vinyl.isVinyl()](https://gulpjs.com/docs/en/api/vinyl-isvinyl)
*   [Vinyl.isCustomProp()](https://gulpjs.com/docs/en/api/vinyl-iscustomprop)


## Examples of how to execute shell commands with gulp 

### En gulp 4.0

```
[~/.../chapter20-nodejs/juanIrache-20_3_public_space(master)]$ pwd -P
/Users/casiano/local/src/javascript/eloquent-javascript-3/juanIrache-solutions/20_3_public_space
```

```
[~/.../juanIrache-solutions/20_3_public_space(master)]$ cat gulpfile.js 
```

```js
const gulp = require("gulp");
const { exec } = require('child_process');
const util = require('util');
const pexec = util.promisify(require('child_process').exec);

function server() {
  try {
    let s = exec('nodemon server.js');
    s.stdout.pipe(process.stdout);
    s.stderr.pipe(process.stderr);
  } catch(e) {
    console.error("Hubieron errores:\n"+e);
  }
}

async function cget() {
  try {
    const {stdout, stderr} = await pexec("curl -v http://localhost:8000/package.json");
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
  } catch(e) {
    console.error("Hubieron errores:\n"+e);
  }
}

exports.cget = cget;
exports.server = server;
```

```
[~/.../juanIrache-solutions/20_3_public_space(master)]$ gulp server
[13:32:53] Using gulpfile ~/local/src/javascript/eloquent-javascript-3/juanIrache-solutions/20_3_public_space/gulpfile.js
[13:32:53] Starting 'server'...
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
hello world!
```

En otra terminal:

```
[~/.../chapter20-nodejs/juanIrache-20_3_public_space(master)]$ gulp cget
[13:35:11] Using gulpfile ~/local/src/javascript/eloquent-javascript-3/juanIrache-solutions/20_3_public_space/gulpfile.js
[13:35:11] Starting 'cget'...
stdout: {
  "name": "20_3_public_space",
  "version": "1.0.0",
  "description": "Solutions for Chapter 20 of EJS book: https://eloquentjavascript.net/20_node.html by Juan Irache",
  "main": "code.js",
  "scripts": {
    "test": "nodemon server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "Casiano Rodriguez-Leon <casiano.rodriguez.leon@gmail.com> (https://github.com/crguezl)",
  "license": "ISC",
  "dependencies": {
    "mime": "^2.4.4"
  },
  "devDependencies": {
    "gulp": "^4.0.2"
  }
}

stderr:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 8000 (#0)
> GET /package.json HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/7.54.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE, MKCOL
< Content-Type: application/json
< Date: Thu, 31 Oct 2019 13:35:12 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
< 
{ [519 bytes data]
100   512    0   512    0     0   9662      0 --:--:-- --:--:-- --:--:--  9846
* Connection #0 to host localhost left intact

[13:35:12] Finished 'cget' after 97 ms
```


## En Gulp 3.9

* Véase la sección [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/apuntes/gulp/) de los apuntes

Aquí tiene un ejemplo (incompleto) en gulp 3.9:

  ```js
  var gulp = require("gulp");
  var shell = require("gulp-shell");

  gulp.task("pre-install", shell.task([
        "npm i -g gulp static-server",
        "npm install -g nodemon",
        "npm install -g gulp-shell"
  ]));

  gulp.task("serve", shell.task("nodemon server.js"));

  gulp.task("lint", shell.task("jshint *.js **/*.js"));

  gulp.task("get", shell.task("curl -v http://localhost:8000/file.txt"));
  gulp.task("put", shell.task("curl -v -X PUT -d 'Bye world!' http://localhost:8000/file.txt"));
  ```
