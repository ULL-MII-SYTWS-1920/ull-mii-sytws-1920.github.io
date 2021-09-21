
## Variantes: Commanding Databases with yargs (p10-t3-commanding-databases)

En vez de seguir el capítulo del libro al pie de la letra, puede realizar cualquiera de las variantes que se mencionan a continuación o intentar combinaciones de ellas. 
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
