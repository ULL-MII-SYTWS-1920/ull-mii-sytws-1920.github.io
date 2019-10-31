# Práctica p5-t3-websockets

Lea el capítulo [WebSocket](https://javascript.info/websocket) del libro [The Modern JavaScript Tutorial](https://javascript.info/) y haga un resumen de lo aprendido.

Estudie también y desarrolle el ejemplo explicado en:

* [Build a simple chat app with node.js and socket.io](https://medium.com/@noufel.gouirhate/build-a-simple-chat-app-with-node-js-and-socket-io-ea716c093088) By Noufel Gouirhate Dec 24, 2017  Medium.com
  - Puede encontrar el código en este [Repo ULL-ESIT-DSI-1819/simpleChatApp](https://github.com/ULL-ESIT-DSI-1819/simpleChatApp)
  
* Despliegue la aplicación en Heroku y en iaas.ull.es
    * Para el despliegue en Heroku deberá leer el artículo: [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
    * Repo [ULL-ESIT-DSI-1819/websocket-socket-io-heroku](https://github.com/ULL-ESIT-DSI-1819/websocket-socket-io-heroku) 
    * Aquí es esencial habilitar [session affinity](https://devcenter.heroku.com/articles/session-affinity):

      ```
      [~/local/src/javascript/learning/websockets/websockets-heroku-socket-io(master)]$ heroku features:enable http-session-affinity
      Enabling http-session-affinity for ⬢ dsi-socket-io-example... done
      ```

      Session affinity, sometimes referred to as sticky sessions, is a platform feature that associates all HTTP requests coming from an end-user with a single application instance (web dyno).
    * Repo [ULL-ESIT-DSI-1819/websocket-ws-heroku](https://github.com/ULL-ESIT-DSI-1819/websocket-ws-heroku)
* Realice el [reto](reto)

## Recursos

* Capítulo [WebSocket](https://javascript.info/websocket) del libro [The Modern JavaScript Tutorial](https://javascript.info/)
* WebSockets
  * Socket.io
    * [Socket.io Guide: a chat](https://socket.io/get-started/chat/)
      - [Associated Repo](https://github.com/socketio/chat-example)
    * [Docs](https://socket.io/docs/)
      * [Namespaces](https://socket.io/docs/rooms-and-namespaces/#Default-namespace)
  * Chats
    * [Build a simple chat app with node.js and socket.io](https://medium.com/@noufel.gouirhate/build-a-simple-chat-app-with-node-js-and-socket-io-ea716c093088) - By Noufel Gouirhate Dec 24, 2017  Medium.com
      - [Repo ULL-ESIT-DSI-1819/simpleChatApp](https://github.com/ULL-ESIT-DSI-1819/simpleChatApp)
    * [Web Sockets (Node.js and Socket.io Chat App)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9) in the Net Ninja Youtube Channel
      - [Repo ULL-ESIT-DSI-1819/websockets-playlist](https://github.com/ULL-ESIT-DSI-1819/websockets-playlist)
    * [Introduction to Socket.io](https://medium.com/@chathuranga94/introduction-to-socket-io-600025322cd2) by Udara Bibile at Medium.com
  * [Socket.io & Express NodeJS Tutorial to build a Realtime Chat App](https://youtu.be/tzNOqcoupWQ)
    * [Socket.io & Express NodeJS Tutorial to build a Realtime Chat App - Part 1](https://youtu.be/tzNOqcoupWQ)
    * [Socket.io & Express NodeJS Tutorial to build a Realtime Chat App - Part 2](https://youtu.be/emnlFamYx7Y)
    * [Corresponding repo at GitHub](https://github.com/ULL-ESIT-DSI-1819/Socket_io_Chat_Room)
  * Real Time Slide Presentation
    * [Real-time Presentation Slides with Socket.io, Node.js and Javascript](https://medium.com/@nafeunasir/real-time-presentation-slides-with-socket-io-express-node-js-and-javascript-cf08a95ff098) by Nafeu Nasir at Medium.com
      - [Repo ULL-ESIT-DSI-1819/realtime-slides-tut.git](https://github.com/ULL-ESIT-DSI-1819/realtime-slides-tut.git)
      - [Real-time Slides Demonstration](https://youtu.be/WmE6dkRFY4Y) YouTube
    * [Synchronizing HTML5 slides with Node.js by Tim Branyen](https://bocoup.com/blog/synchronizing-html5-slides-with-node-js)
  * Libros
    * [Socket.IO Real-time Web Application Development By: Rohit Rai](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781782160786) book at PuntoQ ULL
      - [Repo con soluciones al libro](https://github.com/piscolomo/example-socketio)
* Programación Web
  * Express
    * [Apuntes de Express 1617](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/express/)
  * [ejs](https://ejs.co/)
  * Despliegues
    * [Como Desplegar una Aplicación Web en iaas.ull.es](https://github.com/SYTW/iaas-ull-es)
    * [Apuntes de Heroku](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/recursos/heroku.html)
    * Para el despliegue en Heroku deberá leer el artículo: [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
    * Repo [ULL-ESIT-DSI-1819/websocket-socket-io-heroku](https://github.com/ULL-ESIT-DSI-1819/websocket-socket-io-heroku) 
    * Aquí es esencial habilitar [session affinity](https://devcenter.heroku.com/articles/session-affinity):

      ```
      [~/local/src/javascript/learning/websockets/websockets-heroku-socket-io(master)]$ heroku features:enable http-session-affinity
      Enabling http-session-affinity for ⬢ dsi-socket-io-example... done
      ```

      Session affinity, sometimes referred to as sticky sessions, is a platform feature that associates all HTTP requests coming from an end-user with a single application instance (web dyno).
  * Webpack
    * [Webpack guide: "getting started"](https://webpack.js.org/guides/getting-started/)
    * [Youtube video Webpack 4 por Fatz](https://youtu.be/vF2emKbaP4M)
