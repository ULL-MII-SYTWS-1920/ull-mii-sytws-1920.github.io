# Práctica: Commanding Databases (p10-t3-commanding-databases)

Lea el capítulo 6 [Commanding Databases](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html)
del libro
[Node.js 8 the Right Way](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781680505344)
y resuelva los problemas en la secciónes 
[Deleting and Index](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMjA1OThfaHRtbCZxdWVyeT0=) y 
[adding a Single Document](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMjA1OThfaHRtbCZxdWVyeT0=)

## Variantes: Commanding Databases with yargs (p10-t3-commanding-databases)

En vez de seguir el capítulo del libro al pie de la eltra, puede realizar cualquiera de las variantes que se mencionan a continuación o intentar combinaciones de ellas. 
Por ejemplo, puede usar `yargs` en vez de `commander` y usar el cliente de Elasticsearch `@elastic/elasticsearch` para Node en vez de `request`

### Variante 1: Reescriba el programa de línea de comandos `esclu` usando `yargs` en vez de `commander`

#### yargs

* [yargs en npm](https://www.npmjs.com/package/yargs)
* [yargs home page](https://yargs.js.org/)
* [Yargs' API](https://github.com/yargs/yargs/blob/master//docs/api.md)
* [Examples](https://github.com/yargs/yargs/blob/master//docs/examples.md)
* [Parsing Tricks](https://github.com/yargs/yargs/blob/master//docs/tricks.md)
  * [Stop the Parser](https://github.com/yargs/yargs/blob/master//docs/tricks.md#stop)
  * [Negating Boolean Arguments](https://github.com/yargs/yargs/blob/master//docs/tricks.md#negate)
  * [Numbers](https://github.com/yargs/yargs/blob/master//docs/tricks.md#numbers)
  * [Arrays](https://github.com/yargs/yargs/blob/master//docs/tricks.md#arrays)
  * [Objects](https://github.com/yargs/yargs/blob/master//docs/tricks.md#objects)
* [Advanced Topics](https://github.com/yargs/yargs/blob/master//docs/advanced.md)
  * [Composing Your App Using Commands](https://github.com/yargs/yargs/blob/master//docs/advanced.md#commands)
  * [Building Configurable CLI Apps](https://github.com/yargs/yargs/blob/master//docs/advanced.md#configuration)
  * [Customizing Yargs' Parser](https://github.com/yargs/yargs/blob/master//docs/advanced.md#customizing)

### Variante 2: Commanding Databases with node-fetch (p10-t3-commanding-databases)

Re-escriba `esclu` usando `node-fetch`en vez de `request`

#### node-fetch

* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [Motivation](https://github.com/bitinn/node-fetch/blob/master/README.md#motivation)
* [Features](https://github.com/bitinn/node-fetch/blob/master/README.md#features)
* [Difference from client-side fetch](https://github.com/bitinn/node-fetch/blob/master/README.md#difference-from-client-side-fetch)
* [Installation](https://github.com/bitinn/node-fetch/blob/master/README.md#installation)
* [Loading and configuring the module](https://github.com/bitinn/node-fetch/blob/master/README.md#loading-and-configuring-the-module)
* [Common Usage](https://github.com/bitinn/node-fetch/blob/master/README.md#common-usage)
    * [Plain text or HTML](https://github.com/bitinn/node-fetch/blob/master/README.md#plain-text-or-html)
    * [JSON](https://github.com/bitinn/node-fetch/blob/master/README.md#json)
    * [Simple Post](https://github.com/bitinn/node-fetch/blob/master/README.md#simple-post)
    * [Post with JSON](https://github.com/bitinn/node-fetch/blob/master/README.md#post-with-json)
    * [Post with form parameters](https://github.com/bitinn/node-fetch/blob/master/README.md#post-with-form-parameters)
    * [Handling exceptions](https://github.com/bitinn/node-fetch/blob/master/README.md#handling-exceptions)
    * [Handling client and server errors](https://github.com/bitinn/node-fetch/blob/master/README.md#handling-client-and-server-errors)
* [Advanced Usage](https://github.com/bitinn/node-fetch/blob/master/README.md#advanced-usage)
    * [Streams](https://github.com/bitinn/node-fetch/blob/master/README.md#streams)
    * [Buffer](https://github.com/bitinn/node-fetch/blob/master/README.md#buffer)
    * [Accessing Headers and other Meta data](https://github.com/bitinn/node-fetch/blob/master/README.md#accessing-headers-and-other-meta-data)
    * [Post data using a file stream](https://github.com/bitinn/node-fetch/blob/master/README.md#post-data-using-a-file-stream)
    * [Post with form-data (https://github.com/bitinn/node-fetch/blob/master/README.mddetect multipart)](https://github.com/bitinn/node-fetch/blob/master/README.md#post-with-form-data-detect-multipart)
    * [Request cancellation with AbortSignal](https://github.com/bitinn/node-fetch/blob/master/README.md#request-cancellation-with-abortsignal)
* [API](https://github.com/bitinn/node-fetch/blob/master/README.md#api)
    * [fetch(url[, options])](https://github.com/bitinn/node-fetch/blob/master/README.md#fetchurl-options)
    * [Options](https://github.com/bitinn/node-fetch/blob/master/README.md#options)
    * [Class: Request](https://github.com/bitinn/node-fetch/blob/master/README.md#class-request)
    * [Class: Response](https://github.com/bitinn/node-fetch/blob/master/README.md#class-response)
    * [Class: Headers](https://github.com/bitinn/node-fetch/blob/master/README.md#class-headers)
    * [Interface: Body](https://github.com/bitinn/node-fetch/blob/master/README.md#interface-body)
    * [Class: FetchError](https://github.com/bitinn/node-fetch/blob/master/README.md#class-fetcherror)

### Variante 3: Usar el cliente de Elasticsearch `@elastic/elasticsearch` para Node en vez de `request`

#### Elasticsearch Node.js client

* [Elasticsearch Node.js client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
*   [Introduction](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/introduction.html)
*   [Usage](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-usage.html)
*   [Client configuration](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-configuration.html)
*   [API Reference](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html)
*   [Breaking changes coming from the old client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/breaking-changes.html)
*   [Authentication](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html)
*   [Observability](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/observability.html)
*   [Creating a child client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/child-client.html)
*   [Extend the client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/extend-client.html)
*   [TypeScript support](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/typescript.html)
*   [Examples](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/examples.html)
    *   [asStream](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/as_stream_examples.html)
    *   [Bulk](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/bulk_examples.html)
    *   [Exists](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/exists_examples.html)
    *   [Get](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/get_examples.html)
    *   [Ignore](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/ignore_examples.html)
    *   [MSearch](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/msearch_examples.html)
    *   [Scroll](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/scroll_examples.html)
    *   [Search](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/search_examples.html)
    *   [Suggest](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/suggest_examples.html)
    *   [transport.request](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/transport_request_examples.html)
    *   [Typescript](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/typescript_examples.html)

## Reto

* [Retos](reto.html)

## Recursos

### Libro

* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* [Node.js 8 the Right Way]({{site.bull_permanente}}/15vbjs7/ullsfx4340000000247287). Jim Wilson. 2018 (Debes estar autenticado via PuntoQ BULL)
* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way) con las soluciones (privado)
* [Capítulo 6 "Commanding DataBases*](https://github.com/ULL-MII-CA-1819/resources/blob/master/node-js-the-right-way/chapter-6-commanding-databases-node-js-8-the-right-way.pdf)  Primera Edición

### Commander

* [Commander examples](https://github.com/ULL-MII-CA-1819/commander-examples)

### jq

* [jq manual](https://stedolan.github.io/jq/manual/)
* [JSON on the command line with jq](https://shapeshed.com/jq-json/)
* [jq simplified grammar extracted from the files parser.y and lexer.l in the jq sources](https://github.com/fadado/JBOL/blob/master/doc/JQ-language-grammar.md)

### Elasticsearch

* [A Practical Introduction to Elasticsearch By Ismael Hasan Romero](https://www.elastic.co/es/blog/a-practical-introduction-to-elasticsearch)
* [Node Js Elastic Search Tutorial Example](https://appdividend.com/2018/06/29/node-js-elastic-search-tutorial-example/)
* [Chrome Plugin ElasticSearch Head](https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm) es una herramienta mas simple que Kibana para acceder desde Chrome a ElasticSearch
  - ![/assets/images/chrom-elasticsearch-plugins.png](/assets/images/chrom-elasticsearch-plugins.png)
  - ![/assets/images/chrom-elasticsearch-plugins-quey.png](/assets/images/chrom-elasticsearch-plugins-quey.png)