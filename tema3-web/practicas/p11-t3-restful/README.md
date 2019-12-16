# Práctica: Developing RESTful Web Services (p11-t3-restful)

Lea el  [Chapter 7. Developing RESTful Web Services]({{site.bull_permanente}}/15vbjs7/ullsfx4340000000247287) del libro de Jim Wilson. 2018 (Debes estar autenticado via PuntoQ BULL).

En este capítulo se crea - utilizando Express.js - un servicio Web que permite crear y administrar colecciones de libros que en el libro denominan *bundles*.

Lea el capítulo y  resuelva los problemas planteados en la secciones:

## Deleting a Bundle Entirely 

La tarea es añadir una entrada al fichero `web-services/b4/lib/bundle.js` para suprimir un bunlde o colección:

```js
 app.delete("/api/bundle/:id", async (req, res) => {
    /**
    * Delete a bundle entirely.
    * curl -X DELETE http://<host>:<port>/api/bundle/<id>
    */
    const options = {
      ...
    };
    try {
      ...
    } catch(esResErr) {
      ...
    }
  });
```

Inside the Express route handler callback function, you should do the following:

* Determine the bundle’s URL based on the es config object and the request parameters.
* Use await with a call to `rp()` to suspend until the deletion is completed.
* Wrap your await call in a `try/catch` block to handle any errors.

**Nota**: Usa el método `rp.delete()` para enviar un request `HTTP DELETE`a  Elasticsearch.

## Removing a Book from a Bundle

La tarea consiste en añadir en el fichero `web-services/b4/lib/bundle.js` una entrada para suprimir un libro de una determinada colección/bundle.

```js
  app.delete("/api/bundle/:id/book/:pgid", async (req, res) => {
    /**
    * Remove a book from a bundle.
    * curl -X DELETE http://<host>:<port>/api/bundle/<id>/book/<pgid>
    */
    const bundleUrl = `${url}/${req.params.id}`;
    try {
      ...
    } catch (esResErr) {
      res.status(esResErr.statusCode || 502).json(esResErr.error);
    }
  });
```

Inside the `try{}` block you’ll need to do a few things:

* Use `await` with `rp()` to retrieve the bundle object from Elasticsearch.
* Find the index of the book within the bundle.books list.
* Remove the book from the list. (Hint: use `Array.splice()`.)
* `PUT` the updated bundle object back into the Elasticsearch index, again
with `await` and `rp()`.

Note that if the bundle doesn’t contain the book whose removal is being requested, your handler should return a `409` Conflict HTTP status code. You can make this happen by throwing an object with a statusCode property set to `409` and an error object that contains information about what went wrong. This will be caught by the catch block and used to finish the Express response.
If you get stuck, [check out the code with the solutions](https://github.com/ULL-MII-SYTWS-1920/book-solution-nodejs-the-right-way).

## Recursos

#### Libro

* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* [Safari. Chapter 7. Developing RESTful Web Services](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781680505344/sec_using_request_to_fetch_html?sessionid=#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZjaHBfd2ViX3NlcnZpY2VzX2h0bWwmcXVlcnk9)
* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way)

#### References

* [http://nodejs.org/api/http.html](http://nodejs.org/api/http.html)
* [http://expressjs.com/](http://expressjs.com/)
* [http://www.sinatrarb.com/](http://www.sinatrarb.com/)
* [https://www.npmjs.com/package/nconf](https://www.npmjs.com/package/nconf)
* [https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-request-body.html ](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-request-body.html )
* [https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-suggesters.html](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-suggesters.html)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

