# Capítulo: Web Workers

## Code to create a worker from a String

```
➜  jsday-canarias-2019-examples-multithreading git:(master) ✗ pwd
/Users/casianorodriguezleon/campus-virtual/2021/learning/jsday-canarias-2019-examples-multithreading
```

```js
/**
 * Create a new worker from JavaScript code instead of a URL
 * @param {string} workerCode The raw JavaScript code for the worker
 * @returns Returns the created worker
 */
function createWorker(workerCode) {
    const blob = new Blob([workerCode], {type: 'application/javascript'});
    const workerURL = URL.createObjectURL(blob);
    return new Worker(workerURL);
}
```

## postMessage Syntax and semantics

The **`postMessage()`** method of the [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interface sends a message to the worker's inner scope. This accepts a single parameter, which is the data to send to the worker. The data may be any value or JavaScript object handled by the [structured clone](https://developer.mozilla.org/en-US/docs/Web/Guide/DOM/The_structured_clone_algorithm "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#transferable") algorithm, which includes cyclical references.

The `Worker` can send back information to the thread that spawned it using the [`DedicatedWorkerGlobalScope.postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) method.

### Syntax

    worker.postMessage(message, [transfer]);

#### Parameters

_message_

The object to deliver to the worker; this will be in the `data` field in the event delivered to the [`DedicatedWorkerGlobalScope.onmessage`](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) handler. This may be any value or JavaScript object handled by the [structured clone](https://developer.mozilla.org/en-US/docs/Web/Guide/DOM/The_structured_clone_algorithm "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#transferable") algorithm, which includes cyclical references.

If the `message` parameter is _not_ provided, a `TypeError` will be thrown. If the data to be passed to the worker is unimportant, `null` or `undefined` can be passed explicitly.

_transfer_ Optional

An optional [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array") of [`Transferable`](https://developer.mozilla.org/en-US/docs/Web/API/Transferable) objects to transfer ownership of. If the ownership of an object is transferred, it becomes unusable (_neutered_) in the context it was sent from and becomes available only to the worker it was sent to.

Transferable objects are instances of classes like [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer), [`MessagePort`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort) or [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) objects that can be transferred. `null` is not an acceptable value for `transfer`.

#### Returns

Void.

## Examples of Web Worker Threads in Node.js

See the folder [nodejs-threads](https://github.com/ULL-MII-SYTWS-1920/jsday-canarias-2019-examples-multithreading/tree/master/nodejs-threads) inside the repo
[ULL-MII-SYTWS-1920/jsday-canarias-2019-examples-multithreading](https://github.com/ULL-MII-SYTWS-1920/jsday-canarias-2019-examples-multithreading)

## References

* [fibonacci-worker](https://github.com/ULL-MII-SYTWS-1920/fibonacci-worker) A web worker that calculates fibonacci numbers.
* [Chinenye Onuegbu: Code examples for JSDay Canarias 2019](https://github.com/ULL-MII-SYTWS-1920/jsday-canarias-2019-examples-multithreading)
  * [Video](https://youtu.be/YYfhuudsfFM)
  * `/Users/casianorodriguezleon/campus-virtual/2021/learning/jsday-canarias-2019-examples-multithreading`
* [Book Web Workers: Safari O'Reilly. Usa Acceso ULL](http://proquest.safaribooksonline.com/book/programming/javascript/9781449322120/firstchapter)
* [parallel-js-examples repo](https://github.com/ULL-MII-SYTWS-1920/parallel-js-examples) Parallel.js is a lib for parallel programming
