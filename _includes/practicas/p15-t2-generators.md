# Descripción de la Práctica p15-t2-generators

## Description

Read the chapter [Generators](https://javascript.info/generators) of JavaScript.info reproducing the examples and exercises.

## Additionally:

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

## See

* Chapter [Generators](https://javascript.info/generators) of JavaScript.info
* See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details on the use of ECMA 6 Modules in Node.js.
* [ULL-MII-SYTWS-2021/learning-generators](https://github.com/ULL-MII-SYTWS-2021/learning-generators) (Private)
  * campus-virtual/2021/learning/asyncjs-learning/learning-generators
* [How Can I use en es6 Import in Node.JS](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js#:~:text=You%20can%20also%20use%20npm,import%20in%20your%20JavaScript%20files.
) Stackoverflow