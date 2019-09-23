## Capítulo 4: RPC

In gRPC a client application can directly call methods on a server application on a different machine as if it was a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. 

On the server side, the server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.

gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own desktop - and can be written in any of gRPC’s supported languages. 
In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily build Google functionality into your applications.

* [Intro to gRPC: A Modern Toolkit for Microservice Communication](https://youtu.be/RoXT_Rkg8LA) YouTube 
* [What is gRPC?](https://grpc.io/docs/guides/)
  - [gRPC Documentation](https://grpc.io/docs/guides/)
