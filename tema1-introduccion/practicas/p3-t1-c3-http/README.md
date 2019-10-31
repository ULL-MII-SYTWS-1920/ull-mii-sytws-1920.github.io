# Descripción de la práctica p3-t1-c3-http

1. Siguiendo el capítulo 20 *Node.JS*  del libro Eloquent JavaScript (EJS) escriba sus propios apuntes con ejemplos y realice los ejercicios que se indican a continuación.
  En este capítulo se introduce Node.js, la librería para el manejo de archivos (`fs`) y la librería para construir servidores HTTP. Combinando ambas se construye un servicio HTTP que permite el manejo de archivos remoto. 
    - [Eloquent JS: Chapter 20 HTTP](http://eloquentjavascript.net/20_node.html)
    - [Eloquent JS: Chapter 20 HTTP](http://eloquentjavascript.net/2nd_edition/20_node.html) 2nd Edition
3. Realice el ejercicio *Directory Creation* 
  - Though the `DELETE` method is wired up to delete directories (using `fs.rmdir`), 
  the file server currently does not provide any way to create a directory.  Add 
  support for a method `MKCOL`, which should create a directory by calling `fs.mkdir` 
4. Realice el ejercicio *A public space on the web*
4. Instale [insomia](https://insomnia.rest/) o [postman](https://www.getpostman.com/) para usarlo como cliente de prueba.
5. Genere documentación para su código usando algunas de las herramientas que aparecen en la sección recursos
5. Escriba un gulpfile con tareas usando `curl` para probar el comportamiento del servidor con los diferentes requests. Aquí tiene un ejemplo (incompleto) en gulp 3.9:

  ```js
  var gulp = require("gulp");
  var shell = require("gulp-shell");

  gulp.task("pre-install", shell.task([
        "npm i -g gulp static-server",
        "npm install -g nodemon",
        "npm install -g gulp-shell"
  ]));

  gulp.task("serve", shell.task("nodemon server.js"));

  gulp.task("lint", shell.task("jshint *.js **/*.js"));

  gulp.task("get", shell.task("curl -v http://localhost:8000/file.txt"));
  gulp.task("put", shell.task("curl -v -X PUT -d 'Bye world!' http://localhost:8000/file.txt"));


  ```

6. Entregue los enlaces al repositorio en GitHub 

## Recursos

### Sobre como hacer esta práctica

* [Eloquent JS 2nd Edition: Chapter 20 HTTP](http://eloquentjavascript.net/2nd_edition/20_node.html)
* [Vídeo del profesor con sugerencias para la solución de la práctica](https://youtu.be/gxrBEfjgRdM)
  * [![https://img.youtube.com/vi/gxrBEfjgRdM/sddefault.jpg](https://img.youtube.com/vi/gxrBEfjgRdM/sddefault.jpg)](https://youtu.be/gxrBEfjgRdM)
* [Lecture 04/11/2019 in GitHub pages](https://ull-mii-sytws-1920.github.io/clases/2019-11-04/)
* [See this repo with (modified) solutions of Juan Irache to EJS exercises](https://github.com/ULL-MII-SYTWS-1920/eloquent-javascript-exercises)
  - [Solutions 20_3_a_public_space](https://github.com/ULL-MII-SYTWS-1920/eloquent-javascript-exercises/tree/master/20_3_public_space)
* [Node.js docs: Anatomy of an HTTP Transaction](https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/)
* [How to Develop Web Application using pure Node.js (HTTP GET and POST, HTTP Server)](https://youtu.be/nuw48-u3Yrg) Vídeo en Youtube. 2015

### fs.promises

* [The fs.promises API provides an alternative set of asynchronous file system methods that return Promise objects rather than using callbacks](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api)

### Documentación de Código  

* [documentation.js](http://documentation.js.org/), 
* [jsdoc](https://www.npmjs.com/package/jsdoc), 
* [docco](http://jashkenas.github.io/docco`)

### [Gulp](build-tools#gulp)

#### Gulp Getting Started

*   [Quick Start](https://gulpjs.com/docs/en/getting-started/quick-start)
*   [JavaScript and Gulpfiles](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles)
*   [Creating Tasks](https://gulpjs.com/docs/en/getting-started/creating-tasks)
*   [Async Completion](https://gulpjs.com/docs/en/getting-started/async-completion)
*   [Working with Files](https://gulpjs.com/docs/en/getting-started/working-with-files)
*   [Explaining Globs](https://gulpjs.com/docs/en/getting-started/explaining-globs)
*   [Using Plugins](https://gulpjs.com/docs/en/getting-started/using-plugins)
*   [Watching Files](https://gulpjs.com/docs/en/getting-started/watching-files)

#### API

*   [Concepts](https://gulpjs.com/docs/en/api/concepts)
*   [src()](https://gulpjs.com/docs/en/api/src)
*   [dest()](https://gulpjs.com/docs/en/api/dest)
*   [symlink()](https://gulpjs.com/docs/en/api/symlink)
*   [lastRun()](https://gulpjs.com/docs/en/api/lastrun)
*   [series()](https://gulpjs.com/docs/en/api/series)
*   [parallel()](https://gulpjs.com/docs/en/api/parallel)
*   [watch()](https://gulpjs.com/docs/en/api/watch)
*   [task()](https://gulpjs.com/docs/en/api/task)
*   [registry()](https://gulpjs.com/docs/en/api/registry)
*   [tree()](https://gulpjs.com/docs/en/api/tree)
*   [Vinyl](https://gulpjs.com/docs/en/api/vinyl)
*   [Vinyl.isVinyl()](https://gulpjs.com/docs/en/api/vinyl-isvinyl)
*   [Vinyl.isCustomProp()](https://gulpjs.com/docs/en/api/vinyl-iscustomprop)

* Véase la sección [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/apuntes/gulp/) de los apuntes


### Diseño

  * [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
  * [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
  * [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
  * [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)

## Para el profesor

* `/Users/casiano/local/src/javascript/eloquent-javascript/chapter20-node-js/` (recurso para el profesor)
* [Repo con las soluciones K.](https://github.com/ULL-ESIT-MII-CA-1718/nodejs-KevMCh) (No disponible ahora)
* [Repo con las soluciones C.](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter20-node-js) (No disponible ahora)

## Reto

* [Reto para la práctica](reto.md)
