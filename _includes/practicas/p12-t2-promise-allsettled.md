# Descripción de la Práctica p10-t2-promise-all

`Promise.all` rejects as a whole if any promise rejects. That’s good for *all or nothing* cases, when we need all results successful to proceed:

```js
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render method needs results of all fetches
```

`Promise.allSettled` just waits for all promises to settle, regardless of the result. The resulting array has:


* `{status:"fulfilled", value:result}` for successful responses,
* `{status:"rejected", reason:error}` for errors.

For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

Let’s use `Promise.allSettled`:

```js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

The results in the line (*) above will be:

```js
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
```

So for each promise we get its status and value/error.

**Write a function `PromiseAllSettled` that works as `Promise.allSettled`**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Promise.allSettled</title>
</head>

<body>
    <h1>Open the Developer tools</h1>
    <script>
        // ...
        const PromiseAllSettled = function (promises) {
         // ...
        };

        let urls = [
            'https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://no-such-url'
        ];

        PromiseAllSettled(urls.map(url => fetch(url)))
            .then(results => { // (*)
                results.forEach((result, num) => {
                    if (result.status == "fulfilled") {
                        console.log(`${urls[num]}: ${result.value.status}`);
                    }
                    if (result.status == "rejected") {
                        console.log(`Uhm! "${urls[num]}" not reachable:\n${result.reason}`);
                    }
                });
            });
    </script>
</body>

</html>
```
## See

`tema2-async/event-loop/exercises/promises/promise-allsettled/`