# Reto 1 para Chapter 2. Wrangling the File System

Cuando al comando  `ssh` se le pasa además del destino un argumento adicional lo interpreta como un comando y lo ejecuta en la máquina de destino:

```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ ssh dsi ls
labs
snap
```

Escriba  un programa en Node.js
que ejecute en remoto usando `ssh` el programa Node.js pasado como argumento en línea de comandos:

```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ ./remote-node.js 'console.log(4*5)'
child stdout:
20
child process exited with code 0 and signal null
```

Aquí las comillas simples `'console.log(4*5)'` son esenciales 
para proteger la cadena de su interpretación  por la bash shell.

Este programa se conecta vía `ssh` a la máquina virtual de `iaas.ull.es` del pool de la asignatura y ejecuta `node -e 'console.log(4*5)'`.
Esto es, es equivalente a el siguiente comando:

```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ ssh dsi "node -e 'console.log(4*5)'"
20
```
`sol-nodejs-the-right-way/filesystem-chapter-2º`

## Sugerencias:

1. Cuando al intérprete de Node.js se le pasa la opción `-e`  interpreta que el programa es la cadena que sigue a la opción `-e`. Ejemplo: 
  ```
    [~/campus-virtual/1819/dsi1819/introduccion(master)]$ node -e 'console.log(2+3)'
    5
  ```
2. Use spawn para crear un proceso que ejecuta `ssh`
3. Pase como argumentos a `ssh` el comando `node` con el argumento `-e` y el programa proveido en línea de comandos
4. Ponga manejadores/callbacks `on('data')` para los streams `stdout` y `stderr` del proceso ejecutando la `ssh` de manera 
que vuelquen en la consola los chunks que van llegando

NOTA (para el profesor):
```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ pwd -P
/Users/casiano/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ ls -l remote-node.js 
-rwxr-xr-x  1 casiano  staff  701 16 feb 12:29 remote-node.js
```

# Reto 2 para Chapter 2. Wrangling the File System

Escriba  un programa en Node.js
que ejecute en remoto usando `ssh` el programa Node.js cuyo nombre es pasado como argumento en línea de comandos.

```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ node dsi-node.js program.js
child stdout:
5
child process exited with code 0 and signal null
```

El fichero `program.js` se supone que está en la máquina local. Deberá transferirlo a la máquina remota (use `scp`) para su posterior ejecución. El comando `scp` permite transferir ficheros entre máquinas usando ssh:

```
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ scp watcher.js dsi:/tmp/w.js
watcher.js                                                                       100% 1229     8.8KB/s   00:00    
[~/local/src/CA/sol-nodejs-the-right-way/filesystem-chapter-2(master)]$ ssh dsi ls '/tmp/w*' 
/tmp/w.js
```

