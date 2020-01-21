#  Cross-Origin Resource Sharing CORS 

**CORS** is a security mechanism that allows a web page from one domain or **Origin** 
to access a resource with a different domain (a _cross-domain request_). 

CORS is a relaxation of the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) implemented in modern browsers. Without features like CORS, websites are restricted to accessing resources from the same origin through what is known as same-origin policy.

## Origin

<em>Origin</em> includes the combination of <strong>protocol, domain,</strong> and <strong>port.</strong> This means 

- <em>https://</em><strong><em>api</em></strong><em>.mydomain.com</em> and 
- <em>https://mydomain.com</em> 

are actually different origins and thus impacted by same-origin policy.

In a similar way, 
- <em>http://localhost:</em><strong><em>9000</em></strong> and 
- <em>http://localhost:</em><strong><em>8080</em></strong> 

are also different origins. The **path** or **query** parameters  are ignored when considering the origin.

## The reason for Cross-Origin Resource Sharing 

You, like many websites, may use cookies to keep track of authentication or session info. Those cookies are bounded to a certain domain when they are created. On every HTTP call to that domain, **the browser will attach the cookies that were created for that domain**. This is on _every_ HTTP call, which could be for static images, HTML pages, or even AJAX calls.

This means when you log into <em>https://examplebank.com</em>, a cookie is stored for <em>https://examplebank.com</em>. If that bank is a single-page React app, they may have created a REST API at <em>https://examplebank.com/api</em> for the SPA to communicate via AJAX.

1. Let’s say you browse to a malicious website  <em>https://evilunicorns.com</em> while logged into <em>https://examplebank.com</em>. 
2. Without same-origin policy, that hacker website could make **authenticated** malicious AJAX calls to <em>https://examplebank.com/api</em> to <code>POST /withdraw</code> even though the hacker website doesn’t have direct access to the bank’s cookies.

This is due to the browser behavior of automatically attaching any cookies bounded to <em>https://examplebank.com</em> for any HTTP calls to that domain, including AJAX calls from <em>https://evilunicorns.com</em> to <em>https://examplebank.com</em>. 

By restricting HTTP calls to only ones to the same origin (i.e. the browser tab’s domain), same-origin policy closes some hacker backdoors such as around <a href="https://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank" rel="noopener noreferrer">Cross-Site Request Forgery (CSRF)</a> (Although not all. Mechanisms like CSRF tokens are still necessary).

## Ejemplo

Para entender mejor esta sección 
**Véase la rama/branch: `10-crguezl-master-cors-01`** del repositorio 
[ULL-MII-SYTWS-1920/food-lookup-demo](https://github.com/ULL-MII-SYTWS-1920/food-lookup-demo/tree/10-crguezl-master-cors-01)

Si en `Client-js`cambiamos el `fetch` para solicitar al server en 3001:


```js
* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`http://localhost:3001/api/food?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}
```

Obtenemos una respuesta:

```
Access to fetch at 'http://localhost:3001/api/food?q=r' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

localhost/:1 Uncaught (in promise) TypeError: Failed to fetch
```
## The CORS npm module

If you want to avoid the blocking, the server that hosts the resource needs to have CORS enabled. 
What you can do on the client side (and probably what you are thinking of) is set the mode of `fetch` to CORS
(although this is the default setting I believe):

```js
fetch(request, {mode: 'cors'});
```

The `mode` option specifies the mode you want to use for the request, e.g., `cors`, `no-cors`, or `same-origin`.
- With `same-origin` you can perform requests only to your `origin`, otherwise the request will result in an error.
- With `no-cors`, you can perform requests to other origins, even if they don't set the required CORS headers, but you'll get an **opaque** response. An **opaque** response is for a request made for a resource on a different origin that doesn't return CORS headers. With an opaque response we won't be able to read the data returned or view the status of the request, meaning we can't check if the request was successful or not.

However this still requires the server to enable CORS as well, and allow your domain to request the resource.

In Express we can use the module [cors](https://expressjs.com/en/resources/middleware/cors.html)

```
$ npm install cors
```

If inside the app we use this middleware:

```js
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

To enable CORS for a Single Route we do:

```js
var express = require('express')
var cors = require('cors')
var app = express()

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

We can configure CORS:

```js
var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

The `origin`  option used in this example configures the **Access-Control-Allow-Origin** CORS header. 
Possible values:

*   `Boolean` - set `origin` to `true` to reflect the [request origin](http://tools.ietf.org/html/draft-abarth-origin-09), as defined by `req.header('Origin')`, or set it to `false` to disable CORS.
*   `String` - set `origin` to a specific origin. For example if you set it to `"http://example.com"` only requests from “http://example.com” will be allowed.
*   `RegExp` - set `origin` to a regular expression pattern which will be used to test the request origin. If it’s a match, the request origin will be reflected. For example the pattern `/example\.com$/` will reflect any request that is coming from an origin ending with “example.com”.
*   `Array` - set `origin` to an array of valid origins. Each origin can be a `String` or a `RegExp`. For example `["http://example1.com", /\.example2\.com$/]` will accept any request from “http://example1.com” or from a subdomain of “example2.com”.
*   `Function` - set `origin` to a function implementing some custom logic. The function takes the request origin as the first parameter and a callback (which expects the signature `err [object], allow [bool]`) as the second.

## CORS references

* [Using CORS in Express](https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b) by Alexis Hevia
  * [Repo with examples of use](https://github.com/alexishevia/blogExamples/tree/cors)
* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
  - [Referrer Policies](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies)
  - [W3C](https://www.w3.org/TR/referrer-policy/)
* [cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.](https://expressjs.com/en/resources/middleware/cors.html)