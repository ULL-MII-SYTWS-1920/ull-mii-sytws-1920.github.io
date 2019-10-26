##  Exception Delayed with setTimeout inside the action of a Promise

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

Thus, the former code is equivalent to this:

```js
 new Promise(function(resolve, reject) {
      try {
        setTimeout(() => {
          throw new Error("Whoops!");
        }, 1000);
      } catch (e) { reject(e); }
    }).catch(alert);
```


I have this example here:

```
~/.../promises/exception-inside-promise(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/sytws1920/apuntes/tema2-async/exercises/promises/exception-inside-promise
```




