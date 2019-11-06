## Capítulo. Módulos en NPM

* [Creación de Paquetes NPM](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/npm/nodejspackages.html) (Apuntes)
* [Ejemplo en https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat](https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat)
* [About GitHub Package Registry](https://help.github.com/en/articles/about-github-package-registry)
  - GitHub Package Registry is a software package hosting service, similar to npmjs.org, rubygems.org, or hub.docker.com, that allows you to host your packages and code in one place. You can host software packages privately or publicly and use them as dependencies in your projects.
* [Best practice: Specify global dependencies in your gulpfile](https://stackoverflow.com/questions/14657170/installing-global-npm-dependencies-via-package-json)
* [Node.js — How to test your new NPM module without publishing it every 5 minutes](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be)
* [Best practice: Better local require() paths for Node.js](https://gist.github.com/branneman/8048520): 
   - When the directory structure of your Node.js **application** (not library!) has some depth, you end up with a lot of annoying relative paths in your require calls like:
    ```
     var Article = require('../../../models/article');
    ```
   Those suck for maintenance and they're ugly.
* [Veáse la sección *GitHub Package Registry* de estos apuntes]({{site.baseurl}}/tema4-devops/control-version#github-package-registry)

## Capítulo. Módulos en ECMA6

- [Eloquent JS](http://eloquentjavascript.net/index.html): [Modules](http://eloquentjavascript.net/10_modules.html)
- [Book: Understanding ECMAScript 6. Chapter 13. Encapsulating Code With Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)
  -  [What are Modules?](https://leanpub.com/understandinges6/read#leanpub-auto-what-are-modules)
  -  [Basic Exporting](https://leanpub.com/understandinges6/read#leanpub-auto-basic-exporting)
  -  [Basic Importing](https://leanpub.com/understandinges6/read#leanpub-auto-basic-importing)
  -  [Renaming Exports and Imports](https://leanpub.com/understandinges6/read#leanpub-auto-renaming-exports-and-imports)
  -  [Default Values in Modules](https://leanpub.com/understandinges6/read#leanpub-auto-default-values-in-modules)
  -  [Re-exporting a Binding](https://leanpub.com/understandinges6/read#leanpub-auto-re-exporting-a-binding)
  -  [Importing Without Bindings](https://leanpub.com/understandinges6/read#leanpub-auto-importing-without-bindings)
  -  [Loading Modules](https://leanpub.com/understandinges6/read#leanpub-auto-loading-modules)
  -  [Summary](https://leanpub.com/understandinges6/read#leanpub-auto-summary-12)
- [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth) by Nicolás Bevacqua Sep 25th, 2015
- [Exploring ES6 by Dr. Axel Rauschmayer. Capítulo: 16. Modules](http://exploringjs.com/es6/ch_modules.html)
- [Exploring ES6 by Dr. Axel Rauschmayer. Sección 4.18 From CommonJS modules to ES6 modules](http://exploringjs.com/es6/ch_core-features.html#sec_from-cjs-to-esm)
- [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/) by Jake Archibald
- [Using ES6 modules natively in Node.js](http://2ality.com/2017/09/native-esm-node.html)
- [Ejemplos en ULL-ESIT-MII-CA-1718/ecma6-modules-examples](https://github.com/ULL-ESIT-MII-CA-1718/ecma6-modules-examples)
- Véase un ejemplo en la implementación del proyecto "Electronic Life" en la rama `modules` del repo [`ULL-ESIT-MII-CA-1718/electronic-life`](https://github.com/ULL-ESIT-MII-CA-1718/electronic-life/tree/modules)
