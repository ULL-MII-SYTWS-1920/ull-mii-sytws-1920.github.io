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
