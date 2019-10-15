// Promises that resolve before the current function ends 
// will be executed right after the current function.
//
let promise = new Promise(function(resolve, reject) {
  resolve(1)
});

promise.then(function(resolve) {console.log(1)});

console.log('a');

promise.then(function(resolve) {console.log(2);});

setTimeout(function() {console.log('h')}, 0);

promise.then(function(resolve) {console.log(3)});

console.log('b');

/*
 * The message queue contains all the events waiting to be executed by the browser (scripts, repaint, reflows/layouts, etc.). 
 * They are added to the order they are triggered based on event triggering, timers, user input, DOM manipulation, etc.

The event loop pulls from the message queue one at a time and
adds them to the stack for execution.
------------------------------------

The job queue is a new queue that contains then() events added to the queue after the completion of a Promise. 
In theory the browser can pull from either queue when the event loop occurs. 
In practice, Promise jobs are given priority and that queue is emptied first. 
This is because the specification specifies then() to be executed after the current event on the call stack is finished.
*/
