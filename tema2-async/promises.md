# Promises 

## Chapter Promises, async/await of the book The Modern JavaScript Tutorial. 

### Callbacks Problems

* [javascript.info: Introduction: callbacks](https://javascript.info/callbacks)
  *   [Callback in callback](https://javascript.info/callbacks#callback-in-callback)
  *   [Handling errors](https://javascript.info/callbacks#handling-errors)
  *   [Pyramid of Doom](https://javascript.info/callbacks#pyramid-of-doom)
* [Promises: Basics: https://javascript.info/promise-basics](https://javascript.info/promise-basics)
  * [load-script con promesas](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/load-script)
  * Chuck Norris jokes example (UAI 2015):
    * [index.html](https://github.com/ULL-MII-SYTWS-1920/promise-example/blob/master/index.html)
    * [script.js](https://github.com/ULL-MII-SYTWS-1920/promise-example/blob/master/script.js)

* [Very Simple Examples of Promises](promise-examples) (uai2015)


### Promise Chaining

* [Promise Chaining](https://javascript.info/promise-chaining)
  * A call to `promise.then` returns a promise, so that we can call the next `.then` on it.
  * A handler, used in `.then(handler)` may create and return a promise. In that case further handlers wait until it settles, and then get its result.
  * [Promises Chaining fetch example]({{site.baseurl}}/tema1-introduccion-a-javascript/promises-chaining-fetch-example)
  * If a `.then` (or `catch/finally`, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.
  * [Repo ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io: exercises/promises/promise-chaining](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/promise-chaining)

### Error Handling

[Error handling with promises](https://javascript.info/promise-error-handling)

```
[~/.../exception-inside-promise(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/pl1920/apuntes/tema1-introduccion-a-javascript/event-loop/exercises/promises/exception-inside-promise
```

[Exercises: Exceptions and Promises](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/exception-inside-promise)


### [Promise API](https://javascript.info/promise-api)

<!-- RETO
* [Promise.all exercise]({{site.baseurl}}/tema1-introduccion-a-javascript/event-loop/exercises/promises/promise-all)
-->


### [Promisification](https://javascript.info/promisify)

<!-- RETO
  * [Ejercicio](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/promisify)

[~/.../promises(master)]$ cd promisify/
[~/.../promisify(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/pl1920/apuntes/tema1-introduccion-a-javascript/event-loop/exercises/promises/promisify
-->


### [Microtasks](https://javascript.info/microtask-queue)

### [Async/await](https://javascript.info/async-await)


## Ejercicios

* [Ejercicios de Promesas](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises)
  * [load-script con promesas](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/load-script)
  * [Promise.all](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema2-async/exercises/promises/promise-all)

## Prácticas

* [Descripción de la práctica Asynchronous Programming with Javascript EdX Course: Modules 1 (Asynchronous Fundamentals) and 2 (Promises) p7-t2-async-js-edx](practicas/p7-t2-async-js-edx)

## Referencias

* [Book Understanding ECMAScript 6: Promises and Asynchronous Programming](https://leanpub.com/understandinges6/read#leanpub-auto-promises-and-asynchronous-programming)
* [Book Exploring ES6: 25. Promises for asynchronous programming](http://exploringjs.com/es6/ch_promises.html)
* [Curso JavaScript Promises en Udacity](https://classroom.udacity.com/courses/ud898)
* [Book *The Modern Javascript Tutorial*. Chapter Promises, async/await](https://javascript.info/async)
* [Promises Workshop for JavaScript! Learn to wield promises like a master to write clean asynchronous code](https://github.com/stevekane/promise-it-wont-hurt) GitHub Repo. A Workshopper module that teaches you to use promises in javascript
* [Node.js 8: util.promisify()](http://2ality.com/2017/05/util-promisify.html) by Dr. Axel Rauschmayer 
* [Asynchronous Iterators in JavaScript](https://www.codementor.io/tiagolopesferreira/asynchronous-iterators-in-javascript-jl1yg8la1) by Tiago Lopes
* [EdX: Asynchronous Programming with Javascript](https://courses.edx.org/courses/course-v1:Microsoft+DEV234x+1T2018a/course/) EdX Course
    * [GitHub repoULL-MII-CA-1819/async-js](https://github.com/ULL-MII-CA-1819/async-js)



