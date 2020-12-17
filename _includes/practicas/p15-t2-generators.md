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
3. Simplify the solution to making the `Group` class iterable using a generator instead of a plain iterator as suggested in [Chapter 11 of the book Eloquent JS](https://eloquentjavascript.net/11_async.html#h_o+cFzGGhnz)

## See

* Chapter [Generators](https://javascript.info/generators) of JavaScript.info
* See the Node.js doc [Modules: Packages](https://nodejs.org/api/packages.html#packages_determining_module_system) for more details on the use of ECMA 6 Modules in Node.js.