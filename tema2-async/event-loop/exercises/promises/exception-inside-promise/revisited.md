Remember the `unhandledrejection` event from the [exceptions exercise](index.html)?

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


Now we can see exactly how JavaScript finds out that there was an unhandled rejection.

**An "unhandled rejection" occurs when a promise error is not handled at the end of the microtask queue.**

Normally, if we expect an error, we add `.catch` to the promise chain to handle it:

```js
let promise = Promise.reject(new Error("Promise Failed!"));

promise.catch(err => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

But if we forget to add `.catch`, then, after the microtask queue is empty, the engine triggers the event:

```js run
let promise = Promise.reject(new Error("Promise Failed!"));

// Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

What if we handle the error later? Like this:

```js run
let promise = Promise.reject(new Error("Promise Failed!"));
*!*
setTimeout(() => promise.catch(err => alert('caught')), 1000);
*/!*

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

Now, if we run it, we'll see `Promise Failed!` first and then `caught`.

If we didn't know about the microtasks queue, we could wonder: "Why did `unhandledrejection` handler run? We did catch and handle the error!"

But now we understand that `unhandledrejection` is generated when the microtask queue is complete: the engine examines promises and, if any of them is in the "rejected" state, then the event triggers.

In the example above, `.catch` added by `setTimeout` also triggers. But it does so later, after `unhandledrejection` has already occurred, so it doesn't change anything.

![]({{site.baseurl}}/tema2-async/event-loop/exercises/promises/microtask-queue/event-loop-revisited.png)
