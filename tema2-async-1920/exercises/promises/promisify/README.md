# Promisification 

Promisification it’s the conversion of a function that accepts a callback into a function returning a promise.
Write a function `promisify(f)` that receives a function `f`that accepts a callback `f( ...args, callback)` and 
returns a function that returns the equivalent `Promise` object

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Promisify</title>
</head>

<body>
    <script>
        function promisify(f) {
          // Fill the code
        };

        function loadScript(src, callback) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => callback(null, script);
            script.onerror = () => callback(new Error(`Script load error for ${src}`));

            document.head.append(script);
        }

        let loadScriptPromise = promisify(loadScript);

        loadScriptPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js").then(
            (r) => alert("script loaded")
        ).catch(alert);

    </script>
</body>

</html>
```

See [https://javascript.info/promisify](https://javascript.info/promisify)
