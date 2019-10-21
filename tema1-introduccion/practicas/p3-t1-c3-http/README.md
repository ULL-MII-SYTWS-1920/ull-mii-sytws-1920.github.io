# Descripción de la práctica p3-t1-c3-http

1. Siguiendo el capítulo 20 *Node.JS*  del libro Eloquent JavaScript (EJS) 
escriba sus propios apuntes con ejemplos y realice los ejercicios que se indican a continuación
    - [Eloquent JS: Chapter 20 HTTP](http://eloquentjavascript.net/20_node.html)
    - [Eloquent JS: Chapter 20 HTTP](http://eloquentjavascript.net/2nd_edition/20_node.html) 2nd Edition
3. Realice el ejercicio *Directory Creation* 
  - Though the `DELETE` method is wired up to delete directories (using `fs.rmdir`), 
  the file server currently does not provide any way to create a directory.  Add 
  support for a method `MKCOL`, which should create a directory by calling `fs.mkdir` 
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

* [Eloquent JS 2nd Edition: Chapter 20 HTTP](http://eloquentjavascript.net/2nd_edition/20_node.html)
* [Repo con las soluciones K.](https://github.com/ULL-ESIT-MII-CA-1718/nodejs-KevMCh) (No disponible ahora)
* [Repo con las soluciones C.](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter20-node-js) (No disponible ahora)
* [The fs.promises API provides an alternative set of asynchronous file system methods that return Promise objects rather than using callbacks](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api)
* [How to Develop Web Application using pure Node.js (HTTP GET and POST, HTTP Server)](https://youtu.be/nuw48-u3Yrg) Vídeo en Youtube. 2015
* [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* Documentación:  
  * [documentation.js](http://documentation.js.org/), 
  * [jsdoc](https://www.npmjs.com/package/jsdoc), 
  * [docco](http://jashkenas.github.io/docco`)
* Gulp
  * Véase la sección [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/apuntes/gulp/) de los apuntes
  * [gulp quick start](https://gulpjs.com/docs/en/getting-started/quick-start)
  * [gulp getting started](https://gulpjs.org/getting-started.html)
* Diseño
  * [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
  * [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
  * [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
  * [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* `/Users/casiano/local/src/javascript/eloquent-javascript/chapter20-node-js/` (recurso para el profesor)

<!--
## Reto

* [Reto para la práctica](reto.md)
->
