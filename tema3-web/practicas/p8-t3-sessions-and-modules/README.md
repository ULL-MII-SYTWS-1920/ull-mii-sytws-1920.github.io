## Práctica: Cookies, Sesiones, Autenticación y Módulos npm (p8-t3-sessions-and-modules)

Cree y publique un módulo npm  que provea un middleware express que provee autenticación para acceder a los ficheros en una determinada ruta. 

En npm  puede encontrar este ejemplo:

* [@ull-esit-pl/auth](https://www.npmjs.com/package/@ull-esit-pl/auth)
* [https://github.com/ULL-ESIT-PL-1819/crguezl-authmodule](https://github.com/ULL-ESIT-PL-1819/crguezl-authmodule) (Repo Privado en GitHub)

* Use un fichero JSON para guardar las parejas usuario-clave encriptadas:

  **Fichero src/server/users.json**

  ```
  {
    "juana":"$2a$10$BGEs97PfAygEp7CA6dgkvO.wkqtNmBkZhDUHJRKISw90vBL7bIrUS",
    "casiano":"$2a$10$C0dosn7LffKfM3WEt9O7X.waDkY0WQFHh7PF76.YkQDOG9aBa3nIC"
  }
  ```

* El módulo encripta los passwords en el fichero de claves usando por ejemplo  [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
* Este sería un ejemplo de un servidor que usa nuestro módulo como middleware:

 **src/server/server.js**
  ```js
  const express = require('express');
  const session = require('express-session');
  const auth = require('@ull-esit-pl/auth');

  ...

  const app = express();

  ...

  app.use(session({
    secret: 'verySecureSecret',
    resave: true,
    saveUninitialized: true,
  }));

  app.use('/', auth({
    passwordFile: path.join(__dirname, 'users.json'),
    pathToProtect: path.join(__dirname, '../../', 'dist'),
    registerView: 'register',
    successRegisterView: 'registerSuccess',
    errorRegisterView: 'registerError',
    loginView: 'login',
    successLoginView: 'loginSuccess',
    errorLoginView: 'loginError',
    logoutView: 'logout',
    unauthorizedView: 'unauthorizedView',
  }));

  ...

  ```
* El ejemplo de uso anterior muestra la interfaz de nuestro módulo. Esta es la cabecera de la función `authentication` exportada 
por [@ull-esit-pl/auth](https://www.npmjs.com/package/@ull-esit-pl/auth):

  **auth.js**)

  ```js
  function authentication(options) {
    const {
      passwordFile,
      pathToProtect,
      registerView,
      successRegisterView,
      errorRegisterView,
      loginView,
      successLoginView,
      errorLoginView,
      logoutView,
      unauthorizedView,
    } = options;
    ...
  }
  ```
  
  The function `authentication` returns a router to use as middleware. 
  It defines the routes 
   * `/login`, `/register` via GET and POST methods, 
   * `/logout`  via the GET method only. And 
   * `/content` 
     * via the GET method and this is the route that will be protected. 
     * Users must be logged in before accessing this route, otherwise a `401` message will be sent with an unauthorized view.
   * It receives an Object as first  parameter. This object describes the configuration needed for the authentication. 
   * The properties are the following:
       * `passwordFile`: location of the file to store the users credentials.
       * `pathToProtect`: the files that will be accessible only when users are logged in.
       * `registerView`: view containing the form to register. It will be served at `/register` via the HTTP GET method.
       * `successRegisterView`: view with the message to render when the user registers successfully.
       * `errorRegisterView`: view to render when there is an error in the registration.
       * `loginView`: view containing the form to log in. It will be served at `/login` via the HTTP GET method.
       * `successLoginView`: view with the message to render when the user logs in successfully.
       * `errorLoginView`: view to render when there is an error in the login.
       * `logoutView`: view to render when the user logs out (visits `/logout`).
       * `unauthorizedView`: view to render when a user tries to access `/content` without being logged in
* Aunque el módulo de autorización soporta cualquier *view engine*, la aplicación de ejemplo que use nuestro módulo provee las vistas en [ejs](https://ejs.co/)
* La siguiente figura muestra la estructura de vistas del ejemplo que estamos usando:

  ```
  src/server/views/
  ├── components
  │   ├── errorMessage.ejs
  │   ├── foot.ejs
  │   ├── form.ejs
  │   ├── head.ejs
  │   └── successMessage.ejs
  ├── index.ejs
  ├── login.ejs
  ├── loginError.ejs
  ├── loginSuccess.ejs
  ├── logout.ejs
  ├── register.ejs
  ├── registerError.ejs
  ├── registerSuccess.ejs
  └── unauthorizedView.ejs
  ```

* El módulo provee rutas  y manejadores para el login, el registro y el logout así como para acceder al contenido protegido

  **auth.js**

  ```js`
  function authentication(options) {
    ...

    router.use('/content', auth, express.static(pathToProtect));

    router.get('/login', (req, res) => {
      ...
    });

    router.post('/login', (req, res) => {
      ...
    });

    router.get('/register', (req, res) => {
      ...
    });

    router.post('/register', (req, res) => {
      ...
    });

    // Route to logout
    router.get('/logout', (req, res) => {
      ...
    });

    return router;
  }

  module.exports = authentication;
  ```

* Escriba también un programa servidor en express que use su módulo. Deberá proteger una ruta conteniendo un tutorial que describe lo aprendido en esta práctica 
* Despliegue su aplicación en la máquina virtual del [iaas](https://github.com/SYTW/iaas-ull-es) y en [Heroku](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/recursos/heroku.html) 
* Escriba un tutorial con lo que ha aprendido en esta práctica
* Cuando acepte la asignación en Github Classroom se le creará el repo `p8-t3-sessions-and-modules-aluXXXX`correspondiente. Proceda de esta forma:
  1. Cree dentro de la organización un repo `ULL-ESIT-DSI-1819/auth-aluXXXX` con el código del módulo de autorización que publicará en npm en su ámbito `@aluXXXX`
  2. Cree dentro de la organización un repo `ULL-ESIT-DSI-1819/server-auth-aluXXXX` que contiene el código del server que usa el módulo y que contiene el tutorial
  3. Añada al repo `ULL-ESIT-DSI-1819/p8-t3-sessions-and-modules-aluXXXX` como submódulos git  los dos módulos anteriores. Incluya un `README.md` en este repo



## Recursos

### Programación Web

* EJS
  * [ejs](https://ejs.co/) Official page
  * [Using EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express) GitHub Wiki
  * [blog Use EJS to Template Your Node Application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
* Cookies, Sessions, Authentication
  * [https://github.com/ULL-ESIT-DSI-1819/hello-cookies-and-sessions](https://github.com/ULL-ESIT-DSI-1819/hello-cookies-and-sessions)

    ```
      [~/campus-virtual/1819/dsi1819/dsi-1819/tema3-web/practicas/p8-t3-sessions-and-modules/cookies(master)]$ pwd
      /Users/casiano/campus-virtual/1819/dsi1819/dsi-1819/tema3-web/practicas/p8-t3-sessions-and-modules/cookies
    ```

  * Ejemplo de server con cookies y sessions: [ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs](https://github.com/ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510).
  * [Cookies y Sessiones (apuntes gitbook 16/17)](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/cookies/)
  * [Sessions y Authentication (apuntes 16/17)](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/authentication/)
  * [Descripción de una Práctica: Sessions y Autenticación en ExpressJS de 2016/2017](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicasessions.html)
  * En el módulo npm [@ull-esit-pl/auth](https://www.npmjs.com/package/@ull-esit-pl/auth) encontrará una solución al problema 
* Express
  * [Apuntes de Express 1617](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/express/)
  * Repo [crguezl/express-start](crguezl/express-start)
* Despliegues
  * [Como Desplegar una Aplicación Web en iaas.ull.es](https://github.com/SYTW/iaas-ull-es)
  * [Apuntes de Heroku](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/recursos/heroku.html)
* Webpack
  * [Webpack guide: "getting started"](https://webpack.js.org/guides/getting-started/)
  * [Youtube video Webpack 4 por Fatz](https://youtu.be/vF2emKbaP4M)

### Creación de Módulos

* Véase la sección
  - [Creación de Paquetes y Módulos en NodeJS](https://crguezl.github.io/ull-esit-1617/_book/apuntes/npm/nodejspackages.html) GitHub
  - [Creación de Paquetes y Módulos en NodeJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/npm/nodejspackages.html) GitBook
* [Ejemplo de módulo npm: ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)
* [prueba-scapegoat. Ejemplo de programa cliente](https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat)
* [Repo combinado librería + cliente de prueba](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
  - [Video que explica como hacer un repo combinado](https://youtu.be/17cZY3na3As)
* [Solución:  repo ULL-ESIT-GRADOII-PL/modulos](https://github.com/ULL-ESIT-GRADOII-PL/modulos/tree/master)
* [Como funciona *require*](https://youtu.be/qffmnSCRR3c) Video del profesor
* [Best practice: Specify global dependencies in your gulpfile](https://stackoverflow.com/questions/14657170/installing-global-npm-dependencies-via-package-json)
* [Node.js — How to test your new NPM module without publishing it every 5 minutes](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be)
* [Best practice: Better local require() paths for Node.js](https://gist.github.com/branneman/8048520):
   - When the directory structure of your Node.js **application** (not library!) has some depth, you end up with a lot of annoying relative paths in your require calls like:
    ```
     var Article = require('../../../models/article');
    ```
   Those suck for maintenance and they're ugly.

### Git submodulos

* Libro de Git. Chapter [7.11 Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* [git help submodule](https://git-scm.com/docs/git-submodule)
* Stackoverflow: [How do I remove a submodule?](https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
* [Chris Jean blog in WordPress: Git Submodules: Adding, Using, Removing, Updating](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/)
* [Vídeo *uso de sub modulos en git: practica "modulos en npm"*](https://youtu.be/17cZY3na3As). Se refiere a otra práctica pero puede que les sea útil para esta práctica

## Notas para el Profesor

* sol-cas
  * [sol-cas](https://github.com/ULL-ESIT-PL-1819/analizador-lexico-para-js)
* sol-ai
  * [sol-ai auth](https://github.com/ULL-ESIT-PL-1718/authentication-angeligareta)
  * [sol-ai](https://github.com/ULL-ESIT-PL-1718/analizador-lexico-para-js-angeligareta)
* sol-ca
  * [sol-ca-auth](https://github.com/ULL-ESIT-PL-1718/alu0100966589-AuthModule)
  * [sol-ca](https://github.com/ULL-ESIT-PL-1718/analizador-lexico-para-js-alu0100966589)
* sol-da
  * [sol-da-auth](https://github.com/ULL-ESIT-PL-1718/auth-alu0100973914)
  * [sol-da](https://github.com/ULL-ESIT-PL-1718/analizador-lexico-para-js-alu0100973914)
* sol-cri
  * [sol-cri](https://github.com/ULL-ESIT-PL-1718/analizador-lexico-para-js-alu0100945850)
  * [sol-cri-auth](https://github.com/ULL-ESIT-PL-1718/auth-alu0100945850)
  * [ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510](https://github.com/ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510)



