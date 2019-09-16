# Challenge 1: Content negotiation


One of the things that HTTP can do, is called *content negotiation*. 

The `Accept` header for a request can be used to tell the server what type of document the client would like to get. 

Some servers ignore this header, but when a server knows of various ways to encode a resource, 
it can look at this header and send the one that the client prefers.

The URL [http://eloquentjavascript.net/author](http://eloquentjavascript.net/author) is configured to respond with either 

- plaintext,
- HTML, or
- JSON,

depending on what the client asks for. 

These formats are identified by the standardized media types `text/plain`, `text/html`, and `application/json`.

**Write a Node.js client that send requests to fetch all three formats of this resource**:

```js
["text/plain", "text/html", "application/json"].forEach(function(type) {
  http.request({
    hostname: "eloquentjavascript.net",
    path: "/author", 
    headers: {Accept: type} 
  },  ...
```

Use Node’s [http.request](https://nodejs.org/api/http.html#http_http_request_options_callback) function. 
The headers of a request can be given as an object, in the `headers` property of `http.request`’s first argument.

```js
http.request({
    hostname: "eloquentjavascript.net",
    path: "/author", 
    headers: {Accept: type} 
  }
```

Write out the content of the responses to each request.

Don’t forget to call the `end` method on the object returned by `http.request` in order to actually fire off the request.

```js
["text/plain", "text/html", "application/json"].forEach(function(type) {
  http.request({
    hostname: "eloquentjavascript.net",
    path: "/author", 
    headers: {Accept: type} 
  }, function(response) {
    ...
  }).end();
```

The `response` object passed to `http.request`’s callback is a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams).

This means that you must collect the chunks to  get the whole response body from it. 

The following utility function reads a whole stream and calls a callback function with the result, 
using the usual pattern of passing any errors it encounters as the first argument to the callback:

```js
function readStreamAsString(stream, callback) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    callback(null, data);
  });
  stream.on("error", function(error) {
    callback(error);
  });
}
```

Make use this of this utility function inside your request callback  to read  the response and dump it
to the console.

```
[~/EJS/chapter20-node-js/chapter20-node-js-crguezl/exercises/content-negotiation-again(master)]$ ls -l
total 8
-rw-r--r--  1 casiano  staff  817 25 feb 13:10 index.js
[~/EJS/chapter20-node-js/chapter20-node-js-crguezl/exercises/content-negotiation-again(master)]$ pwd -P
/Users/casiano/local/src/javascript/eloquent-javascript/chapter20-node-js/chapter20-node-js-crguezl/exercises/content-negotiation-again
```


# Reto 2: Fixing a leak

For easy remote access to some files, I might get into the habit
of having the file server defined in this chapter running on my
machine, in the `/home/marijn/public` directory. Then, one day, I
find that someone has gained access to all the passwords I stored
in my browser.

## What happened?

If it isn’t clear to you yet, think back to the urlToPath function, defined like this:

```js
function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  return "." + decodeURIComponent(path);
}
```
Now consider the fact that paths passed to the `fs` functions can
be relative—they may contain `../` to go up a directory. What happens
when a client sends requests to URLs like the ones shown here?

```html
http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data
http://myhostname:8000/../.ssh/id_dsa
http://myhostname:8000/../../../etc/passwd
```

1. Change `urlToPath` to fix this problem. Take into account the fact
that Node on Windows allows both forward slashes and backslashes
to separate directories.
2. It is enough to strip out all occurrences of two dots that have a
slash, a backslash, or the end of the string on both sides. 
3.  Using the `replace` method with a regular expression is the easiest way to
do this. 
4. But since such instances may overlap (as in `/../../f`),
you may have to apply replace multiple times, until the string no
longer changes. 
5. Also make sure you do the replace after decoding
the string, or it would be possible to foil the check by encoding
a dot or a slash.

Another potentially worrying case is when paths start with a slash,
which are interpreted as absolute paths. 

But because `urlToPath` puts
a dot character in front of the path, it is impossible to create
requests that result in such a path. 

Multiple slashes in a row,
inside the path, are odd but will be treated as a single slash by
the file system.

Here is a [Solution](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter20-node-js)
