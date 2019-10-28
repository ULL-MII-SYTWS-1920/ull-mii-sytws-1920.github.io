# Promises chaining

In frontend programming promises are often used for network requests. 

We’ll use the `fetch` method to load the information about the user from the remote server. It has a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:

```js
let promise = fetch(url);
```

This makes a network request to the url and returns a promise. 
The promise resolves with a `response` object when the remote server responds with headers, **but before the full response is downloaded**.

To read the full response, we should call a method `response.text()`: it returns a promise that **resolves when the full text downloaded from the remote server, with that text as a result**.