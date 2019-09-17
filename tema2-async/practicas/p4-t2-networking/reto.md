# Reto para la práctica p4-t2-networking

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

## Recursos para el profesor

* [sol c](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/blob/master/networking-with-sockets-chapter-3/chat-server.js)
* Path: `/Users/casiano/local/src/CA/sol-nodejs-the-right-way/networking-with-sockets-chapter-3`
