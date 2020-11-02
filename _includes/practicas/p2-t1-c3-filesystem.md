# Descripción de la práctica p2-t1-c3-filesystem

* [Aceptemos la asignación de la tarea](https://classroom.github.com/a/JeTaIHuY)
* Autentíquese en [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* Una vez autenticado obtendrá acceso al libro [Node.js 8 the Right Way](https://puntoq.ull.es/permalink/f/1rcchus/TN_safari_s9781680505344). Jim Wilson. 2018 (Debes estar autenticado via PuntoQ)
* Lea el Capítulo 2 "[Wrangling the File System]()" de *Node.JS The Right Way*. 
* Consulte el [repo de bibliografía para la organización](https://github.com/ULL-MII-SYTWS-2021/books-shared)
* Resuelva los problemas en la secciones *Fortifying the code* y *Expanding Functionality* del capítulo *Wrangling the File System*
* Haga su desarrollo usando Visual studio Code. [Use git y github desde visual studio code](https://code.visualstudio.com/docs/editor/versioncontrol) tanto como pueda

Este es un ejemplo similar a los ejemplos que encontrará en el capítulo
con la diferencia de que usamos la librería  [commander.js](https://www.npmjs.com/package/commander) para procesar los argumentos:
 
 ``` 
[~/.../sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ cat watcher-fortifying-code.js 
 ```

 ```js
#!/usr/bin/env node
'use strict';
const fs = require("fs");
const program = require('commander');
const { version, description } = require('./package.json');

program
    .version(version)
    .description(description)
    .usage('[options]')
    .option('-f, --file <fileToWatch>', 'set the file or directory to watch', '.')

program.parse(process.argv);

const fileToWatch = program.file;

try {
  fs.watch(fileToWatch, { recursive: true }, (eventType, fileName) => {
    console.log(`File ${fileName} changed! Event Type: ${eventType}`);
    if (eventType === 'rename' && fileToWatch === fileName) {
      console.error(`No longer watching ${fileToWatch}!`);
      process.exit(1);
    }
  });
  console.log(`Now watching ${fileToWatch} for changes ...`);
} catch(e) {
   if (e.code === "ENOENT") console.error(`No file '${fileToWatch}' found`);
   else console.error(e)
}
```

Veamos un ejemplo de ejecución cuando no se pasan argumentos:

```
[~/.../sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ node watcher-fortifying-code.js 
Now watching . for changes ...
^C
```

Podemos usar la opción `--help`:

```
$ node watcher-fortifying-code.js --help
Usage: watcher-fortifying-code [options]

watch a file or directory for changes

Options:
  -V, --version             output the version number
  -f, --file <fileToWatch>  set the file or directory to watch (default: ".")
  -h, --help                output usage information
```

La opción `-V`:

```
$ node watcher-fortifying-code.js -V
1.0.0
```

El programa se nutre para la versión de la que está en el fichero `package.json`:

```
$ jq .version,.description  package.json 
"1.0.0"
"watch a file or directory for changes"
```

Si le pasamos la opción `-f`:

```
$ node watcher-fortifying-code.js -f target.txt
No file 'target.txt' found
[~/.../sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ touch target.txt
[~/.../sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ node watcher-fortifying-code.js -f target.txt
Now watching target.txt for changes ...
```

### Ejercicio

* Mejore este ejemplo añadiendo una opción `-r --recursive` que indica si `watch` debe hacer una  vigilancia recursiva.

The `fs.watch` API is not 100% consistent across platforms, and is unavailable in some situations.
The `recursive` option is only supported on macOS and Windows.
Para sistemas Linux es conveniente utilizar un wrapper como [node-watch](https://www.npmjs.com/package/node-watch).

## Ejercicios 

* Resuelva los problemas en la secciones *Fortifying the code* y *Expanding Functionality* del capítulo *Wrangling the File System*
  * In the file-watching examples, what happens if the target file doesn’t exist? 
  * What happens if a file being watched gets deleted?
  * How would you take the process to spawn from `process.argv`?
  * How would you pass an arbitrary number of additional parameters from `process.argv` to the spawned process?
    *  `node watcher-spawn-cmd.js target.txt ls -l -h`
  * Use la librería  [commander.js](https://www.npmjs.com/package/commander)  

## Visual Studio Code y git

* Haga su desarrollo usando Visual Studio Code. [Use git y github desde visual studio code](https://code.visualstudio.com/docs/editor/versioncontrol) tanto como pueda

## Tablero Kanban

* Cree un [tablero GitHub del tipo Kanban Automatizado](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards). Convierta en incidencias los requisitos y proceda a moverlos entre los paneles conforme progresa.
* En el repo que entrega deberán figurar los ejemplos del libro y los ejercicios resueltos.
  

* En el repo que entrega deberán figurar los ejemplos del libro y los ejercicios resueltos.

<!--
* Lea el [capítulo 20: Node.js](http://eloquentjavascript.net/2nd_edition/20_node.html) de la Segunda Edición (¡no la tercera!) del libro Eloquent JavaScript
* Añada a su repo un servidor de ficheros estáticos como el que se describe en la sección *A simple file server* del capítulo 20 (Node.js) de la Segunda Edición del libro Eloquent JavaScript
-->

En el `README.md` escriba un tutorial sobre lo que ha aprendido. Muestre imágenes o vídeos de su desarrollo con Visual Studio Code.

## Recursos

### Q & A

### A que se refiere la pregunta *"Instead, how would you take the process to spawn from process.argv?"*

En el fichero `watcher-spawn.js` se hace un `spawn`del comando `ls`:

```js
"use strict";
const
    fs = require('fs'),
    // The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
    throw Error("A file to watch must be specified!");
}

fs.watch(filename, function(eventType, fN) {
   
    let ls = spawn('ls', ['-lh', fN]);
    console.log(ls.pid);
    console.log(eventType, fN);
   
    ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
```

lo que pide la pregunta es escribir una variante del programa anterior 
en la que el comando a ejecutar en vez de ser `ls` se especifique 
en la línea de comandos:

```
$ ./watcher-sol.js 
Usage:
  watcher-sol.js <fileName> [command] [args ... ]
```

```
$ ./watcher-sol.js . 'ls' '-l' 
Now watching . for changes...
-rw-r--r--  1 casiano  staff  1460 18 oct 08:37 watcher-fortifying-code.js
```

```
$ ./watcher-sol.js . echo "File change"
Now watching . for changes...
File change watcher-fortifying-code.js
```

### El Libro Node.js 8 the Right Way

* [Repo de bibliografía para la organización](https://github.com/ULL-MII-SYTWS-2021/books-shared)
* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* [Node.js 8 the Right Way](https://puntoq.ull.es/permalink/f/1rcchus/TN_safari_s9781680505344) en Safari books O'Reilly. Jim Wilson. 2018 (Debes estar autenticado via PuntoQ) 
* [Node.js 8 the Right Way](https://books.google.es/books?id=oA9QDwAAQBAJ&lpg=PT96&ots=-mLQPlvsSj&dq=should%20ldjclient%20emit%20a%20close%20event&hl=es&pg=PP1#v=onepage&q=should%20ldjclient%20emit%20a%20close%20event&f=false) en Google Books. Faltan páginas

### The JS Event Loop

* [El bucle de Eventos de JS explicado](event-loop/README.md) Ejemplos


### VScode

* [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)

### El libro EloquentJS. El capítulo 20 es sobre Node.js

* [Eloquent JS 2nd Edition](http://eloquentjavascript.net/2nd_edition/) Chapter 20
* [Capítulo 20 de Eloquent JavaScript: Node.js](http://eloquentjavascript.net/2nd_edition/20_node.html) 

### El libro Node.js Beyond the Basics

Este es un libro diferente a la mayoría de los libros sobre Node.Js en cuanto que profundiza en el runtime-system de Node.js y por tanto es relevante en la etapa en la que estamos. Sólo están disponibles la introducción y el capítulo de streams. Elr esto es de pago.

* [Node.js Beyond the Basics](https://jscomplete.com/learn/node-beyond-basics)
* [Node.js Child Processes: Everything you need to know How to use spawn(), exec(), execFile(), and fork()](https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a)

### Solución

* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way) (Recurso solo disponible para el profesor)


