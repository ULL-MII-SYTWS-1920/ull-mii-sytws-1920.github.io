# `new Promise(executor);`

## Parameters

### executor

A function that is passed with the arguments `resolve` and `reject`. 

The **executor** function is executed immediately by the Promise implementation, 
passing `resolve` and `reject` functions 

(the executor is called before the Promise constructor even returns the created object). 

The `resolve` and `reject` functions, when called, **resolve** or **reject** the promise, respectively. 

_The executor normally initiates some asynchronous work_, and then, once that completes, either calls the `resolve` function to resolve the promise or else `rejects` it if an error occurred. 
_If an error is thrown in the executor function, the promise is rejected_. 

To [Exercises Description](README.md)


The return value of the **executor** is ignored.
