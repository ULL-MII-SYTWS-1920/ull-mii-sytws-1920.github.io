---
permalink: /tema2-async/event-loop/exercises/promises/load-script/README.html
---
# loadScript

Here’s a callback-based function that loads a script from a specified `src` and adds it 
to the current document:

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

Rewrite the `loadScript` function using promises.
Example of usage:

```js
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));
```

## Solution

* [Run the solution](index.html)
* [Solution](solution.html)
