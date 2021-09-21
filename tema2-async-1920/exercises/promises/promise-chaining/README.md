# Promises chaining

In frontend programming promises are often used for network requests. 

We’ll use the `fetch` method to load the information about the user from the remote server. It has a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:

```js
let promise = fetch(url);
```

This makes a network request to the url and returns a promise. 
The promise resolves with a `response` object when the remote server responds with headers, **but before the full response is downloaded**.

To read the full response, we should call a method `response.text()`: it returns a promise that **resolves when the full text downloaded from the remote server, with that text as a result**.

* See code deployed: [simple-request.html](simple-request.html)

```js
<!DOCTYPE html><script>
'use strict';
fetch('https://javascript.info/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", isAdmin: true}
  });
</script>
```
Once we got the loaded user, we can make one more request to GitHub, load the user profile and show the avatar:

* See code deployed: [github.html](github.html)

```js
<!DOCTYPE html><script>
'use strict';
fetch('https://javascript.info/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
</script>
```

**How can we do something after the avatar has finished showing and gets removed?**

HINT: To make the chain extendable, we need to return a promise that resolves when the avatar finishes showing.

* [solution](solution.html)