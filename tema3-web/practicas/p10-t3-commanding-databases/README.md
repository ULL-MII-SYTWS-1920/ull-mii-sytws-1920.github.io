# Práctica: Commanding Databases (p10-t3-commanding-databases)

Lea el capítulo 6 [Commanding Databases](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html)
del libro
[Node.js 8 the Right Way](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/9781680505344)
y resuelva los problemas en la secciónes 
[Deleting and Index](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMjA1OThfaHRtbCZxdWVyeT0=) y 
[adding a Single Document](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMjA1OThfaHRtbCZxdWVyeT0=)

## Variantes: Commanding Databases with yargs (p10-t3-commanding-databases)

En vez de seguir el capítulo del libro al pie de la letra, puede realizar cualquiera de las variantes que se mencionan a continuación o intentar combinaciones de ellas. 

Por ejemplo, puede usar `yargs` en vez de `commander` y usar el cliente de Elasticsearch `@elastic/elasticsearch` para Node en vez de `request`

* [Descripción de las variantes](variantes)

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