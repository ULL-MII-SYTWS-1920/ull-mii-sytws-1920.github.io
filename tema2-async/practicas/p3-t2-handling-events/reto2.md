# Reto 1: Building Promise.all

Given an array of promises, `Promise.all` returns a promise that waits for all of the promises in the array to finish. 
It then succeeds, yielding an array of result values. 
If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise.

Implement something like this yourself as a regular function called `Promise_all`.

Remember that after a promise has succeeded or failed, 
it can’t succeed or fail again, and further calls to the functions that resolve it are ignored. 
This can simplify the way you handle failure of your promise.


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Promise.all</title>
</head>

<body>
    <h1>Open the Developer tools</h1>
    <script>
        function Promise_all(promises) {
           // Fill the code
        }

        // Test code.
        Promise_all([]).then(array => {
            console.log('This should be []:', array);
        });

        function soon(val) {
            return new Promise(resolve => {
                setTimeout(() => resolve(val), Math.random() * 500);
            });
        }

        Promise_all([soon(1), soon(2), soon(3)]).then(array => {
            console.log('This should be [1, 2, 3]:', array);
        });

        Promise_all([soon(5), soon(2), soon("a")]).then(array => {
            console.log('This should be [5, 2, "a"]:', array);
        });

        Promise_all([soon(1), Promise.reject('X'), soon(3)])
            .then(array => {
                console.log('We should not get here');
            })
            .catch(error => {
                if (error === 'X') {
                    console.log('Rejection correctly managed!')
                } else
                    console.log('Unexpected failure:', error);
            });

        Promise_all([
            soon(1),
            new Promise(() => { throw (new Error('Muerto!')) }),
            soon(3)
        ])
            .then(array => {
                console.log('We should not get here');
            })
            .catch(error => {
                if (/Muerto!/.test(error.message))
                    console.log('Exception correctly managed!:');
            });        
    </script>
</body>
</html>
  ```
  
## Hints

The function passed to the `Promise` constructor will have to call then on each of the promises in the given array. 
When one of them succeeds, two things need to happen. 
The resulting value needs to be stored in the correct position of a result array, and 
we must check whether this was the last pending promise and finish our own promise if it was.

The latter can be done with a counter that is initialized to the length of the input array and from which we subtract 1 every time a promise succeeds. 
When it reaches 0, we are done. 
Make sure you take into account the situation where the input array is empty (and thus no promise will ever resolve).

Handling failure requires some thought but turns out to be extremely simple. Just pass the reject function of the wrapping promise to each of the promises in the array as a catch handler or as a second argument to then so that a failure in one of them triggers the rejection of the whole wrapper promise.


# Reto 2: Make a Promise version of fs.readFile

Escriba una versión con promesas  `readFilePromise` de la función [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) que pueda ser usada así:

```js
readFilePromise(programName, 'utf8')
  .then(data => console.log('Data:\n'+data))
  .catch(error => console.log('Error:\n'+error));
```

# Reto 3: Convert a function that accepts a callback into a function returning a promise

Promisification it’s the conversion of a function that accepts a callback into a function returning a promise.

Write a function `promisify(f)` that receives a function `f`that accepts a callback 
```js
f( ...args, callback)
``` 
and  returns a function that returns the equivalent `Promise` object

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Promisify</title>
</head>

<body>
    <script>
        function promisify(f) {
          // Fill the code
        };

        function loadScript(src, callback) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => callback(null, script);
            script.onerror = () => callback(new Error(`Script load error for ${src}`));

            document.head.append(script);
        }

        let loadScriptPromise = promisify(loadScript);

        loadScriptPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js").then(
            (r) => alert("script loaded")
        ).catch(alert);

    </script>
</body>

</html>
```

## Hint: El operador spread `...`

Para resolver este problema debe saber un poco del [operador *spread* `...`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator) 

Este operador permite convertir un número variable de argumentos de una función en  un array que puede ser accedido dentro de la misma:

  ```js
  [~/.../promises/exception-inside-promise(master)]$ node
  Welcome to Node.js v12.10.0.
  Type ".help" for more information.
  > ff = (...args) => console.log(args)
  [Function: ff]
  > ff(1,"hello", {x:4})
  [ 1, 'hello', { x: 4 } ]
  undefined
  > ff()
  []
  undefined
  ```

Pero también permite la operación inversa: convertir un array en una lista de argumentos:

```js
> arr = [1,2,3]
[ 1, 2, 3 ]
> gg = (x,y,z) => console.log(`x = ${x}, y = ${y}, z = ${z}`)
[Function: gg]
> gg(arr)
x = 1,2,3, y = undefined, z = undefined
undefined
> gg(...arr)
x = 1, y = 2, z = 3
undefined
```

## Hint: El Método `call`

El método [call](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/call) de los objetos Función llama a una función con un primer argumento que es el  `this` y el resto de argumentos:

```js
> z = {x:4}
{ x: 4 }
> function ff(w) { console.log(this.x+w); }
undefined
> ff(2)
NaN
undefined
> ff.call(z, 3)
7
undefined
```
