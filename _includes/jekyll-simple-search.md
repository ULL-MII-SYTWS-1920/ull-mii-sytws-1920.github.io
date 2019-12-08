## Adding a Simple Search to our Jekyll Site

El ejercicio consiste en que añada la capacidad de búsqueda al sitio asociado a alguna de las prácticas, por ejemplo a [p8-t3-jekyll-netlify](/tema3-web/practicas/p8-t3-jekyll-netlify/).

Estos son algunos requisitos:

* Queremos que busque en todos los ficheros, no solo los  de los posts sino también los de las páginas
* Que admita expresiones regulares
* Queremos que los resultados vayan apareciendo conforme tecleamos
* Se mostrará una lista de enlaces a los ficheros que contienen la expresión buscada y un resumen de las primeros caracteres del fichero

### ¿Como hacerlo?

1. Since Jekyll has no server side execution, we have to rely on storing all the required content in a single file and search our keyword from that file.
2. We will be creating a JSON file in which we will store  `title`,  `url`, `content`, `excerpt`, etc., <u>at building time</u>

    ```
    $ bundle exec jekyll build
    $ head -n 30 _site/assets/src/search.json 
    ```

    ```json
    [
        {
            "title": "Clase del Lunes 30/09/2019",
            "excerpt": "Clase del Lunes 30/09/2019\n\n",         ⇐ Resumen
            "content": "Clase del Lunes 30/09/2019\n\n\n  ...",  ⇐ Contenido del fichero
            "url": "/clases/2019/09/30/leccion.html"
        },
        ...
    ]
    ```

### Liquid template search.json to generate at build time the _site/assets/src/search.json

Para lograrlo usaremos este template Liquid: [search.json](https://raw.githubusercontent.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/master/assets/src/search.json?token=AAIW6GWXQOTDJ7VYDKDGBWK55YN74) (protected)

```
- - -
layout: null
sitemap: false
- - -

{ % capture json % }
[
  { % assign collections = site.collections | where_exp:'collection','collection.output != false' %}
  { % for collection in collections %}
    { % assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}
    { % for doc in docs %}
      {
        "title": { { doc.title | jsonify }},
        "excerpt": { { doc.excerpt | markdownify | strip_html | jsonify }},
        "content": { { doc.content | markdownify | strip_html | jsonify }},
        "url": { { site.baseurl | append: doc.url | jsonify }}
      },
    { % endfor %}
  { % endfor %}
  { % assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.title != null' %}
  { % for page in pages % }
  {
    "title": { { page.title | jsonify }},
    "excerpt": { { page.excerpt | markdownify | strip_html | jsonify }},
    "content": { { page.content | markdownify | strip_html | jsonify }},
    "url": { { site.baseurl | append: page.url | jsonify }}
  }{ % unless forloop.last %},{ % endunless %}
  { % endfor %}
]
{ % endcapture %}

{ { json | lstrip }}

```

* `layout: null`: To disable layout in Jekyll.
* `sitemap: false`: 
  - A Sitemap is an XML file that lists the URLs for a site. This allows search engines to crawl the site more efficiently and to find URLs that may be isolated from rest of the site's content. The [sitemaps protocol is a URL inclusion protocol](https://www.sitemaps.org/protocol.html) and complements `robots.txt`, a URL exclusion protocol. We can use the  front-matter to set the `sitemap` property to `false`
  - [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) is a Jekyll plugin to silently generate a sitemaps.org compliant sitemap for your Jekyll site 
* Liquid: `{ % capture json % } ... { % endcapture %}` [Captures the string inside of the opening and closing tags and assigns it to a variable. Variables that you create using capture are stored as strings.](https://help.shopify.com/en/themes/liquid/tags/variable-tags#capture)
* `{ { json | lstrip }}`: 
  - Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag `{ { } }` and are denoted by a pipe character `|`.
  - [lstrip: Removes all whitespace (tabs, spaces, and newlines) from the left side of a string. It does not affect spaces between words.](https://shopify.github.io/liquid/filters/lstrip/)
* `{ % assign collections = site.collections ...`
  - `site.collections`: Collections are also available under `site.collections`. Posts are considered a collections by Jekyll.
  - ... `where_exp:'collection','collection.output != false'`
    - `site.collections` is an array. With `where_exp` we select all the objects in the array with the elements for which the attribute `collection` has its `output` attribute to `true`.
    - The `output` attribute of a collection controls whether the collection's documents will be output as individual files.
* [iteration in Liquid](https://shopify.github.io/liquid/tags/iteration/)
* `site.html_pages`: A subset of `site.pages` listing those which end in `.html`.

#### Entendiendo la línea `"content": { { page.content | markdownify | strip_html | jsonify }},`

* `page.content` el contenido de la página todavia sin renderizar (se supone que es fundamentalmente markdown, pero puede contener yml en el front-matter, html, scripts, liquid, etc.)
* `markdownify`: Convert a Markdown-formatted string into HTML.
* [strip_html](https://shopify.github.io/liquid/filters/strip_html/): Removes any HTML tags from a string.
* `jsonify`: If the data is an array or hash you can use the jsonify filter to convert it to JSON.

Por ejemplo, supongamos que tenemos estas definiciones en el front-matter de nuestra página:

```yml
chuchu: "Cadena **negritas** e *italicas*"
html: "<h1>hello</h1> <b>world</b>"
colors:
  - red
  - blue
  - green
---
```

y que en el contenido de nuestra página tenemos algo así:

```
Compara < script>{ { page.chuchu }} </script> con su markdownify: < script>{ { page.chuchu | markdownify }}</script>

Compara < script> { { page.colors}} </script> con su jsonify: < script>{ { page.colors | jsonify }} </script>

Compara < script>{ {page.html}}</script> con su `strip_html` < script> { { page.html | strip_html }} </script>
```

Esta es la salida que produce jekyll 4.0.0:

```
<p>Compara < script>Cadena **negritas** e *italicas* </script> con su markdownify: < script>&lt;p&gt;Cadena <strong>negritas</strong> e <em>italicas</em>&lt;/p&gt;
</script></p>

<p>Compara < script> redbluegreen </script> con su jsonify: < script>["red","blue","green"] </script></p>

<p>Compara < script>&lt;h1&gt;hello&lt;/h1&gt; <b>world</b></script> con su <code class="highlighter-rouge">strip_html</code> < script> hello world </script></p>
```

La idea general es que necesitamos suprimir los tags, tanto yml, markdown, HTML, etc. para que no confundan al método de busca. 
Por eso convertimos el markdown a HTML y después suprimimos los tags HTML. También convertimos el yml a JSON.


### La página de Búsqueda: search.md

* [search.md](https://raw.githubusercontent.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/master/search.md?token=AAIW6GSTWVSQTT272LOFILK55YPFU) (protected)

**Fichero `search.md`**:

La idea es que vamos a escribir una clase `JekyllSearch` que implementa la búsqueda.
Debe disponer  de un constructor al que se le pasan cuatro argumentos:

1. La ruta donde esta disponible el fichero .json generado durante la construcción (`jekyll build`)
2. El `id` del objeto del DOM en la página en la que está el tag `input` de la búsqueda
3. El `id`del objeto del DOM en el que se deben volcar los resultados
4. La `url` del lugar en el que está el deployment (pudiera ser que el site en el que queremos buscar fuera una subcarpeta de todo el site)

```js
const search = new JekyllSearch(
    '/assets/src/search.json',
    '#search',
    '#list',
    ''
  );
  search.init(); 
```

Los objetos `JekyllSearch` deben disponer de un método `init` que realiza la búsqueda especificada en el elemento del DOM `#search` y añade los resultados en en el elemento del DOM `#list`



```html
- - -
layout: error 
permalink: /search/
title: Search
- - -

{ % capture initSearch % }

<h1>Search</h1>

<form id="search-form" action="">
  <label class="label" for="search">Search term (accepts a regex):</label>
  <br/>
  <input class="input" id="search" type="text" name="search" autofocus placeholder="e.g. Promise" autocomplete="off">
  
  <ul class="list  list--results" id="list">
  </ul>
</form>

< script type="text/javascript" src="/assets/src/fetch.js"></script>
< script type="text/javascript" src="/assets/src/search.js"></script>


< script type="text/javascript">

  const search = new JekyllSearch(
    '{ {site.url}  }/assets/src/search.json',
    '#search',
    '#list',
    '{ {site.url}  }'
  );
  search.init(); 
  
</script>

<noscript>Please enable JavaScript to use the search form.</noscript>

{ % endcapture % }

{ { initSearch | lstrip } }
```

* `autocomplete="off"`
  - En algunos casos, el navegador continuará sugiriendo valores de autocompletado incluso si el atributo autocompletar está desactivado. Este comportamiento inesperado puede resultar bastante confuso para los desarrolladores. El truco para realmente no aplicar el autocompletado es asignar un valor no válido al atributo, por ejemplo:

  ```
  autocomplete="nope"
  ```
  Dado que este valor no es válido para el atributo autocompletar, el navegador no tiene forma de reconocerlo y deja de intentar autocompletarlo.

* Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag `{ { } }` and are denoted by a pipe character `|`.
  - [lstrip Removes all whitespace (tabs, spaces, and newlines) from the left side of a string. It does not affect spaces between words.](https://shopify.github.io/liquid/filters/lstrip/)

* [Clearing Up Confusion Around baseurl](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/). About `site.url` vs `site.baseurl`

![https://byparker.com/img/what-is-a-baseurl.jpg](/assets/images/what-is-a-baseurl.jpg)

### La clase JekyllSearch: Fichero search.js

```js
class JekyllSearch {
  constructor(dataSource, searchField, resultsList, siteURL) {
    this.dataSource = dataSource                           // ruta al fichero json
    this.searchField = document.querySelector(searchField) // DOM el. del input
    this.resultsList = document.querySelector(resultsList) // DOM el. para el output
    this.siteURL = siteURL                                 // folder

    this.data = '';
  }

  fetchedData() {
    return fetch(this.dataSource)
      .then(blob => blob.json())
  }

  async findResults() {
    this.data = await this.fetchedData()
    const regex = new RegExp(this.searchField.value, 'gi')
    return this.data.filter(item => {
      return item.title.match(regex) || item.content.match(regex)
    })
  }

  async displayResults() {
    const results = await this.findResults()
    const html = results.map(item => {
      return `
        <li class="result">
            <article class="result__article  article">
                <h4>
                  <a href="${this.siteURL + item.url}">${item.title}</a>
                </h4>
                <p>${item.excerpt}</p>
            </article>
        </li>`
    }).join('')
    if ((results.length == 0) || (this.searchField.value == '')) {
      this.resultsList.innerHTML = `<p>Sorry, nothing was found</p>`
    } else {
      this.resultsList.innerHTML = html
    }
  }

  // https://stackoverflow.com/questions/43431550/async-await-class-constructor
  init() {
    const url = new URL(document.location)
    if (url.searchParams.get("search")) {
      this.searchField.value = url.searchParams.get("search") // Update the attribute
      this.displayResults()
    }
    this.searchField.addEventListener('keyup', () => {
      this.displayResults()
      // So that when going back in the browser we keep the search
      url.searchParams.set("search", this.searchField.value)
      window.history.pushState('', '', url.href)
    })
    
    // to not send the form each time <enter> is pressed
    this.searchField.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        event.preventDefault()
      }
    })
  }
}
```

#### url.searchParams

If the URL of your page is `https://example.com/?name=Jonathan%20Smith&age=18` you could parse out the `name` and `age` parameters using:

```js
let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

#### Live collections

All methods `getElementsBy*` return a live collection. 
Such collections always reflect the current state of the document and *auto-update* when it changes. 
In contrast, `querySelectorAll` returns a static collection. 
It’s like a fixed array of elements.

```js
constructor(dataSource, searchField, resultsList, siteURL) {
    this.dataSource = dataSource                           // ruta al fichero json
    this.searchField = document.querySelector(searchField) // DOM el. del input
    this.resultsList = document.querySelector(resultsList) // DOM el. para el output
    this.siteURL = siteURL                                 // folder

    this.data = '';
  }
```

#### window.history.pushState

The  `window` object provides access to the browser's session history through the `history` object. 
The `history.pushState(state, title, url)` method adds a state to the browser's session history stack.

```js
   ... // inside init
   this.searchField.addEventListener('keyup', () => {
      this.displayResults()
      // So that when going back in the browser we keep the search
      url.searchParams.set("search", this.searchField.value)
      window.history.pushState('', '', url.href)
    })
```

### Caching

The resources downloaded through `fetch()`, similar to other resources that the browser downloads, are subject to the [HTTP cache](https://developer.mozilla.org/en/docs/Web/HTTP/Caching_FAQ).  

```js
fetchedData() {
    return fetch(this.dataSource).then(blob => blob.json())
  }
```

This is usually fine, since it means that **if your browser has a cached copy of the response to the HTTP request, it can use the cached copy instead of wasting time and bandwidth re-downloading from a remote server**. 

The `search.json` is not going to change until the next `push`


### Fetch Polyfill

<dl>
<dt>Polyfill</dt>
<dd>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill">A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. The polyfill uses non-standard features in a certain browser to give JavaScript a standards-complaint way to access the feature</a>
</dd>
</dl>

* El código del polyfill que he usado: [assets/src/fetch.js](https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/blob/master/assets/src/fetch.js)
* Para mas información podemos leer este blog: [Polyfill para Fetch](https://desarrolloweb.com/articulos/polyfill-fetch.html)
  - [whatwg-fetch: polyfill de Fetch que ha creado el equipo de Github](https://github.com/github/fetch) 
  - Para agregar este polyfill a nuestro proyecto podemos descargarnos su archivo js desde github, 
  - pero también podríamos instalarlo usando cualquiera de los gestores de dependencias más habituales: 
  - `npm install whatwg-fetch --save` 
  - o bien: 
  - `bower install fetch --save`

### Estructura del sitio

Esta imagen muestra los ficheros implicados en este ejercicio dentro de 
la estructura del sitio de estos apuntes:

```
$ tree -I _site
.
├── 404.md
├── assets
│   ├── css
│   │   └── style.scss
│   ├── images
│   │   ├── event-emitter-methods.png
│   │   └── ,,,
│   └── src
│       ├── fetch.js          ⇐ Polyfill for fetch
│       ├── search.js         ⇐ Librería con la Clase JekyllSearch que implementa el Código de búsqueda
│       └── search.json       ⇐ Plantilla Liquid para generar el fichero JSON 
├── search.md                 ⇐ Página de la búsqueda. Formulario y script de arranque 
├── clases.md
├── _config.yml               ⇐ Fichero de configuración de Jekyll
├── degree.md
├── favicon.ico
├── Gemfile
├── Gemfile.lock
├── _includes                 ⇐ The include tag allows to include the content of files stored here
│   ├── navigation-bar.html
│   └── ...
├── _layouts                  ⇐ templates that wrap around your content
│   ├── default.html
│   ├── error.html
│   └── post.html
├── _posts                    ⇐ File names must follow YEAR-MONTH-DAY-title.MARKUP and  must begin with front matter 
│   ├── ...
│   └── 2019-12-02-leccion.md
├── _practicas                ⇐ Folder for the collection "practicas" (list of published "practicas") 
│   ├── ...
│   └── p9-t3-transfoming-data.md 
├── practicas.md              ⇐ { % for practica in site.practicas % } ... { % endfor % }
├── Rakefile                  ⇐ For tasks
├── README.md
├── references.md
├── resources.md
├── tema0-presentacion        ⇐  Pages folders 
│   ├── README.md
│   └── ...
├── tema ...
├── tfa
│   └── README.md
└── timetables.md

58 directories, 219 files
```


### Referencias

* [Sección Jekyll en estos apuntes]({{site.baseurl}}/tema3-web/jekyll.html)
* [Liquid](https://shopify.github.io/liquid/)
* [A GitHub Pages compatible **Table of Contents** generator without a plugin or JavaScript ](https://github.com/allejo/jekyll-toc) The code is here: [toc.html](https://github.com/allejo/jekyll-toc/blob/master/_includes/toc.html)
* [CloudCannon](https://app.cloudcannon.com/) is cloud content management system and hosting provider for Jekyll websites
* [documentation-theme-jekyll](https://github.com/ULL-MII-SYTWS-1920/documentation-theme-jekyll) Un tema muy completo. Tiene de todo
* [Using HTMLProofer From Ruby and Travis](https://github.com/gjtorikian/html-proofer/wiki/Using-HTMLProofer-From-Ruby-and-Travis). Para testear tus páginas: links, imágenes, etc.

