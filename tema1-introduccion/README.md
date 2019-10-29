# Tema 1: Introducción a Sistemas y Tecnologías Web en el Servidor

## [Uso del iaas.ull.es. Entornos de Trabajo](iaas)

### Prácticas

- <a href="practicas/p01-t1-iaas/" target="_blank">Descripción de la Práctica p01-t1-iaas</a>
    - [Express Web Framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) (Mozilla)

## [Editores. Entornos de Trabajo](editors)

### Prácticas
 
- <a href="practicas/p2-t1-vscode/" target="_blank">Descripción de la Práctica p2-t1-vscode</a>


## [Node.JS](node)


### Prácticas

* [Descripción de la práctica p2-t1-c3-filesystem](practicas/p2-t1-c3-file-system/)
* [Descripción de la práctica p3-t1-c3-http](practicas/p3-t1-c3-http/)


## [Pruebas, Integración y Calidad](pruebas)


## Capítulo. Programación Funcional

- [Eloquent JS](http://eloquentjavascript.net/index.html): [High Order Functions](http://eloquentjavascript.net/05_higher_order.html)
- [Repo ULL-ESIT-MII-CA-1718/ejs-chapter05-higher-order-functions](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter05-higher-order-functions)

## [Object Oriented Programming: OOP](oop)

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

### Git Submódulos. Repos con varios Subproyectos

A la hora de hacer un paquete para npm es conveniente tener un repositorio cliente de prueba. Esto nos lleva a crear 
un macro-repo que consiste en el repo del módulo y en el programa de uso.

* [Chacon's book on Git: Chapter 7.11 Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* [Ejemplo en https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat](https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat)

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


## Capítulo. Diseño: Smells, Strategy Pattern y el Switch Smell

* [Apuntes del curso 15/16: Code Smells/Código Hediondo](https://casianorodriguezleon.gitbooks.io/pl1516/content/apuntes/codesmell.html)
* [Apuntes del curso 16/17: Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [Apuntes del curso 15/16: Eliminando Switch Smell](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/noswitchsmell.html)
* [Apuntes del curso 16/17: Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes del curso 16/17: Práctica: Evaluar Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaevaluastrategypattern.html)
* [Apuntes del curso 16/17: Práctica: Creación de Paquetes NPM y Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)
* [JSHint](http://jshint.com/)

## Capítulo. JavaScript and The Browser

- [Eloquent JS](http://eloquentjavascript.net/index.html): [JavaScript and the Browser](http://eloquentjavascript.net/12_browser.html)

## Capítulo. The DOM

### javascript.info: Document

- [https://javascript.info/document: DOM](https://javascript.info/document)
    - [https://javascript.info/loading: Document and resource loading](https://javascript.info/loading)
    - [https://javascript.info/selection-range: Selection and Range](https://javascript.info/selection-range)
    - [https://javascript.info/mutation-observer](https://javascript.info/mutation-observer)
    * [JavaScript and CSS: Coordinates](https://javascript.info/coordinates)

### Eloquent JS: The Document Object Model

- [Eloquent JS. Chapter13: The Document Object Model](http://eloquentjavascript.net/13_dom.html)
    - [Repository ULL-ESIT-MII-CA-1718/ejs-chapter13-DOM-examples with examples for Chapter13: The Document Object Model](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter13-DOM-examples)
    - [Repo ULL-ESIT-MII-CA-1718/the-document-object-model-KevMCh)](https://github.com/ULL-ESIT-MII-CA-1718/the-document-object-model-KevMCh)

### Ejercicios del DOM

* [Ejercicios del DOM](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/tree/master/tema1-introduccion/exercises/dom-exercises)


## Capítulo. Events

- [https://javascript.info/events: Events](https://javascript.info/events)
- [Eloquent JS](http://eloquentjavascript.net/index.html): [Handling Events](http://eloquentjavascript.net/14_event.html)

## Capítulo. Form and Form Fields

- [https://javascript.info/forms-controls: Forms, controls](https://javascript.info/forms-controls)
- [Eloquent JS](http://eloquentjavascript.net/index.html): [Forms and Form Fields](https://eloquentjavascript.net/18_forms.html)
    - [Eloquent JS:  Forms and Form Fields](https://eloquentjavascript.net/18_forms.html)
    - [Repo de Ejemplo del Capítulo](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter18-forms)
    - [Repo ULL-ESIT-MII-CA-1718/forms-and-form-fields-KevMCh](https://github.com/ULL-ESIT-MII-CA-1718/forms-and-form-fields-KevMCh)
- [Developer Moxilla. Sending forms through JavaScript](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
  * [Using FormData bound to a form element](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript#Using_FormData_bound_to_a_form_element)

## Capítulo. Extending Visual Studio Code

- <a href="https://code.visualstudio.com/api" target="_blank">Visual Studio Code Extension API</a>
- <a href="https://youtu.be/j917FBGfttQ" target="_blank">Visual Studio Code Extension: hello (Youtube, vídeo del profesor)</a>
- <a href="https://youtu.be/gNTjzcnLJQ4" target="_blank">Depurando una Extensión de Visual Studio Code (Youtube, vídeo del profesor)</a>

## Referencias y Recursos para el Tema 1

* [Org ULL-ESIT-PL-1819](https://github.com/ULL-ESIT-PL-1819)
* [Org ULL-MII-CA-1819](https://github.com/ULL-MII-CA-1819)
* [Org ULL-ESIT-DSI-1819](https://github.com/ULL-ESIT-DSI-1819)
* [Org ULL-ESIT-PL-1718](https://github.com/ULL-ESIT-PL-1718)
* [Org ULL-ESIT-MII-CA-1718](https://github.com/ULL-ESIT-MII-CA-1718)
* [Org ULL-ESIT-DSI-1617](https://github.com/ULL-ESIT-DSI-1617)
* [Trasparencias curso de JS de MiriadaX](https://github.com/crguezl/miriada-upm-dsnh5jsnode/blob/master/traspas/transp_modulo2.pdf)
