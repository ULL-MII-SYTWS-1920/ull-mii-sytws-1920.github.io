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
   * [Strategy Passport-GitHub2](http://www.passportjs.org/packages/passport-github2/). The author of Passport-Github has not maintained the original ...
     - [Passport-GitHub2 Example](https://github.com/cfsghost/passport-github/tree/master/examples/login)
   * [GitHub strategy documentation](http://www.passportjs.org/packages/passport-github/) and repo [GitHub](https://github.com/jaredhanson/passport-github), 
   * and [more](http://www.passportjs.org/packages/).

**Passport: Tutoriales**

* [Example of how to use Express 4.x and Passport to authenticate users using GitHub](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-github-example)

```
[~/.../useoctonode/express-4.x-github-example(master)]$ pwd -P
/Users/casiano/local/src/javascript/learning/useoctonode/express-4.x-github-example
```
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
