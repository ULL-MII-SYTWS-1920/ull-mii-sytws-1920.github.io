# Índice

- [Índice](#%c3%8dndice)
- [Tema 3. Servicios y Aplicaciones Web](#tema-3-servicios-y-aplicaciones-web)
  - [Capítulo: WebSockets](#cap%c3%adtulo-websockets)
  - [Capítulo: Web Workers](#cap%c3%adtulo-web-workers)
  - [Capítulo: REST](#cap%c3%adtulo-rest)
  - [Capítulo: Google APIs](#cap%c3%adtulo-google-apis)
  - [Capítulo: Authentication](#cap%c3%adtulo-authentication)
    - [Prácticas](#pr%c3%a1cticas)
  - [Capítulo: Web Scrapping](#cap%c3%adtulo-web-scrapping)
    - [Prácticas](#pr%c3%a1cticas-1)
  - [Capítulo: Bases de Datos No Relacionales: MongoDB](#cap%c3%adtulo-bases-de-datos-no-relacionales-mongodb)
  - [Capítulo: Limitaciones de REST. GraphQL](#cap%c3%adtulo-limitaciones-de-rest-graphql)
  - [Capítulo: GraphQL](#cap%c3%adtulo-graphql)
    - [Fundamentals](#fundamentals)
    - [Tutorial written by Maira Bello: Build your own GraphQL server](#tutorial-written-by-maira-bello-build-your-own-graphql-server)
  - [React](#react)
  - [Desktop Apps using Web Technologies: Electron](#desktop-apps-using-web-technologies-electron)


# Tema 3. Servicios y Aplicaciones Web 

## Capítulo: [WebSockets](websockets.md)

## Capítulo: Web Workers

1. [Book Web Workers: Safari O'Reilly. Usa Acceso ULL](http://proquest.safaribooksonline.com/book/programming/javascript/9781449322120/firstchapter)

## [Capítulo: REST](rest.md)


## Capítulo: Google APIs

2. [googlemaps/google-maps-services-js](https://github.com/googlemaps/google-maps-services-js) GitHub
5. [Google Calendar API](https://developers.google.com/google-apps/calendar/)
   1.  [Repo de ejemplo de uso en NodeJS de la API de Calendar](https://github.com/ULL-ESIT-MII-CA-1718/nodejs-google-calendar-example)
   2. Tutorial [Building a Google Calendar Booking App with MongoDB, ExpressJS, AngularJS, and Node.js ](https://github.com/ULL-ESIT-MII-CA-1718/googlecalendarapidemo)
   3. [Google APIs Client Library for JavaScript](https://github.com/google/google-api-javascript-client)
   4. [Google API Client Libraries JavaScript. Tutorial](https://developers.google.com/api-client-library/javascript/start/start-js)



## Capítulo: Authentication

**Sessions y Authentication**

Véase la sección [Cookies y Autenticación](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/cookies/)
en los apuntes del profesor

**OAuth**

* [Introducción a OAuth](http://nereida.deioc.ull.es/~lpp/perlexamples/node773.html) (Apuntes del profesor)

**Passport: Introducción**

* [Passport](http://passportjs.org/) is authentication middleware for Node.js. 
* Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. 
* A comprehensive set of strategies support authentication using 
   * a [username and password](http://passportjs.org/docs/username-password), 
   * [Facebook](http://passportjs.org/docs/facebook), 
   * [Twitter](http://passportjs.org/docs/twitter), 
   * [GitHub](https://github.com/cfsghost/passport-github), 
   * and [more](http://passportjs.org/docs/providers).

**Passport: Tutoriales**

* [Example of how to use Express 4.x and Passport to authenticate users using GitHub](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-github-example)
* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using Facebook](https://github.com/ULL-ESIT-DSI-1617/express-4.x-facebook-example)
* [Example of how to use Express 4.x and Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)
* [Easy Node Authentication: Setup and Local](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)
* [Authenticating Node.js Applications With Passport](http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619)
  * [Repositorio con el código del tutorial](https://github.com/tutsplus/passport-mongo)
* [Node.js Login System With Passport](https://youtu.be/Z1ktxiqyiLA) YouTube video
  - [Part 1](https://youtu.be/Z1ktxiqyiLA)
     - [What Is Input Validation and Sanitization?](http://download.oracle.com/oll/tutorials/SQLInjection/html/lesson1/les01_tm_ovw3.htm)
     - [Flash Messages](https://gist.github.com/brianmacarthur/a4e3e0093d368aa8e423): A flash message is used in order to keep a message in session through one or several requests of the same user. By default, it is removed from session after it has been displayed to the user. Flash messages are usually used in combination with HTTP redirections, because in this case there is no view, so messages can only be displayed in the request that follows redirection.
  - [Part 2](https://youtu.be/OnuC3VtEQks)
  - [Part 3](https://youtu.be/iX8UhDOmkPE)
      - [Passport-local](https://github.com/jaredhanson/passport-local) (GitHub module repo)
      - [Passport Docs: Username & Password](http://www.passportjs.org/docs/username-password/)
      - [Passport Docs: Flash Messages](http://www.passportjs.org/docs/downloads/html/#flash-messages)
      - [Bcryptjs](https://github.com/dcodeIO/bcrypt.js) at GitHub
      - [Passport: sessions](http://www.passportjs.org/docs/configure/#sessions) (serialize/deserialize)
  - [GitHub repo](https://github.com/bradtraversy/loginapp) 
  - [Fork at ULL-ESIT-CA-1718](https://github.com/ULL-ESIT-MII-CA-1718/loginapp)

**Passport: Notas sobre como Configurar una WebApp en Facebook**

* [Facebook App Development Guide](https://developers.facebook.com/docs/apps/)
  - [Facebook: Register and Configure an App](https://developers.facebook.com/docs/apps/register)
* StackOverflow: [How to Test Facebook Connect Locally](http://stackoverflow.com/questions/2459728/how-to-test-facebook-connect-locally)
  - Facebook → Settings → Basic:

    write "localhost" in the "App Domains" field then click on "+Add Platform" choose "Web Site".

    After that, in the "Site Url" field write your localhost url 
    (e.g.: `http://localhost:3000/login/facebook/return`).
    This will allow you to test your facebook plugins locally.
* StackOverflow: [Facebook Site URL?](http://stackoverflow.com/questions/8107911/facebook-site-url)

### Prácticas

* [Práctica: Cookies, Sesiones, Autenticación y Módulos npm (p8-t3-sessions-and-modules)](practicas/p8-t3-sessions-and-modules)

<!--
**Stylus**

* [A Simple Website in Node.js with Express, Jade and Stylus](https://www.clock.co.uk/insight/a-simple-website-in-nodejs-with-express-jade-and-stylus)
* [Build a Node.js App with Express + EJS + Stylus by Robin Skafte](https://scotch.io/@robinskafte/build-a-nodejs-app-with-express-ejs-stylus)
-->

## Capítulo: [Web Scrapping](web-scrapping)


### Prácticas

* [Práctica Transforming Data and Testing Continuously (p9-t3-transfoming-data)](practicas/p9-t3-transforming-data/)

## [Capítulo: Bases de Datos No Relacionales: MongoDB](mongodb)

## Capítulo: Limitaciones de REST. GraphQL

* [React Quickly: Painless web apps with React, JSX, Redux, and GraphQL by Azat Mardan. Manning. 2017](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/programming/javascript/9781617293344/about-this-book/kindle_split_009_html)
* [Beginning GraphQL by Brian Kimokoti.  Packt 2018](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781789610543) PuntoQ BULL Safari
* [REST with Hypermedia - Hot or Not?](https://reflectoring.io/rest-hypermedia/) blog by Tom Hombergs
  - [mikekelly/hal-browser](https://github.com/mikekelly/hal-browser)
* [Por qué API REST está muerto y debemos usar APIs GraphQL - José María Rodríguez Hurtado](https://youtu.be/cUIhcgtMvGc) YouTube
* [GraphQL ha muerto: Vivan las APIs REST con Hypermedia - Jorge Ferrer y José Manuel Navarro](https://youtu.be/yr7Tvr9dVNY) YouTube
* [Learning GraphQL and Relay by Samer Buna. Pack. 2016](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781786465757) PuntoQ BULL Safari
* [Visual Design of GraphQL Data. Frisendal. APress. 2018](https://link-springer-com.accedys2.bbtk.ull.es/content/pdf/10.1007%2F978-1-4842-3904-9.pdf)

## Capítulo: GraphQL

###  Fundamentals

* [Basics Tutorial - Introduction](https://www.howtographql.com/basics/0-introduction/)
* [GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
* [Core Concpets](https://www.howtographql.com/basics/2-core-concepts/)
* [Big Picture (Architecture)](https://www.howtographql.com/basics/3-big-picture/)

### Tutorial written by Maira Bello: Build your own GraphQL server

* Maira Bello tutorial: <https://www.howtographql.com/graphql-js/1-getting-started/>
* [Introduction](https://www.howtographql.com/graphql-js/0-introduction/)
* [Getting Started](https://www.howtographql.com/graphql-js/1-getting-started/)
* [A Simple Query](https://www.howtographql.com/graphql-js/2-a-simple-query/)
* [A simple Mutation](https://www.howtographql.com/graphql-js/3-a-simple-mutation/)
* [Adding a DataBase](https://www.howtographql.com/graphql-js/4-adding-a-database/)
* [Connecting Server and Database with the Prisma Client](https://www.howtographql.com/graphql-js/5-connecting-server-and-database/)
* [Authentication](https://www.howtographql.com/graphql-js/6-authentication/)
* [Realtime GraphQL Subscriptions](https://www.howtographql.com/graphql-js/7-subscriptions/)
* [Filtering, Pagination & Sorting](https://www.howtographql.com/graphql-js/8-filtering-pagination-and-sorting/)
* [Summary](https://www.howtographql.com/graphql-js/9-summary/)


## React 

* Table of contents of the book [Learning React by Eve Porcello, Alex Banks Index. Be sure you are authenticated in PuntoQ](learning-react.md)

## Desktop Apps using Web Technologies: Electron

* [Electron](electron.md)
