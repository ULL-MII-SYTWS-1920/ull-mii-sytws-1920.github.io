## Unas Preguntas

* ¿Cual es la salida de las llamadas a `console.trace`? 
  (`console.trace` muestra la [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces) en la consola. la stack trace es el camino de las llamadas hasta el punto: `{ nombre-de-rutina, fichero-del-programa, nº de línea, nº de columna}`)

```js
     1	function multiply(x,y) {
     2	  // console.trace imprime una traza de la pila
     3	  console.trace("-----------At multiply-----------");
     4	  return x * y;
     5	}
     6
     7	function squared(n) {
     8	  console.trace("-----------At squared-----------");
     9	  return multiply(n,n)
    10	}
    11
    12	function printSquare(n) {
    13	   return squared(n)
    14	}
    15
    16	let numberSquared = printSquare(5);
    17	console.log(numberSquared);
```

[Output from execution]({{site.baseurl}}/tema2-async/callstack-js-execution)


* ¿En que orden ocurren las salidas?
  
  ```js
  (function() {

    console.log('this is the start');

    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    console.log('this is just a message');

    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');

  })();
  ```

  - El método `setTimeout(funcion, retraso)` establece un temporizador que ejecuta `funcion` después de que transcurre un tiempo `retraso` en milisegundos. 
  - Si se omite este parámetro se usa el valor 0. 
  - El valor retornado identifica el temporizador creado con la llamada a `setTimeout()`; este valor puede pasarse a `clearTimeout()` para cancelar el temporizador.

* ¿Cual es la salida?

  ```js
  console.log(hoist); 

  var hoist = 'The variable has been hoisted.';
  ```
 
  ¿Cual sería la salida de esta variante?

  ```js
  console.log(hoist);

  hoist = 'The variable has been hoisted.'
  ```

  Para responder a esta pregunta es conveniente tener claro el concepto de [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) en JS. Hoisting is a JavaScript mechanism where **variables, function and class declarations** are moved to the top of their scope before code execution. Hoisting  only moves the declaration. The assignments are left in place.

  The scope of a variable declared with the keyword `var` is its current execution context. This is either the enclosing `function` or for variables declared outside any function, `global`.

  Véase [Understanding Hoisting in JavaScript by Mabishi Wakio](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)

* ¿Cual es la salida? (`tema1-introduccion/practicas/p2-t1-c3-file-system/event-loop/var.js`)

  ```js
  for(var i=0;i<=3; i++) {
      setTimeout(()=> console.log(i), 0)
  }
  ```

* ¿Cual es la salida?
   
  ```js
  const s = new Date().getSeconds();

  setTimeout(function() {
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
  }, 500);

  while(true) {
    if(new Date().getSeconds() - s >= 2) {
      console.log("Good, looped for 2 seconds");
      break;
    }
  }
  ```

  * Si no proporciona argumentos, el constructor `new Date()`  crea un objeto `Date` con la hora y fecha de hoy según la hora local.
  * El método `getSeconds()` devuelve un número entre 0 y 59 representando los segundos en la fecha especificada de acuerdo a la hora local.

## Unas Figuras

{% include image.html url="/assets/images/how-the-event-loop-works.png" description='<i>All JavaScript environments use an event loop</i>' %}

As long as there’s something left to do, JSs event loop will keep spinning. Whenever an event occurs, JS invokes any *callbacks* (event handlers) that are listening for that event.

The general algorithm of the JS Engine is like this:

```js
executeSequentially(mainTask);
while (thereArePendingTasks()) do
  let oldestFinishedTask = waitUntilSomeTaskIsReady();
  executeSequentially(oldestFinishedTask);
end do
```

{% include image.html url="/assets/images/event-loop.png" description="<i>There’s an endless loop, when JavaScript engine waits for tasks, executes them and then sleeps waiting for more tasks</i>" %}

When JS runs in the browser:

*   Rendering never happens while the engine executes a task. Doesn’t matter if the task takes a long time. Changes to DOM are painted only after the task is complete.
*   If a task takes too long, the browser can’t do other tasks, process user events, so after a time it raises an alert like **Page Unresponsive** suggesting to kill the task with the whole page. That happens when there are a lot of complex calculations or a programming error leading to infinite loop.



* Your JavaScript code runs single threaded. There is just one thing happening at a time.
    * Pay attention to how you write your code and avoid anything that could block the thread, like synchronous network calls or long loops.
    * In most browsers there is an event loop for every browser tab, to avoid a web page with heavy processing to block your entire browser.
    * Web Workers run in their own event loop as well

Quote from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Runtime_concepts):

> Each message is processed completely before any other message is processed \[...\]
> A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the "**a script is taking too long to run**" dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.

MDN utiliza la terminología *cola de mensajes* para la *cola de callbacks*:

> A JavaScript runtime uses a message queue, which is a list of messages to be processed. 
> Each message has an associated function which gets called in order to handle the message.


## The Event Loop en el libro [The Modern JavaScript Tutorial](https://javascript.info)

*   [Event Loop](https://javascript.info/event-loop#event-loop)
*   [Use-case 1: splitting CPU-hungry tasks](https://javascript.info/event-loop#use-case-1-splitting-cpu-hungry-tasks)
*   [Use case 2: progress indication](https://javascript.info/event-loop#use-case-2-progress-indication)
*   [Use case 3: doing something after the event](https://javascript.info/event-loop#use-case-3-doing-something-after-the-event)
*   [Macrotasks and Microtasks](https://javascript.info/event-loop#macrotasks-and-microtasks)
*   [Summary](https://javascript.info/event-loop#summary)

## The section *Concurrency model and the event loop* at https://developer.mozilla.org/

*   [Runtime concepts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Runtime_concepts)
*   [Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop)
*   [Never blocking](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Never_blocking)
*   [Specifications](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Specifications)

## Repasando las Preguntas a la luz del Bucle de Eventos

### Ejemplo: La Pila

Este ejemplo es tomado del vídeo:

* [Philip Roberts: ¿Que diablos es el "event loop" (bucle de eventos) de todos modos? (JSConf EU)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

se le puede proporcionar a `loupe`:

* [loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) a tool in the cloud to see the event loop working

Está en este directorio en mi laptop:

* `~/campus-virtual/1920/sytws1920/ull-mii-sytws-1920.github.io/tema1-introduccion/practicas/p2-t1-c3-file-system/event-loop/callstack.js`

Este es el código:

```js
function multiply(x,y) {
  // console.trace imprime una traza de la pila
  console.trace("-----------At multiply-----------");
  return x * y;
}

function squared(n) {
  console.trace("-----------At squared-----------");
  return multiply(n,n)
}

function printSquare(n) {
   return squared(n)
}

let numberSquared = printSquare(5);
console.log(numberSquared);
```

[Output from execution]({{site.baseurl}}/tema2-async/callstack-js-execution)


### Orden de Ejecución

Directorio en mi máquina:

```
tema1-introduccion/practicas/p2-t1-c3-file-system/event-loop/order.js 
```

Sacado de:

* Tutorial [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) at https://developer.mozilla.org


```js
(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();
```

### Ejemplo: JS *is single threaded*

En mi máquina:

```
tema1-introduccion/practicas/p2-t1-c3-file-system/event-loop/settimeout-does-not-run-inmediately.js 
```

Tomado del tutorial:

* Tutorial [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) at https://developer.mozilla.org

Primero, un ejemplo, para entender el funcionamiento de `Date`y `getSeconds`:

```js
[~/.../p2-t1-c3-file-system/event-loop(master)]$ node
Welcome to Node.js v12.10.0.
Type ".help" for more information.
> d = new Date()
2020-02-16T10:07:51.682Z
> s = d.getSeconds()
51
> e = new Date()
2020-02-16T10:07:57.992Z
> e.getSeconds()-d.getSeconds()
6
```

¿Cual es la salida?

```js
const s = new Date().getSeconds();

setTimeout(function() {
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

## Race Condition

See the examples:

* [A Simple Example: Loading an Image with Some Delay ]({{site.baseul}}/tema2-async/event-loop/exercises/race-condition/instructions.html#loading-an-image-with-some-delay)
* [Manually Interleaving Promises]({{site.baseul}}/tema2-async/event-loop/exercises/race-condition/instructions.html#manually-interleaving-promises)


## Splitting CPU Hungry Tasks

[Splitting CPU Hungry Tasks]({{site.baseurl}}/tema2-async/event-loop/exercises/splitting-cpu-hungry-tasks)


## Web Workers

[Web Workers]({{site.baseurl}}/tema2-async/event-loop/exercises/web-workers/instructions.html)

## References

* [Event loop: microtasks and macrotasks](https://javascript.info/microtask-queue) en el libro https://javascript.info
* Tutorial [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) at https://developer.mozilla.org
* [The JavaScript Event Loop](https://flaviocopes.com/javascript-event-loop/) by Flavio
* [Concurrency and Parallel Computing in JavaScript](https://www.infoq.com/presentations/javascript-concurrency-parallelism/) Stephan Herhut. Strange Loop 2013.
* [Philip Roberts: ¿Que diablos es el "event loop" (bucle de eventos) de todos modos? (JSConf EU)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) a tool in the cloud to see the event loop working
* [Chinenye Onuegbu: Code examples for JSDay Canarias 2019](https://github.com/ULL-MII-SYTWS-1920/jsday-canarias-2019-examples-multithreading)
  * [Video](https://youtu.be/YYfhuudsfFM)
