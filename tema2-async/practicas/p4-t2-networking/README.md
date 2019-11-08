# Práctica p4-t2-networking

* Lea el [Capítulo 3 "Networking with Sockets" de *Node.JS The Right Way*](https://books.google.es/books?id=oA9QDwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false) y resuelva los problemas en la secciónes *Testability* y *Robustness*
   * [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
   * [Safari. Chapter 3 Networking with Sockets](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-idot-getting-up-to-speed-on-nodedotjs-8/chp_networking_html)
   * [Book "Node.js 8 the Right Way"](https://books.google.es/books?id=oA9QDwAAQBAJ&lpg=PT96&ots=-mLQPlvsSj&dq=should%20ldjclient%20emit%20a%20close%20event&hl=es&pg=PP1#v=onepage&q=should%20ldjclient%20emit%20a%20close%20event&f=false) 2018 Edition. Google Books
    * [Capítulo 3 "Networking with Sockets" de *Node.JS The Right Way*](https://github.com/iMarcoGovea/books/blob/master/nodejs/Node.js%20the%20Right%20Way.pdf)  old edition
* Añadan pruebas y documentación
* Utilice [GitHub Actions]({{site.baseurl}/tema4-devops/control-version.html#github-actions}) para añadir Integración Contínua y realizar sus pruebas en GitHub
* Si no la hecho nunca añada también Integración Contínua usando Travis (Haga un badge en su README.md)
* Escriba en su `README.md`un tutorial con lo que ha aprendido en este capítulo
* Añada un `gulpfile.js` para facilitar la ejecución de las tareas
* Testability
   * Add a unit test for a single message that is split over two or more data events from the stream
   * Add a unit test that passes in `null` to the `LDJClient` constructor, and asserts that an error is thrown 
   * Then make the test pass by modifying the constructor to accept `null`: the semantic being that the created stream behaves as `/dev/null` in Unix. See [npm package dev-null](https://www.npmjs.com/package/dev-null)
* Robustness
    * The `LDJClient` already handles the case in which a properly formatted JSON string is split over multiply lines.  What happen if the incoming data is not a properly formatted JSON string?
    * Write a test case that sends a data event that is not JSON. What do you think on how to manage this case?
    * What happens if the last data event completes a a JSON message, but without the trailing new line?
    * Write a case where the stream object sends a data event containing JSON but no newline, followed by a close event. How will you manage this case?
    * Should `LDJClient` emit a `close` event for its listeners? 
* Realice el [reto](reto) que se indica aquí

## Recursos

* [Repo de bibliografía](https://github.com/ULL-MII-SYTWS-1920/books-shared)
* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* [Safari. Chapter 3 Networking with Sockets](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-idot-getting-up-to-speed-on-nodedotjs-8/chp_networking_html)
* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way)
* Video en YouTube. UPM. Node.JS: Programación con Sockets TCP/IP:
    - [Video en YouTube. UPM. Node.JS: Programación con Sockets TCP/IP](https://youtu.be/UjH7hw9fWWQ)
* [Net module](https://nodejs.org/api/net.html)
  * [createServer](https://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener)
* Gulp
  * Véase la sección [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/apuntes/gulp/) de los apuntes
  * [gulp quick start](https://gulpjs.com/docs/en/getting-started/quick-start)
  * [gulp getting started](https://gulpjs.org/getting-started.html)
* [Travis](https://crguezl.github.io/ull-esit-1617/_book/apuntes/pruebas/travis.html)
* Documentación:  
  * [documentation.js](http://documentation.js.org/), 
  * [jsdoc](https://www.npmjs.com/package/jsdoc), 
  * [docco](http://jashkenas.github.io/docco/)
* Pruebas
    * [Mocha](https://mochajs.org/)
    * [chai](https://www.chaijs.com/)

### Recursos para el profesor:

* Paths related:

  ```
  [~/sol-nodejs-the-right-way/networking-with-sockets-chapter-3(master)]$ pwd -P
  /Users/casiano/local/src/CA/sol-nodejs-the-right-way/networking-with-sockets-chapter-3

  ```

* [sol-c](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/networking-with-sockets-chapter-3)
  - See the branch `chapter3-exercises`
* [Sol -ai](https://github.com/ULL-MII-CA-1819/networking-ale-ivan)

