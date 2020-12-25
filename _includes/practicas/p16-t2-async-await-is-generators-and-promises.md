# Descripción de la Práctica p16-t2-async-await-is-generators-and-promises

## Goal: Async-Await ≈ Generators + Promises

Imagine we are given a piece of code like the one below that uses async functions, how can we rewrite it using only promises and generator functions?

```js
function doTask1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 100)
    })
}

function doTask2(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+2), 100)
    })
}

function doTask3(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+3), 100)
    })
}

async function init() {
    const res1 = await doTask1();
    console.log(res1);
    
    const res2 = await doTask2(res1);
    console.log(res2);

    const res3 = await doTask3(res2);
    console.log(res3);

    return res3;
}

init(); // 1\n3\n6
```

It performs three asynchronous tasks, one after the other where each task depends on the completion of the previous task. Finally, it returns the result of the last task.

How can we rewrite it using generators?

## Remember Generators

Remember:

* When a generator function is called, its body is not executed right away. 
* Instead it returns an iterator-object which adheres to the iterator protocol i.e. it has a `next` method.
* The only way to execute the body of the generator is by calling the `next` method on its iterator-object. 
* Every time the `next` method is called, its body is executed until the next `yield` expression. 
* The result of `next()` is always an object with two properties:
  - `value`: the yielded value.
  - `done`: `true` if the function code has finished, otherwise `false`
* This `next` method also accepts an `argument`. 
* Calling it with an `argument` 
  - Makes the `argument`the value of the current yield expression and 
  - Resumes the execution till the next `yield` expression

## First Idea: Generators can yield Promises

By now you would be wondering, how do the generator functions help to achieve our goal? 

We need to model an asynchronous flow where we have to wait for certain tasks to finish before proceeding ahead. How can we do that?

Well, the most important insight here is that the **generator-functions can yield promises too**.

* A generator function can yield a promise (for example an async task), and 
* its iterator can be controlled to halt for this promise to resolve (or reject), and then 
* recursively proceed with the resolved (or rejected) value to ask for the next iteration. 

## Rewriting the Async Function as a Generator

This pattern of weaving a an iterator with yielded promises allows us to model our requirement like this:

```js
function doTask1(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg), 100)
    })
}

function doTask2(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+2), 100)
    })
}

function doTask3(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+3), 100)
    })
}

function* init(arg) {
    const res1 = yield doTask1(arg);
    console.log(res1);
    
    const res2 = yield doTask2(res1);
    console.log(res2);

    const res3 = yield doTask3(res2);
    console.log(res3);

    return res3;
}
```

Notice how this generator function resembles our async function!

## A Function Controlling the Execution of the Generator

But this is only half the story. Now **we need a way to execute its body**. 

We need a function `waiter` that can control the iterator of this generator function to "*wait for the fulfillment of the promise yielded on each iteration*". It has to:

1. Halt every time a promise is yielded and 
2. Proceeds once the promise resolves (or rejects). 

It sounds complicated, but takes only a few lines to implement.

## Write the Function Controlling the Execution of the Generator

Write the `waiter` function:

```js
function waiter(genFun, arg) {
   // ... your code here
}

const doIt = waiter(init, 3);
doIt();
```

So that, when we run it with the generator above, we obtain:

```
➜  learning-async-iteration-and-generators git:(main) ✗ node 07-async-await-equal-generators-plus-promises/example.js 
3
5
8
```

Heres is a [solution](solutions/p16-t2-async-await-is-generators-and-promises)

## See

* [Async-Await ≈ Generators + Promises](https://hackernoon.com/async-await-generators-promises-51f1a6ceede2) at [https://hackernoon.com/](https://hackernoon.com/)  Cha on July 26th 2017
* [Solution](solutions/p16-t2-async-await-is-generators-and-promises) to this problem
* [Folder `07-async-await-equal-generators-plus-promises` at Repo ULL-MII-SYTWS-2021/learning-async-iteration-and-generators](https://github.com/ULL-MII-SYTWS-2021/learning-async-iteration-and-generators/tree/main/07-async-await-equal-generators-plus-promises)
