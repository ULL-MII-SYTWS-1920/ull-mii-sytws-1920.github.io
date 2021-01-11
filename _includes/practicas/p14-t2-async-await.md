# Descripción de la Práctica p14-t2-async-await

Read chapter [Async/Await](https://javascript.info/async-await) and make a report using the GitHub Classroom assigned repo. Solve the exercises.

## Exercise 1: MicroTask and MacroTask Queues

Answer this question before running the program.

What is the output of this program?

```js
{% include practicas/promise-job-queue-2.js %}
```

Explain the changes in the stack, the running environment, the macrotask queue and the microtask queue. Make pictures of the way the callbacks and handlers go and leave the queues. Take screenshots of them and upload them to the assignment repo

* Code at: `campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/promises/microtask-queue/promise-job-queue-2.js`

## Exercise 2: MicroTask and MacroTask Queues

The following example is taken from a stackoverflow question

* [setTimeout / Promise.resolve: Macrotask vs Microtask](https://stackoverflow.com/questions/51793906/settimeout-promise-resolve-macrotask-vs-microtask)

Don't look at the debate yet.
Also, try to answer this question before running the code.

What is the output of this program?

```js
// See https://stackoverflow.com/questions/51793906/settimeout-promise-resolve-macrotask-vs-microtask
for (let i = 0; i < 2; i++) {
	setTimeout(() => {
		console.log("Timeout ", i);
		Promise.resolve().then(() => {
			console.log("Promise 1 ", i);
		}).then(() => {
			console.log("Promise 2 ", i);
		});
	})
}
```

Explain the changes in the stack, the running environment, the macrotask queue and the microtask queue. Make pictures of the way the callbacks and handlers go and leave the queues. Take screenshots of them and upload them to the assignment repo

* Solution at: `tema2-async/event-loop/exercises/promises/async-await/stackoverflow-promise-resolve-and-queues.js`

## Rewrite a `fetch` using async/await instead of promises

Rewrite this example code from the [Javascript.info book](https://javascript.info/promise-chaining#bigger-example-fetch) using `async/await` instead of `.then/catch`:

```js
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json').catch(console.log); // Error: 404
```

* Solution at `campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/promises/async-await/solution-2-rewrite-loadjson-using-async-await.html`

## Simplify a more complex example with async/await

Below you can find another exercise from the [book javascript.info](https://javascript.info/promise-chaining#bigger-example-fetch). 

Rewrite it using `async/await` instead of `.then/catch` and get rid of the recursion in favour of a loop in `demoGithubUser`: with `async/await`.

```js 
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
```

* See Section [Custom errors, extending Error](https://javascript.info/custom-errors). It is worth to read the [full chapter Error Handling](https://javascript.info/error-handling)
* See [The Error Class at MDN: The constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#constructor)
* The GitHub API doc for the end-point to get the public info for an user is here [GitHub API REST Docs: Get a User](https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user). Here are several examples of how to get the info:

  ```
  gh api /users/crguezl | jq .name
  ```

  or

   ```
   curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/users/crguezl
  ```

  or using the `@octokit/core`module:

  ```js
  const { Octokit } = require("@octokit/core");

  const octokit = new Octokit({ 
    // auth: `personal-access-token123` 
  });

  async function getUsername(name) {
    return await octokit.request('GET /users/{username}', {
      username: name
    })
  }

  getUsername('crguezl').then(r => console.log(r.data.name));
```
* Solution at `/campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/promises/async-await/solution-more-complex-example.html`

## Call async from non-async

Here is another exercise from the [JavaScript.Info book](https://javascript.info/async-await#call-async-from-non-async). As the book says, it is a task that solves a quite common for developers new to async/await.

We have a "regular" function called `f`. How can you call the `async` function `wait()` and use its result inside of `f`?

Give at least two solutions.

```js
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}
```

* Solution at `tema2-async/event-loop/exercises/promises/async-await/solution-call-async-from-nonasync.html`

## See

* [JavaScript.Info book: Bigger example: fetch](https://javascript.info/promise-chaining#bigger-example-fetch)
* [Custom errors, extending Error](https://javascript.info/custom-errors)
* For the solutions:
  * `campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/promises/microtask-queue`
  * `campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/promises/async-await`

