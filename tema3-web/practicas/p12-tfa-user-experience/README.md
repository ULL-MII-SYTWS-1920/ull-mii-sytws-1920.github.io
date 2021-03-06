# TFA: Creating a Beautiful User Experience (p12-tfa-user-experience)

* Lea el  [Chapter 8. Creating a Beautiful  User Experience]({{site.bull_permanente}}/15vbjs7/ullsfx4340000000247287) del libro de Jim Wilson. 2018 (Debes estar autenticado via PuntoQ BULL).
En este capítulo se construye una aplicación Web que actúa como cliente  del servicio web creado en el capítulo anterior. Se aplican las siguientes tecnologías:

- Webpack, para procesar nuestro código para el front-end y sus dependencias para encarpetarlos en un pequeño número de ficheros
- Bootstrap para las hojas de estilo
- TypeScript, un superconjunto de JavaScript que permite la especificación e inferencia de tipos
- Promesas y Await/Async
- Handlebars (para los Templates)

 y resuelva los problemas en las secciones 

## Extracting Text

El proyecto tal y como  está en el capítulo pone todo el CSS en una etiqueta  `<style>` 
al comienzo del fichero  `index.html`. Se pide poner el CSS en un fichero apartey cargarlo con una etiqueta `<link>`.

El paquete  npm [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin) puede ser de ayuda. 

## Deleting  Bundles

Se trata de añadir a la aplicación botones para suprimir Colecciones/bundles y el código para manejar la eliminación de los mismos

## Reto Opcional: Añadir autenticación

- Intente usar el módulo [passport](http://www.passportjs.org/) para la autenticación
- Sería interesante que intentara hacer su autenticación usando una [estrategia passport OAuth](http://www.passportjs.org/packages/), autenticando por ejemplo con [Twitter](http://www.passportjs.org/packages/passport-twitter/) o [GitHub](http://www.passportjs.org/packages/passport-github/)
- Si tiene problemas  a la hora de implantar autenticación con las [estrategias passport OAuth](http://www.passportjs.org/packages/) (problemas con el proveedor, etc.) 
o si se encuentra con ánimos y ganas de aprender, puede experimentar como alternativa con la estrategia [passport-local](http://www.passportjs.org/packages/passport-local/)
- Para hacer esta tarea  le será muy útil estudiar también el capítulo 9 [Fortifying Your Application](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781680505344/sec_using_request_to_fetch_html?sessionid=#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMzQyMjdfaHRtbCZxdWVyeT0=)
- Algunos proveedores OAuth quieren que proveas el dominio de tu aplicación. Hay varias soluciones que pueden funcionar o no
- Desplegar tu app en Heroku o similar
- Crear un falso dominio en  el fichero `/etc/hosts` apuntando a `localhost`:

```
$ cat /etc/hosts
...
127.0.0.1	localhost b4.example.com www.example.com test.example.com app.test local.foobar3000.com
...
```

- Otra posibilidad es usar lvh.me que apunta a  127.0.0.1.  Y puedes testear subdominios usando xxx.lvh.me sin que tengas que tocar  DNS o `/etc/hosts`.
  Mira en: 
  - [Testing subdomains in Ruby on Rails, with and without lvh.me](http://fionavoss.blog/2018/10/25/subdomains-in-rails/) por Fionna Voss 2018
  - [How does lvh.me (localtest.me, vcap.me) works?](https://superuser.com/questions/1289159/how-does-lvh-me-localtest-me-vcap-me-works?noredirect=1&lq=1)
  - [Why does the registered domain name “localtest.me” resolve to 127.0.0.1?](https://superuser.com/questions/1280827/why-does-the-registered-domain-name-localtest-me-resolve-to-127-0-0-1)
- [How to set up local subdomains for Node.js app](https://stackoverflow.com/questions/26564961/how-to-set-up-local-subdomains-for-node-js-app) Stackoverflow



## Recursos

* [Chapter 8. Creating a Beautiful  User Experience]({{site.bull_permanente}}/15vbjs7/ullsfx4340000000247287)
* [Repo con los recursos de referencia](https://github.com/ULL-MII-SYTWS-1920/books-shared)
* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way)
* [GitHub repo ULL-MII-CA-1819/tutorial-hello-node-typescript](https://github.com/ULL-MII-CA-1819/tutorial-hello-node-typescript)

