# Práctica Connecting Robust Microservices (p6-t2-microservices)

* Lea el [Capítulo 4 "Connecting Robust Microservices" de *Node.JS The Right Way*](https://github.com/iMarcoGovea/books/blob/master/nodejs/Node.js%20the%20Right%20Way.pdf) ` ` y resuelva los problemas en la secciones 

- *Error Handling*, 
- *Robustness*` ` y 
- *Bidirectional Messaging*:

* **Error Handling**
    - The `zmq-filer-rep.js` program uses `fs.readfile()` to serve up file contents. However it doesn't handle error cases.
        - What should the program do in the case of error?
        - How would you change the JSON object structure of messages to support  sending an error to the requester? 
    - Later in the same program we listen for the Unix signal `SIGINT` to detect the user's `Ctrl-C` in the terminal
        - What happens if the program ends in some other way , like `SIGTERM` (the termination signal)?
        - What happens if there is an unhandled Node.js exception, and how should we deal with it? 
            - *Hint*: you can listen for the `uncaughtException` event on the process object
* **Robustness**
    - In *Building a Cluster* we created a Node.js cluster that spins up a pool of worker processes. 
    - In the master process we listened for `online` events and logged a message when the workers came up. 
    - But we didn't specify what should happen when a worker ends.
        - What happens when you kill a worker process from the command line? 
            - *Hint*: Use `kill [pid]`from the command line
        - How would you change the `zmq-filer-rep-cluster.js` program to fork a new worker whenever one dies?
* **Bidirectional Messaging**
    - For this project you'll need to use 0MQ PUSH/PULL sockets and the Node.js clustering techniques. 
    - Your clustered program will spin up a pool of workers and distribute 30 jobs. 
    - The master process should:
        - Create a `PUSH` socket and bind it to an IPC endpoint. This socket will be for sending jobs to the workers
        - Create a `PULL` socket and bind it to a different IPC endpoint. This socket will receive messages from the workers
        - Keep a count of ready workers
        - Listen for messages on the PULL socket, and
            - If the message is a `ready` message, increment the ready counter, or
            - If the message is a `result` message , output it to the console
        - Spin up the worker processes
        - When the ready counter reaches 3 send 30 `job` messages out through the push socket
    - The worker process should:
        - Create a `PULL` socket and connect it to the master 's `PUSH` endpoint
        - Create a `PUSH` socket and connect it to the master 's `PULL` endpoint
        - Listen for `job` messages on the `PULL` socket, and respond by sending a `result` message out on the `PUSH` socket
        - Send a `ready` message out on the `PUSH` socket.
   - Make sure your `result`  messages include at least the process ID of the worker. 
    This way you can inspect the console output and confirm that the workload is being *balanced* among the worker processes.
   - See [the example in directory ventilator-worker-sink](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/connecting-robust-microservices-chapter-4/microservices/ventilator-worker-sink) 
   - See section PUSH-PULL in file [Readme.md](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/blob/master/connecting-robust-microservices-chapter-4/microservices/README.md) in the folder `connecting-robust-microservices-chapter-4/microservices` in our repo `ULL-MII-CA-1819/nodejs-the-right-way`
* Añada documentación

## Recursos

* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way). 
    - Mira el [directorio connecting-robust-microservices-chapter-4](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/connecting-robust-microservices-chapter-4)
    - [El subdirectorio  connecting-robust-microservices-chapter-4/microservices contiene los ejemplos del libro](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way/tree/master/connecting-robust-microservices-chapter-4/microservices)
* [YouTube vídeo: Building Distributed Systems with Node.js and 0MQ](https://www.youtube.com/watch?v=zgDjaJdAB9c). 
    - Jim R. Wilson, author of Node.js the Right Way, explains how to build distributed systems using ØMQ at a Node.js in the Wild meetup]
    - [Slides](https://ull-mii-ca-1819.github.io/node-zmq-talk/) at ull-mii-ca-1819
    - [Slides](https://github.com/jimbojw/node-zmq-talk) at jimbojw-zmq-talk

### Node.js 0MQ API

* [http://zeromq.github.io/zeromq.js/](http://zeromq.github.io/zeromq.js/) 

### La Guía de ZeroMQ

* [0MQ - The Guide. HTML](http://zguide.zeromq.org/page:all)
* [0MQ - The Guide. PDF](https://campusvirtual.ull.es/1819/pluginfile.php/29606/mod_folder/content/0/0mq-guide-book-pdf.pdf?forcedownload=1)
* [0MQ -Examples in all languages](https://github.com/booksbyus/zguide/tree/master/examples) zguide github ØMQ - The Guide. Written by Pieter Hintjens ph@imatix.com, CEO iMatix Corporation.
    - [0MQ Examples in Node.js](https://github.com/booksbyus/zguide/tree/master/examples/Node.js)
* [0MQ community](http://zeromq.org/community)
* [zeromq.js examples in the node.js distribution](https://github.com/zeromq/zeromq.js/tree/master/examples) in zeromq GitHub repo
* [ZGuide examples in Node.JS](http://zguide.zeromq.org/js:_start)
* [ZMQ guide: Divide and Conquer](http://zguide.zeromq.org/page:all#toc14)
* [ZMQ Guide: The Load Balancing Pattern](http://zguide.zeromq.org/page:all#The-Load-Balancing-Pattern)

### Tutoriales

* [ZeroMQ + Node.js (or How to connect your backend)](https://pin3da.github.io/slides/zeromq_node.html#1) Manuel Pineda @pin3da_ pin3da at github
* [Trasparencias ZeroMQ with NodeJS](https://campusvirtual.ull.es/1819/pluginfile.php/29606/mod_folder/content/0/zeromqwithnodejs-130616181649-phpapp01.pdf?forcedownload=1) por Fernando D. Alonso
    * [krakatoa/node_zmq_workshop](https://github.com/krakatoa/node_zmq_workshop) Examples
    * [zguide.zeromq.org/](http://zguide.zeromq.org/page:all)
    * [api.zeromq.org/3-2:zmq-socket](http://api.zeromq.org/3-2:zmq-socket)
    * [api.zeromq.org/3-2:zmq-setsockopt](http://api.zeromq.org/3-2:zmq-setsockopt)

### Parallel Computing 

* [ZeroMQ for Massivelly Parallel Codes](https://campusvirtual.ull.es/1819/pluginfile.php/29606/mod_folder/content/0/oslo_zmq_for_parallel_computing.pdf?forcedownload=1) Anthony Scemama
* [ZeroMQ Tutoriasl: Butterfly](http://zeromq.org/tutorials:butterfly)
* [Easy cluster parallelization with ZeroMQ](http://mdup.fr/blog/easy-cluster-parallelization-wit)

## Retos para el Capítulo *Connectiong Robust  Microservices*

* [Retos para el Capítulo *Connectiong Robust  Microservices*](reto)

<!--
* ZeroMQ is the answer: https://youtu.be/v6AGUeZOVSU
    * [ZeroMQ is the answer](https://youtu.be/v6AGUeZOVSU)
-->
