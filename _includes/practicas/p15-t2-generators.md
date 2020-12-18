# Descripción de la Práctica p15-t2-generators

## Description

Read the chapter [Generators](https://javascript.info/generators) of JavaScript.info reproducing the examples and exercises. Submit a report. Here is an example of how to organize your report:

```
➜  learning-generators git:(master) tree 
.
├── 00-symbol-iterator # For lesson https://javascript.info/iterable
│   └── hello-symbol-iterator.js
├── 01-generator-functions # Section "Generator Functions"
│   └── hello-generators.js
├── 02-generators-are-iterable
│   ├── hello-generators-2.js
│   └── spread.js
├── 03-using-generators-for-iterables
│   ├── README.md
│   ├── eloquent-js-6-2-group-with-generators.js
│   ├── iterator-revisited.js
│   ├── main-eloquent-js-6-2-group-with-generators.js
│   └── package.json
├── 04-generator-composition
│   └── hello-composition.js
├── 05-yield-is-a-two-way-street
│   └── hello-entry-argument.js
├── 06-yield-is-a-two-way-street
│   └── hello-entry-argument.js
├── 07-generator-throw
│   └── hello-throw.js
├── 08-tasks-pseudo-random-generator
│   ├── README.md
│   ├── package.json
│   └── solution.js
├── README.md
└── package.json
```

Surely you are going to have a look at the chapter [Iterables](https://javascript.info/iterable). You can add the examples and exercises of the [Iterables](https://javascript.info/iterable) chapter at the beginning of the report.


## Exercise *Groups* in the book EloquentJS Chapter 6

1. Study and solve the exercise [Groups](https://eloquentjavascript.net/06_object.html#group_iterator) in the book EloquentJS Chapter 6
2. Study an solve the **Iterable groups** extension of the exercise [Groups in EloquentJS Chapter 6](https://eloquentjavascript.net/06_object.html#group_iterator) making the `Group` class from the previous exercise iterable
3. Write the solution as an ES6 module so that can be imported with this syntax:

    ```js
    #!/usr/bin/env node 
    import { Group } from './eloquent-js-6-2-group-with-generators.js';

    let group = Group.from([10, 20]);
    console.log(group.has(10));
    // → true
    console.log(group.has(30));
    // → false
    group.add(10);
    group.delete(10);
    console.log(group.has(10));
    // → false

    for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value);
    }
    // → a
    // → b
    // → c
    ```

    See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details on the use of ECMA 6 Modules in Node.js.
3. Here is a template for the class `Group`:

    ```js
    class Group {
        constructor() {
            // ... your code 
        }
        add(elt) {
            // ... your code
        }
        delete(elt) {
            // ... your code 
        }
        has(elt) {
            // ... your code
        }
        static from(iterable) {
            // Takes an iterable object as argument and
            // creates a group that contains all the values
            // produced by iterating over it.
        }
        *[Symbol.iterator] () {
            // ... Your code
        }
    }

    export { Group };
    ```
3. Simplify the solution to making the `Group` class iterable using a generator instead of a plain iterator as suggested in [Chapter 11 of the book Eloquent JS](https://eloquentjavascript.net/11_async.html#h_o+cFzGGhnz)

    > Writing iterators is often much easier when you use generator functions. The iterator for the Group class  can be written with this generator:

    ```js
    Group.prototype[Symbol.iterator] = function*() {
        for (let i = 0; i < this.members.length; i++) {
            yield this.members[i];
    }
    };
    ```

  Leave your solution to this exercise inside the folder corresponding to section `03-using-generators-for-iterables`

## See

* Chapter [Iterables](https://javascript.info/iterable)
* Chapter [Generators](https://javascript.info/generators) of JavaScript.info
* See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details on the use of ECMA 6 Modules in Node.js.
* [ULL-MII-SYTWS-2021/learning-generators](https://github.com/ULL-MII-SYTWS-2021/learning-generators) (Private)
  * campus-virtual/2021/learning/asyncjs-learning/learning-generators
* [How Can I use en es6 Import in Node.JS](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js#:~:text=You%20can%20also%20use%20npm,import%20in%20your%20JavaScript%20files.
) Stackoverflow