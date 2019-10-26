## Exception inside the action of a Promise

(Blog view at [https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/](https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/))

**Will the message `"Everything worked!"` appear?** (See [exception-inside.html](exception-inside.html))

```js
  let p = new Promise((resolve, reject)  => {
      throw (new Error("Que fallo!"));
    }).catch(console.log("Everything worked!"));
```

**What will be the ouput of this variant of the former code?** (See [exception-inside-2.html](exception-inside-2.html))

```js
    let p = new Promise((resolve, reject)  => {
      try {
        throw (new Error("Que fallo!"));
      } catch (e) {
        reject( "tilin!");
      }
    }).catch(console.log("Everything worked!"));
```

##  Exception Delayed with setTimeout inside the action of a Promise

(Blog at [https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/](https://ull-mii-sytws-1920.github.io/tema2-async/exercises/promises/exception-inside-promise/))

**What do you think? Will the `.catch` trigger?**

See the code in [exception-delayed.html](exception-delayed.html):

```js
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
```
Explain your answer.

Remember that the code of a **[promise executor](executor.md)** and **promise handlers** has an "invisible `try..catch`" around it. 

If an exception happens, it gets caught and treated as a rejection. 

Thus, the former code is equivalent to this [exception-delayed-2.html](exception-delayed-2.html):

```js
 new Promise(function(resolve, reject) {
      try {
        setTimeout(() => {
          throw new Error("Whoops!");
        }, 1000);
      } catch (e) { reject(e); }
    }).catch(alert);
```
What is the sequences of actions taking place when this code executes?

Is the former code equivalent to this one ([exception-delayed-3.html](exception-delayed-3.html))? :

```js
   new Promise(function(resolve, reject) {
      setTimeout(() => {
        try {
          throw new Error("Whoops!");
        } catch(e) {
          reject('rejected '+e);
        }
      }, 1000);
    }).catch(alert);
```

I have these examples here:

```
~/.../promises/exception-inside-promise(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/sytws1920/apuntes/tema2-async/exercises/promises/exception-inside-promise
```




