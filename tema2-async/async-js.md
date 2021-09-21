# The Async Module

[Async](https://caolan.github.io/async/v3/) is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. Although originally designed for use with Node.js and installable via 

```
npm install async
```

it can also be used directly in the browser.

## Map

```js
async.map(['file1','file2','file3'], (file, cb) => fs.stat(file, cb),  function(err, results)  {
      // results is now an array of stats for each file
}); 
```

* [Documentation of Map](https://caolan.github.io/async/v3/docs.html#map)

```js
map(
     coll, 
     (item, cb) => iteratee(item,cb), 
     (err, results) => maincallback(err, results)
   )
```

```js
    import map from 'async/map'; 
    // En Node.js
    const { map } = require('async')
```

1. Produces a new collection of values by mapping each value in `coll` through the `iteratee` function. 
2. The `iteratee` is called with an `item` from `coll` and a callback `cb` for when it has finished processing. 
3. Each of these callbacks `cb` take 2 arguments: an `error`, and the result of  `iteratee(item)`. 
4. If `iteratee` passes an error to its callback `cb`, the `maincallback` (for the `map` function) is immediately called with the error.
5. Note, that since this function applies the `iteratee` to each item in parallel, there is no guarantee that the `iteratee` functions will complete in order. However, **the `results` array will be in the same order as the original `coll`**.


### Ejemplo: Concatenación de ficheros

El objetivo es escribir un programa que usando `fs.readFile` lea  un conjunto de ficheros pasados en vía de comandos y produzca como salida la concatenación de los mismos en el orden especificado, sin usar lecturas síncronas. 
La escritura debe ocurrir después que hayan terminado todas las lecturas.

He aquí una solución:

```
[~/.../ssh2-hello(master)]$ cat simp-reto-async-reading-multiple-files.js
```

```js
'use strict';

const fs = require('fs'),
    { map } = require('async'),
    inputs = ['in1', 'in2'],
    output = 'out';

map(inputs, fs.readFile,
   (err, contents) => {
      if (err) console.log('Error: ' + error);
      else {
        const data = contents.reduce((a, b) => a + b);
        fs.writeFile(output, data, () => console.log(`Output in file '${output}'`)
        );
      }
   }
);
```

Ejecución:

```
[~/.../ssh2-hello(master)]$ node simp-reto-async-reading-multiple-files.js
Output in file 'out'
[~/.../ssh2-hello(master)]$ cat in1
in1
hi!
[~/.../ssh2-hello(master)]$ cat in2
in2
[~/.../ssh2-hello(master)]$ cat out
in1
hi!
in2
```

#### ¿Como lograría resolver este problema si no dispusiera de `async.js`?

## Filter

```js
async.filter(
    ['file1','file2','file3'],
    (filePath, callback) => {
      fs.access(filePath,  err => callback(null,  !err));  // Tests a user's permissions for file
    },  
    function(err, results)  {
      // results now equals an array of the existing files
   }
); 
```

* [Documentation of filter](https://caolan.github.io/async/v3/docs.html#filter)

```js
import filter from 'async/filter';

filter(coll, iteratee, callbackopt)
```

1. Returns a new array of all the values in `coll` which pass an async truth test. 
2. This operation is performed in parallel, but the results array will be in the same order as the original.
3. `iteratee` is a truth test to apply to each item in `coll`. 
   * The `iteratee` is invoked with `(item, callback)`
   * It is passed a `callback(err, truthValue)`, **which must be called with a boolean argument once it has completed**


## Parallel

```js
async.parallel(
   [
     (callback) => {
        setTimeout(() => { callback(null, 'one'); }, 200);
     },
     (callback) => {
        setTimeout(() => { callback(null, 'two'); }, 100);
     }
  ],
  // optional callback
  (err, results) => {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});
```

* [Documentation of Parallel](https://caolan.github.io/async/v3/docs.html#parallel)

```js
    import parallel from 'async/parallel';

    parallel(tasks, callbackopt)
```

1. Run the `tasks` collection of functions in parallel, without waiting until the previous function has completed. 
2. If any of the functions pass an error to its callback, the main `callback` is immediately called with the value of the error. 
3. Once the `tasks` have completed, the results are passed to the final `callback` as an array.

**Hint:** Use [`reflect`](https://caolan.github.io/async/v3/docs.html#reflect) to continue the execution of other tasks when a task fails.

### It is also possible to use an object instead of an array

Each property will be run as a function and the results will be passed to the final `callback` as an object instead of an array.

This can be a more readable way of handling results from `async.parallel`

```js

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
});
```

### Example:

```
[~/.../Asyncjs]$ cat parallelTimers.js
```

```js
const async = require ('async');
const start = new Date;
async.parallel([
  function(callback) { setTimeout(callback, 100); },
  function(callback) { setTimeout(callback, 300); },
  function(callback) { setTimeout(callback, 200); }
], function(err, results) {
  console.log('Completed in ' + (new Date - start) + 'ms');
});
```

Execution:

```
[~/.../async-js-book/Asyncjs]$ node parallelTimers.js
Completed in 305ms
```

## Series

```js
async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});
```

* Documentation of [series](https://caolan.github.io/async/v3/docs.html#series)

**`series(tasks, callbackopt)`**

```js
import series from 'async/series';
```

1. Run the functions in the `tasks` collection in series, **each one running once the previous function has completed**. 
2. If any functions in the series pass an error to its callback, no more functions are run, and `callback` is immediately called with the value of the error. 
3. Otherwise, `callback` receives an array of results when `tasks` have completed.

### It is also possible to use an object instead of an array

```js
async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});
```

Each property will be run as a function, and the results will be passed to the final `callback` as an object instead of an array. 

This can be a more readable way of handling results from `async.series`.

**Note** that while many implementations preserve the order of object properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6) explicitly states that

> The mechanics and order of enumerating the properties is not specified.

So if you rely on the order in which your series of functions are executed, and want this to work on all platforms, consider using an array.

### Example

```
[~/.../async-js-book/Asyncjs]$ cat seriesTimers.js
```

```js
const async = require ('async');

const start = new Date;

async.series([
  function(callback) { setTimeout(callback, 100); },
  function(callback) { setTimeout(callback, 300); },
  function(callback) { setTimeout(callback, 200); }
], function(err, results) {
  // show time elapsed since start
  console.log('Completed in ' + (new Date - start) + 'ms');
});
```

```
[~/.../async-js-book/Asyncjs]$ node seriesTimers.js
Completed in 618ms
```

## Queue

See [Async.js: queue](http://caolan.github.io/async/v3/docs.html#queue)

Creates a `queue` object with the specified `concurrency`. Tasks added to the `queue` are processed in parallel (up to the `concurrency` limit). If all worker's are in progress, the task is queued until one becomes available. Once a `worker` completes a `task`, that `task`'s callback is called.

```
[~/.../async-js-book/Asyncjs]$ cat queue-example.js
```

```js
const async = require("async");
const ir = (min, max) =>  Math.round((Math.random() * (max - min) + min))
const d = new Date();
const makeCb = (str) => (err => console.log('finished processing '+str+' '+(new Date() - d)));

const worker = (task, callback) => {
    setTimeout(
      () => {
        console.log('hello ' + task.name);
        callback();
      },ir(0,1000) // Wait a random time
    )
};

// create a queue object with concurrency 2
const q = async.queue(worker, 2);

/*
 q.drain: a function that sets a callback that is called when the last item
          from the queue has returned from the worker.
  If the callback is omitted, q.drain() returns a promise for the next occurrence.
*/
q.drain(function() {
    console.log('worker finished and queue is empty');
});

// assign an error callback
q.error(function(err, task) {
    console.error('task experienced an error '+err);
});
```

```
[~/.../async-js-book/Asyncjs]$ node queue-example.js
hello ear
finished processing ear 709
hello bar
finished processing bar 961
hello foo
finished processing foo 976
hello baz
finished processing item 1186
hello bay
finished processing item 1316
hello bax
finished processing item 1323
worker finished and queue is empty
```