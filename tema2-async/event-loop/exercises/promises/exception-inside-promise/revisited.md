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

Let us revisit it at the light of the two queues:

![]({{site.baseurl}}/tema2-async/event-loop/exercises/promises/microtask-queue/event-loop-revisited.png)

Now we can see exactly how JavaScript finds out that there was an unhandled rejection.

**An "unhandled rejection" occurs when a promise error is not handled at the end of the microtask queue.**

Normally, if we expect an error, we add `.catch` to the promise chain to handle it, but if we forget to add `.catch`, then, after the microtask queue is empty, the engine triggers the event.

If we handle the error later like in the example,
we understand that `unhandledrejection` is generated when the microtask queue is complete: the engine examines promises and, if any of them is in the `rejected` state, then the event triggers.

In the example above, `.catch` added by `setTimeout` also triggers. But it does so later, after `unhandledrejection` has already occurred, so it doesn't change anything.

