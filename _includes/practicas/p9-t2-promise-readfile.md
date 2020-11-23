# Descripción de la Práctica p9-t2-promise-readfile

Escriba un programa `index.js` que contenga una versión con promesas  `readFilePromise` de la función [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) que pueda ser usada así:

```js
readFilePromise(programName, 'utf8')
  .then(data => console.log('Data:\n'+data))
  .catch(error => console.log('Error:\n'+error));
```

