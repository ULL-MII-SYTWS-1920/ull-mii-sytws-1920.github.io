# Microtasks

## Introduction

Promise handlers `.then`/`.catch`/`.finally` are always asynchronous.

Even when a Promise is immediately resolved, the code on the lines *below* `.then`/`.catch`/`.finally` will still execute before these handlers.

Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue `PromiseJobs`, more often referred to as the "microtask queue" (ES8 term).

As stated in the [specification](https://tc39.github.io/ecma262/#sec-jobs-and-job-queues):

- The queue is first-in-first-out: tasks enqueued first are run first.
- Execution of a task is initiated only when nothing else is running.

Or, to say more simply, when a promise is ready, its `.then/catch/finally` handlers are put into the queue; they are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.

If there's a chain with multiple `.then/catch/finally`, then every one of them is executed asynchronously. That is, 

1. it first gets queued, then executed when 
2. the current code is complete and 
3. previously queued handlers are finished.

```js 
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"));
console.log(0);
```

Will produce as output: `"0\n1\n2\n"`

Microtasks are used *under the cover* of `await` as well, as it's another form of promise handling.

## Question

What is the output of this program?

```js
{% include_relative promise-job-queue.js %}
```

## Solution

* [Solution](solution.md)

## Explanations

There is a special function `queueMicrotask(func)` that queues `func` for execution in the microtask queue.

**The engine executes all tasks from *microtask* queue, prior to running any other macrotasks or rendering or anything else.**


The richer event loop picture looks like this

![](event-loop-revisited.png)

1. the script first, 
2. then microtasks, 
3. rendering 

All microtasks are completed before any other event handling or rendering or any other macrotask takes place.

That's important, **as it guarantees that the application environment is basically the same (no mouse coordinate changes, no new network data, etc) between microtasks**.
