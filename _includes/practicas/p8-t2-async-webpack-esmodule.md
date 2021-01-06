# Descripción de la práctica p8-t2-async-webpack-esmodule

1. Lea el tutorial [Getting Started
](https://webpack.js.org/guides/getting-started/)
2. Aplique lo aprendido en el tutorial a la práctica [anterior p8-t2-async-serialize]({{site.baseurl}}/practicas/p8-t2-async-serialize.html) para cargar el módulo [async.js](https://caolan.github.io/async/v3/)
   
      ```js
      import async from 'async-es';
      ```
3. Reescriba su solución a la práctica [anterior p8-t2-async-serialize]({{site.baseurl}}/practicas/p8-t2-async-serialize.html) en un módulo `src/lib/solution.js`

    ```
      [~/.../async/load-script-seq(private)]$ tree src
      src
      ├── index.js
      └── lib
          └── solution.js

      1 directory, 2 files
    ```
    que sea usado por `index.js`

    ```js
      import { loadScript, loadScripts, mySeries } from "./lib/solution.js";
    ```
4. Webpack enables use of <a href="https://webpack.js.org/concepts/loaders">loaders</a> to preprocess files. 
5. En Webpack cuando estamos aplicando una serie de loaders o de transformaciones a nuestro código, el código generado dista mucho del original: El debugging se convierte en un problema.  Para facilitar la depuración es conveniente  configurar `/webpack.config.js` con  la opción `devtool` puesta a `eval-cheap-module-source-map`

    ```js
    +  devtool: 'eval-cheap-module-source-map',
    +  module: {
    +    rules: [
    +      {
    +        test: /\.js$/,
    +        enforce: 'pre',
    +        use: ['source-map-loader'],
    +      },
    +    ],
    +  },
    };
   ```
   Un *source map* es una correspondencia que se realiza entre el código original y el código transformado.

   Véase [source-map-loader](https://webpack.js.org/loaders/source-map-loader/)
6. Entregue esta práctica en el mismo repo de la asignación de la práctica [anterior p8-t2-async-serialize]({{site.baseurl}}/practicas/p8-t2-async-serialize.html) en una rama `p8-t2-async-webpack-esmodule`

## Referencias

* [Repo ULL-ESIT-PL/async-js-series-webpack](https://github.com/ULL-ESIT-PL/async-js-series-webpack)
* [A pure ESM version of Async](https://www.npmjs.com/package/async-es)
* [Webpack: Getting started](https://webpack.js.org/guides/getting-started/)
* [Webpack devserver](https://webpack.js.org/configuration/dev-server/)
* [Webpack: When To Use And Why](https://blog.andrewray.me/webpack-when-to-use-and-why/)

## Soluciones

* [Solución](https://github.com/ULL-ESIT-PL/async-js-series-webpack-private/blob/private/load-scripts.html)
* ```
      [~/.../load-script-seq(private)]$ pwd -P
      /Users/casiano/local/src/javascript/learning/async/load-script-seq
  ```
* `/Volumes/2020/sytws/sytws2021/p8-t2-async-serialize-12-03-2020-09-16-48/alu0101040882` Daniel Labena