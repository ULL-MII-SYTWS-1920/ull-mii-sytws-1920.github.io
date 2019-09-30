# Tema 1: Introducción a Sistemas y Tecnologías Web en el Servidor

## Capítulo. Uso del iaas.ull.es. Entornos de Trabajo

- <a href="https://casianorodriguezleon.gitbooks.io/ull-esit-1617/recursos/iaas.html" target="_blank">Instrucciones para el uso de iaas.ull.es</a>
- <a href="https://github.com/SYTW/iaas-ull-es" target="_blank">Repo SYTW/iaas-ull-es: Instrucciones Sobre Como Desplegar una Aplicación Web en iaas.ull.es</a>
- <a href="https://iaas.ull.es/ovirtadmin/admin/" target="_blank">Gestor online de pools</a>
- <a href="https://docs.google.com/document/d/13vP4bd5LhnfNJvV6ncz20ZNTXfeg8ehWbw_ECkn4MAY/edit#" target="_blank">IaaS - Uso de la aplicación de gestión de pools</a>
- <a href="https://youtu.be/qKHgbV0lYbA" target="_blank">Video del profesor: iaas.ull.es</a>
- <a href="https://iaas.ull.es/mismaquinas" target="_blank">https://iaas.ull.es/mismaquinas</a>

### Prácticas

- <a href="practicas/p01-t1-iaas/" target="_blank">Descripción de la Práctica p01-t1-iaas</a>
    - [Express Web Framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) (Mozilla)

## Capítulo. Editores. Entornos de Trabajo

### Atom

- [Vídeo del profesor explicando el GitHub Package](https://youtu.be/kFtGxyyLRTc)

### Visual Studio Code

- Version Control
    - [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)
    - [Video Git Version Control in VS Code](https://youtu.be/AKNYgP0yEOY)
    - [Video Git in Visual Studio Code](https://youtu.be/wMqukSKYcvU)
- Collaboration
    - [Introducing Visual Studio Live Share](https://code.visualstudio.com/blogs/2017/11/15/live-share)
    - <a href="https://youtu.be/fWXe1HQ1wVA" target="_blank">Vídeo Visual Studio Live Share Demo on VS Code</a>
- Editando con VSCode en la máquina iaas.ull.es
    - Use un plugin para Visual Studio Code que permita montar un sistema de archivos sobre SSH
      - [SSH FS: File system provider using SSH](https://marketplace.visualstudio.com/items?itemName=Kelvin.vscode-sshfs)
      - [SSHExtension](https://marketplace.visualstudio.com/items?itemName=kondratiev.sshextension) This extension allows you to open an SSH connection in the integrated terminal. The extension was created in order to have access to the SSH in conjunction with the already available access to the FTP.
      - [Remote FS](https://marketplace.visualstudio.com/items?itemName=liximomo.remotefs)
- Settings file locations
  - Depending on your platform, the user settings file is located here:
    - Windows %APPDATA%\Code\User\settings.json
    - macOS $HOME/Library/Application Support/Code/User/settings.json
    - Linux $HOME/.config/Code/User/settings.json
    - The workspace setting file is located under the .vscode folder in your root folder.
- <a href="https://youtu.be/3owknsJy-iE" target="_blank">Vídeo de Jesús Torres: Breve intro de cómo programar y depurar C++ con Visual Studio Code + Gatos</a>

## Capítulo. Node.JS

### Debugging NodeJS

* [Debugging NodeJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/nodejs/)
* Debugging in 2017 with Node.js YouTube video https://youtu.be/Xb_0awoShR8
    * [Debugging in 2017 with Node.js](https://youtu.be/Xb_0awoShR8) YouTube

### nvm

* [Quick Tip: Install Multiple Versions of Node.js using nvm](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)
* [Node Version Manager - Simple bash script to manage multiple active node.js versions](https://github.com/creationix/nvm)

### Eloquent JS Book Chapter 20

- [Eloquent JS Book Chapter 20](http://eloquentjavascript.net/20_node.html): [Node.js](http://eloquentjavascript.net/20_node.html)

### Anatomy of an HTTP Transaction

- [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

### The book "Node.js 8 the Right Way". Chapter 2: Wrangling the File System

- <a href="https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-idot-getting-up-to-speed-on-nodedotjs-8/chp_filesystem_html" target="_blank">Node.js 8 the Right Way</a> Practical, Server-Side JS that Scales. Jim R. Wilson 2018 Edition. Safari. Chapter 2: Wrangling the File System. Acceda por medio del <a href="https://www.ull.es/servicios/biblioteca/servicios/puntoq/"  target="_blank">PuntoQ</a> de la ULL
- [Chapter 2: Wrangling the File System. GitHub Repo. Folder with Solutions to Chapter 2](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/filesystem-chapter-2) Privado
    - [Book "Node.js 8 the Right Way"](https://books.google.es/books?id=oA9QDwAAQBAJ&lpg=PT96&ots=-mLQPlvsSj&dq=should%20ldjclient%20emit%20a%20close%20event&hl=es&pg=PP1#v=onepage&q=should%20ldjclient%20emit%20a%20close%20event&f=false) 2018 Edition Google Books
    - [Book "Node.js 8 the Right Way"](https://github.com/iMarcoGovea/books/blob/master/nodejs/Node.js%20the%20Right%20Way.pdf) Old Edition in GitHub
- Node.JS 8 The Right Way. Practical Server-Side That Scales: [Repo with the solutions (all chapters)](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way)
- [Read section *The HTTP module* from Eloquent Javascript 2nd edition](http://eloquentjavascript.net/2nd_edition/20_node.html#h_3O5dGIJE9F)
- [Read section *A File Server* from Eloquent Javascript 2nd edition](http://eloquentjavascript.net/2nd_edition/20_node.html#h_LvXChBt2KP)

#### JavaScript Event Loop

- Tutorial [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

#### Streams

- [A Brief History of Node Streams](https://medium.com/the-node-js-collection/a-brief-history-of-node-streams-pt-1-3401db451f21)
- [A Brief History of Node Streams. Part 2](https://medium.com/the-node-js-collection/a-brief-history-of-node-streams-pt-2-bcb6b1fd7468)

### Prácticas

* [Descripción de la práctica p2-t1-c3-filesystem](practicas/p2-t1-c3-file-system/)
* [Descripción de la práctica p3-t1-c3-http](practicas/p3-t1-c3-http/)


## Capítulo. Pruebas, Integración y Calidad

### Chapter 5. Transforming Data and Testing Continuously

* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way. Chapter 5. Transforming Data and Testing Continuously](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/transforming-data-and-testing-continuously-chapter-5)
* [Safari. Node.js The Right Way. Chapter 5 Transforming Data and Testing Continuously](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZjaHBfdHJhbnNmb3JtaW5nX2RhdGFfaHRtbCZxdWVyeT0=)
* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)

### Apuntes sobre Herramientas para Pruebas

* [Sección Pruebas en los Apuntes del curso 16/17](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/)
  * [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
  * [Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#should)
  * [Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)
  * [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
  * [Sinon](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/sinon.html)
  * [Karma](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/karma.html)
  * [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
  * [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)
  * [Istanbul](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/istanbul.html)
  * [BrowserSync](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/browsersync.html)

#### Pruebas en el Navegador/Browser

* [Learning JavaScript Test-Driven Development by Example](https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/) SitePoint Tutorial
* [Mocha y Chai en el navegador. Apuntes del curso 15/16](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/mochachaisinon.html)
* [Testing your frontend JavaScript code using mocha, chai, and sinon. Nicolas Perriault](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/)
 [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
  * [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)
  * [Istanbul](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/istanbul.html)
  * [BrowserSync](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/browsersync.html)


## Capítulo. Programación Funcional

- [Eloquent JS](http://eloquentjavascript.net/index.html): [High Order Functions](http://eloquentjavascript.net/05_higher_order.html)
- [Repo ULL-ESIT-MII-CA-1718/ejs-chapter05-higher-order-functions](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter05-higher-order-functions)

## Capítulo. OOP

### ECMA5 OOP

#### The Secret Life of Objects

* [Repo ULL-ESIT-DSI-1617/oop-eloquentjs-example](https://github.com/ULL-ESIT-DSI-1617/oop-eloquentjs-example) conteniendo el ejemplo "Laying out a table" del *Chapter 6: The Secret Life of Objects*
* [The Secret Life of Objects example explained](https://github.com/fhdhsni/The-Secret-Life-of-Objects)
* [jsfiddle ilustrativo](http://jsfiddle.net/casiano/Mw9dW/)

#### Project Electronic Life

* OOP in JavaScript in ECMA5. [Eloquent JS 2nd Edition](http://eloquentjavascript.net/index.html): [Project: Electronic Life](http://eloquentjavascript.net/2nd_edition/07_elife.html)
    - [Repos Electronic Life in ULL-ESIT-MII-CA-1718](https://github.com/ULL-ESIT-MII-CA-1718?utf8=%E2%9C%93&q=electronic&type=&language=)
    - Emojis
        * [js-emoji](https://github.com/iamcal/js-emoji)
        * [emojipedia](https://emojipedia.org)
        * [Ejemplo sencillo ULL-ESIT-MII-CA-1718/emoji-js](https://github.com/ULL-ESIT-MII-CA-1718/emoji-js)

### Herencia

* [Repo con ejemplos de Herencia](https://github.com/SYTW/js-inheritance-examples)
* [Tutorial Conversor de Temperaturas (gh-pages en GitHub)](http://crguezl.github.io/pl-html/node9.html)
* [Repo ULL-ESIT-GRADOII-PL/ull-etsii-grado-pl-1213-temperature-converter](https://github.com/ULL-ESIT-GRADOII-PL/ull-etsii-grado-pl-1213-temperature-converter)

### ECMA6 OOP

* OOP in JavaScript in Ecma6. [Eloquent JS](http://eloquentjavascript.net/index.html): [The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)
* [ECMAScript 6 Power Tutorial: Class and Inheritance](https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117)
* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)


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

- [Eloquent JS. Chapter13: The Document Object Model](http://eloquentjavascript.net/13_dom.html)
- [Repository ULL-ESIT-MII-CA-1718/ejs-chapter13-DOM-examples with examples for Chapter13: The Document Object Model](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter13-DOM-examples)
- [Repo ULL-ESIT-MII-CA-1718/the-document-object-model-KevMCh)](https://github.com/ULL-ESIT-MII-CA-1718/the-document-object-model-KevMCh)

## Capítulo. Events

- [Eloquent JS](http://eloquentjavascript.net/index.html): [Handling Events](http://eloquentjavascript.net/14_event.html)

## Capítulo. Form and Form Fields

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
