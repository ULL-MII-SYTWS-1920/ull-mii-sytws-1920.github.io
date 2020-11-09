# Exercises: Exceptions and Promises

## First Exercise: Exception inside the action of a Promise

(Blog view at [https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/](https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/))

Remember that the code of a **[promise executor](executor.md)** and **promise handlers** has an "invisible `try..catch`" around it. 

If an exception happens, it gets caught and treated as a rejection. 

**Will the message `"Everything worked!"` appear?** (See [exception-inside.html](exception-inside.html))

```js
   let p = new Promise((resolve, reject)  => {
      throw (new Error("Que fallo!"));
    }).catch( (e) => console.log("Everything worked! "+e));
```

**What will be the ouput of this variant of the former code?** (See [exception-inside-2.html](exception-inside-2.html))

```js
   let p = new Promise((resolve, reject)  => {
      try {
        throw (new Error("Que fallo!"));
      } catch (e) {
        reject( "tilin!");
      }
    }).catch( (e) => console.log("Everything worked! "+e));
```

**What will be the rejection value of the promise?**

## Second Exercise: Exception Delayed with setTimeout inside the action of a Promise

(Blog at [https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/](https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/))

**What do you think? Will the `.catch` trigger?**

See the code in [exception-delayed.html](exception-delayed.html):

```js
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
```
Explain your answer.

Remember that the code of a **[promise executor](executor.md)** and **promise handlers** has an "invisible `try..catch`" around it. 

If an exception happens, it gets caught and treated as a rejection. 

Thus, the former code is equivalent to this [exception-delayed-2.html](exception-delayed-2.html):

```js
 new Promise(function(resolve, reject) {
      try {
        setTimeout(() => {
          throw new Error("Whoops!");
        }, 1000);
      } catch (e) { reject(e); }
    }).catch(alert);
```
What is the sequences of actions taking place when this code executes?

Is the former code equivalent to this one ([exception-delayed-3.html](exception-delayed-3.html))? :

```js
   new Promise(function(resolve, reject) {
      setTimeout(() => {
        try {
          throw new Error("Whoops!");
        } catch(e) {
          reject('rejected '+e);
        }
      }, 1000);
    }).catch(alert);
```

I have these examples here:

```
~/.../promises/exception-inside-promise(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/sytws1920/apuntes/tema2-async/exercises/promises/exception-inside-promise
```

### Third Exercise: Unhandled Rejection Event

**The "Unhandled rejection" event occurs when a promise error is not handled at the end of the microtask queue.**

Normally, if we expect an error, we add `.catch` to the promise chain to handle it:

```js
let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch(err => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', event => alert(event.reason));
```


What if we handle the error later? We are going to use Node.js this time.

```
~/.../promises/exception-inside-promise(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/sytws1920/apuntes/tema2-async/exercises/promises/exception-inside-promise
~/.../promises/exception-inside-promise(master)]$ cat unhandled-promise-rejection.js 
```

Explain the behavior of this program:

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
[~/.../event-loop/promise-ejemplo(master)]$ ./unhandled-promise-rejection.js 
unhandledRejection: woops
caught woops
(node:107) PromiseRejectionHandledWarning: Promise rejection was handled asynchronously (rejection id: 1)
```

Véase también
[https://javascript.info/microtask-queue#unhandled-rejection](https://javascript.info/microtask-queue#unhandled-rejection)
para una versión de este programa  en el cliente/browser

### Summarizing

1. `.catch` handles errors in promises of all kinds: be it a `reject()` call, or an error thrown in a handler.
2. We should place `.catch` exactly in places where we want to handle errors and know how to handle them. 
3. It’s ok not to use `.catch` at all, if there’s no way to recover from an error.
4. In any case we should have the `unhandledrejection` event handler to track unhandled errors 




