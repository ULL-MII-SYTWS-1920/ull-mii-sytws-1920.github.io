## Examples of Promises

### Ejemplo Sencillo  (Chuck Norris jokes service)

`local/src/uai/uai2015/promise-ejemplo`

* [A Gist with a very Simple Example of How to make and use a Promise](https://gist.github.com/crguezl/f5c52c8b72b4722e374a8af10e9d2b5d) (Chuck Norris jokes service)
* Also in `/Users/casiano/local/src/javascript/learning/promises/sitepoint-tutorial`
  
```js
if(window.Promise){
      console.log('Promise found');
      var promise=new Promise(function(resolve,reject){
            var request = new XMLHttpRequest();
            request.open('GET', 'http://api.icndb.com/jokes/random');
            request.onload = function() {
              if (request.status == 200) {
                resolve(request.response); //we get the data here.So, resolve the Promise
              }
              else {
                reject(Error(request.statusText)); //if status is not 200 OK, reject.
              }
            };

            request.onerror = function() {
              reject(Error("Error fetching data.")); //error occurred, reject the Promise
            };

            request.send(); //send the request
      });

      console.log('Asynchronous request made.');

      promise.then(function(data){
            console.log('Got data! Promise fulfilled.');
            document.getElementById('joke').innerHTML=JSON.parse(data).value.joke;
          },function(error){
            console.log('Promise rejected.');
            console.log(error.message);
      });

    }
    else
        console.log('Promise not available');
```

### Orden. Promises versus callbacks

`/apuntes/tema1-introduccion/practicas/p2-t1-c3-file-system/event-loop/promise-ejemplo/promise-job-queue.js`

Promises that resolve before the current function ends will be executed right after the current function.

```
[~/.../p2-t1-c3-file-system/event-loop/promise-ejemplo/(master)]$ cat promise-job-queue.js 
```
```js
let promise = new Promise(function(resolve, reject) {
  resolve(1)
});

promise.then(function(resolve) {console.log(1)});

console.log('a');

promise.then(function(resolve) {console.log(2);});

setTimeout(function() {console.log('h')}, 0);

promise.then(function(resolve) {console.log(3)});

console.log('b');
```

### Unhandled Promise Rejection

`unhandled-promise-rejection.js`

```
[~/.../uai2015/promise-ejemplo(master)]$ pwd -P
```

```js
#!/usr/bin/env node
'use strict';

process.on('unhandledRejection', error => {
  console.log('unhandledRejection:', error.message);
});

let p = new Promise((resolve, reject) => reject(new Error('woops')));

setTimeout(
  () => p.catch(error => console.log('caught', error.message)),
  1000);
```

```
[~/.../uai2015/promise-ejemplo(master)]$ ./unhandled-promise-rejection.js
unhandledRejection: woops
caught woops
(node:25246) PromiseRejectionHandledWarning: Promise rejection was handled asynchronously (rejection id: 1)
```
