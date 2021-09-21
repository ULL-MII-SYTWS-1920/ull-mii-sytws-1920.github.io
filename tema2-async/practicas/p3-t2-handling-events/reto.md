# Reto Async Serialize

Se dispone de una función `loadScript` que permite la carga de un script:

```js
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
      
        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));
      
        document.head.append(script);
      }
```

Que puede ser usada así:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p id="out"></p>
    <script>
      'use strict';
      let out = document.querySelector('p');

      function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
      
        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));
      
        document.head.append(script);
      }
           
      loadScript('script-1.js', (error, script) => {
        if (error) {
          console.error( error ); 
        } else {
          const message = `Cool!, the script '${script.src}' is loaded: "${hello()}"`;
          out.innerHTML = message;
          console.log(message);

          loadScript('script-2.js', (error, script) => {
            if (error) {
              console.error( error ); 
            } else {
              const message = `Great!, the script '${script.src}' is loaded: "${world()}"`;
              out.innerHTML += `<br/>${message}`;
              console.log(message);
              loadScript('script-3.js', (error, script) => {
                if (error) {
                  console.error( error );
                } else {
                  const message = `Unbelievable!, the script '${script.src}' is loaded: "${ull()}"`;
                  out.innerHTML += `<br/>${message}`;
                  console.log(message);
                  // ...continue after all scripts are loaded 
                }
              });
            }
          })
        }
      });
      </script>      
  </body>  
</html>
```

Puede encontrar mas detalles en el tutorial [https://github.com/ULL-ESIT-PL/async-js-series-webpack](https://github.com/ULL-ESIT-PL/async-js-series-webpack).

1. Escriba una función `loadScripts` 

    ```js
    loadScripts(['script-1.js', 'script-2.js', 'script-3.js'], (err, results) => out.innerHTML = results.map(s => s.src).join("<br/>"))
    ```

    que carga los scripts especificados en el array en secuencia y llama a la callback pasada como último argumento bien con un error si lo hubo o con el array de resultados (los scripts).

2. Escriba su propia versión de la función `series` (con la misma interfaz que su equivalente de Async.js) que resuelva el problema de la secuencialización de las callbacks:

    ```js
    series(
        [
            cb => loadScript('script-1.js', cb),
            cb => loadScript('script-2.js', cb),
            cb => loadScript('script-3.js', cb)
        ],
        (err, results) => p.innerHTML = results.map(s => s.src).join("<br/>")
    );
    ```

## Observaciones 

Si hace las pruebas de funcionamiento con scripts de similar tamaño la probabilidad de que su algoritmo produzca una salida que respeta el orden especificado es alta, incluso si su algoritmo es erróneo.

Puede simular que los scripts son de distinto tamaño retrasando la iniciación de las cargas con un `setTimeout` que espere por un número aleatorio de milisegundos:

```
  [~/.../load-script-seq(private)]$ pwd
/Users/casiano/local/src/javascript/learning/async/load-script-seq
[~/.../load-script-seq(private)]$ sed -ne '12,23p' load-scripts.html
```

```js
      const ir = (min, max) =>  Math.round((Math.random() * (max - min) + min))
      let out = document.querySelector('p');

      function loadScript(src, callback) {
        let script = document.createElement('script');
        setTimeout(() => script.src = src, ir(500,2000));

        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));

        document.head.append(script);
      }
```


## Referencias

* [Repo ULL-ESIT-PL/async-js-series-webpack](https://github.com/ULL-ESIT-PL/async-js-series-webpack)
* [A pure ESM version of Async](https://www.npmjs.com/package/async-es)
* [Webpack: Getting started](https://webpack.js.org/guides/getting-started/)
* [Webpack devserver](https://webpack.js.org/configuration/dev-server/)
* [Solución](https://github.com/ULL-ESIT-PL/async-js-series-webpack-private/blob/private/load-scripts.html)
  * ```
      [~/.../load-script-seq(private)]$ pwd -P
      /Users/casiano/local/src/javascript/learning/async/load-script-seq
    ```