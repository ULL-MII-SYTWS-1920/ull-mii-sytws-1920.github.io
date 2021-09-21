<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice de Contenidos**

- [Reto: Cookies, Sesiones, Autenticación y Módulos npm (p8-t3-sessions-and-modules)](#reto-cookies-sesiones-autenticaci%C3%B3n-y-m%C3%B3dulos-npm-p8-t3-sessions-and-modules)
  - [Requisitos Básicos](#requisitos-b%C3%A1sicos)
  - [La Vista](#la-vista)
  - [Middlewares a usar](#middlewares-a-usar)
  - [Rutas que deberá implementar](#rutas-que-deber%C3%A1-implementar)
  - [Requisito adicional:  Implementar Middleware Contador de Nº de Visitas](#requisito-adicional--implementar-middleware-contador-de-n%C2%BA-de-visitas)
  - [Requisito adicional: Guardar los datos de las sesiones](#requisito-adicional-guardar-los-datos-de-las-sesiones)
  - [Recursos para el Reto](#recursos-para-el-reto)
  - [Solución al Reto](#solución-al-reto)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Reto: Cookies, Sesiones, Autenticación y Módulos npm (p8-t3-sessions-and-modules)

Cree una web app usando express que gestione una lista *TODO* de cosas que hacer.
El cliente puede añadir y suprimir tareas a hacer.

### Requisitos Básicos

* Podemos añadir elementos a la lista usando el formulario.  
* Podemos suprimir items haciendo click en las cruces que aparecen en cada elemento de la lista.
* La lista es almacenada en la session del visitante.  Si otro visitante se conecta al site, tendrá su propia lista por cuanto está guardada en la session.

### La Vista

Esta es la vista principal:

![todo.png](todo.png)

Este es el código de la vista en `ejs`:

**[~/javascript/expressjs/todo/my-todolist(master)]$ cat views/todo.ejs**

```html
<!DOCTYPE html>

<html>
    <head>
      <title><%= title %></title>
        <style>
            a {text-decoration: none; color: black;}
        </style>
    </head>

    <body>
      <h1><%= title %></h1>

        <ul>
        <% todolist.forEach(function(todo, index) { %>
            <li><a href="/todo/delete/<%= index %>">✘</a> <%= todo %></li>
        <% }); %>
        </ul>

        <form action="/todo/add/" method="post">
            <p>
                <label for="newtodo">Que más?</label>
                <input type="text" name="newtodo" id="newtodo" autofocus />
                <input type="submit" />
            </p>
        </form>
    </body>
</html>
```

### Middlewares a usar

Podemos usar express para el servidor, 
[EJS](https://ejs.co/#docs) para las vistas y como middlewares 

* [express-session](https://www.npmjs.com/package/express-session) y  
* [body-parser](https://www.npmjs.com/package/body-parser):

### Rutas que deberá implementar

Su aplicación deberá tener estas rutas:

* Listar las tareas: `/todo`
  - Cuando el request sea con `GET ` mostraremos la vista con la lista de tareas y el formulario
  - Cuando el request sea con `POST ` es que el formulario ha sido rellenado y enviado. Crearemos la tarea  y actualizaremos la vista 
* Añadir tareas: `/todo/add`
* Suprimir la tarea nº `id`:  `/todo/delete/:id:` 
* Cualquier otra ruta será redirigida a `/todo` ([vea el método `redirect` del objeto `response`](http://expressjs.com/es/api.html#res.redirect))

### Requisito adicional:  Implementar Middleware Contador de Nº de Visitas

Añada a su app un middleware que lleve la cuenta de los caminos de las rutas visitadas. Cada vez que una ruta es visitada muestre la cuenta en al consola del servidor

Puede que le sea útil alguno de estos módulos:

- [url-parse](https://www.npmjs.com/package/url-parse)
- [parseurl](https://www.npmjs.com/package/parseurl)

### Requisito adicional: Guardar los datos de las sesiones

* Guarde los datos de las sesiones en un fichero JSON

Puede ayudarle este módulo:

* [session-file-store](https://www.npmjs.com/package/session-file-store)


### Recursos para el Reto 

* [Documentación de Express](http://expressjs.com/en/api.html)
* [EJS](https://ejs.co/#docs) 
* [express-session](https://www.npmjs.com/package/express-session) y  
* [cookie-session](https://www.npmjs.com/package/cookie-session)
    - A user session can be stored in two main ways with cookies: on the server or on the client. 
* [parseurl](https://www.npmjs.com/package/parseurl)
* [url-parse](https://www.npmjs.com/package/url-parse)
    - cookie-session stores the session data on the client within a cookie, while a module like [express-session](https://www.npmjs.com/package/express-session) stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.
* [body-parser](https://www.npmjs.com/package/body-parser)
* Repo de ejemplo [ULL-ESIT-DSI-1819/hello-cookies-and-sessions](https://github.com/ULL-ESIT-DSI-1819/hello-cookies-and-sessions)
* [session-file-store](https://www.npmjs.com/package/session-file-store)
* [session-file-store](https://www.npmjs.com/package/session-file-store)

### Solución al Reto 

* [Solución al reto](https://github.com/ULL-ESIT-DSI-1819/reto-p8-t3-sessions-todolist) (No accesible)

