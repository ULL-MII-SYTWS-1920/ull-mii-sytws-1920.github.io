# Reto 1 para la práctica p4-t2-networking

Escriba un servidor que permita un *chat*&nbsp; donde los clientes se conectan
via `telnet` o `netcat`.

Cuando se arranca el sevidor debe decir algo como esto:

```
server$ node chat-server.js 
Server listening at http://localhost:8000
```

Después si se conecta un cliente, debe recibir un mensaje de bienvenida:

```
1$ nc localhost 8000
Welcome to telnet chat!
```

En la consola del server debe reflejarse que un cliente se ha conectado:

```
server$ node chat-server.js 
Server listening at http://localhost:8000
Guest1 joined this chat.
```

Si desde otra terminal se conecta otro cliente ...

```
2$ nc localhost 8000
Welcome to telnet chat!
```

y un cliente escribe algo ...

```
1$ nc localhost 8000
Welcome to telnet chat!
Guest2 joined this chat.
hello all!
```

debe reflejarse en el resto de los clientes:

```
2$ nc localhost 8000
Welcome to telnet chat!
Guest1> hello all!
```

así como en la consola del server:

```
server$ node chat-server.js 
Server listening at http://localhost:8000
Guest1 joined this chat.
Guest2 joined this chat.
Guest1> hello all!
```

## Tips

* Es conveniente tener un array `sockets` en el que se guarden los sockets 
creados para los clientes que están conectados

  ```js
  let sockets = [];
  ```

* Le será de ayuda una función `broadcast` que envía un `message`que acaba 
de llegar de un cliente al resto de los clientes:

  ```js
  function broadcast(from, message) {
    // If there are no sockets, then don't broadcast any messages
    if (sockets.length !== 0) {
      // If there are clients remaining then broadcast message
      sockets.forEach((socket, index, array) => {
        // Dont send any messages to the sender
        ...
      });
    }
  };
  ```

  * Documentación de [forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)

* Cada vez que un cliente se desconecta deberemos eliminar el socket de dicho cliente
del array `sockets`
  * Documentación de [splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice)
  * Documentación de [indexOf](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf)


# Reto 2: Using Names for the Clients


Una posible extensión del chat anterior es hacer que el cliente al comienzo de la 
conexión indique su nombre:

## Arrancando el server

```
[~/.../networking-with-sockets-chapter-3/chat-tcp-server(master)]$ node index.js
Listening on port 4000
```

## Cliente: Julio Cesar

```
[~/.../p2-t1-testing-crguezl(master)]$ telnet localhost 4000
Trying ::1...
Connected to localhost.
Escape character is '^]'.
Please enter your name (Press twice enter to send the message)
Julio Cesar
- Welcome to the Chatbox, There are 1 active users: [Julio Cesar ]
```

## Cliente: Marco Antonio

```
[~/.../p1-t1-iaas-Jorge-Acevedo(master)]$ telnet localhost 4000
Trying ::1...
Connected to localhost.
Escape character is '^]'.
Please enter your name (Press twice enter to send the message)
Marco Antonio
- Welcome to the Chatbox, There are 2 active users: [Julio Cesar ,Marco Antonio ]
Hola Julito!
```

```
...
Please enter your name (Press twice enter to send the message)
Julio Cesar
- Welcome to the Chatbox, There are 1 active users: [Julio Cesar ]
> Marco Antonio : Hola Julito!
```

# Recursos para el profesor

* [sol c](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/blob/master/networking-with-sockets-chapter-3/chat-server.js)
  * Path: `/Users/casiano/local/src/CA/sol-nodejs-the-right-way/networking-with-sockets-chapter-3`
* [Second solution with user names](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way-private/tree/master/networking-with-sockets-chapter-3/chat-tcp-server)
  * Path: `/Users/casiano/local/src/CA/sol-nodejs-the-right-way/networking-with-sockets-chapter-3/chat-tcp-server`