# Descripción de la Práctica p17-t2-async-iteration-and-generators

## Description

Read the chapter [Async iteration and generators](https://javascript.info/async-iterators-generators) of JavaScript.info reproducing the examples and exercises. Submit a report. Here is an example of how to organize your report:

```
➜  learning-async-iteration-and-generators git:(main) tree -I node_modules
.
├── 01-recall-iterators
│   ├── README.md
│   └── hello-simple-iterator.js
├── 02-async-iterables
│   ├── README.md
│   ├── hello-async-iterables-2.js
│   └── hello-async-iterables.js
├── 03-recall-generators
│   └── README.md
├── 04-async-generators-finally
│   ├── README.md
│   ├── for-await-with-sync.js
│   ├── hello-async-generator-2.js
│   ├── hello-async-generator-3.js
│   ├── hello-async-generator.js
│   └── hello-async-iterable-range.js
├── 05-real-life-example-paginated-data
│   ├── README.md
│   ├── get-link-example.js
│   ├── package-lock.json
│   ├── package.json
│   └── real-life-example.js
├── 06-all-vs-for-await-performance
│   ├── README.md
│   └── all-vs-for-await-performance.js
├── README.md
└── package.json
```

## Compare the Performance of Promise.all and for-await-of

Add a section and the corresponding code to compare the performance of 
for-await-of with Promise.all when given an array of promises.
Consider both cases: when a rejection or an error occurs and when all the promises are fulfilled

## See

* [ULL-MII-SYTWS-2021/learning-async-iteration-and-generators](https://github.com/ULL-MII-SYTWS-2021/learning-async-iteration-and-generators) (Private)
  * campus-virtual/2021/learning/asyncjs-learning/learning-async-iteration-and-generators
* Chapter [Async iteration and generators](https://javascript.info/async-iterators-generators)
* Chapter [Iterables](https://javascript.info/iterable)
* Chapter [Generators](https://javascript.info/generators) of JavaScript.info

### ES6 Modules in Node.JS

* See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details on the use of ECMA 6 Modules in Node.js.
* [How Can I use en es6 Import in Node.JS](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js#:~:text=You%20can%20also%20use%20npm,import%20in%20your%20JavaScript%20files.
) Stackoverflow