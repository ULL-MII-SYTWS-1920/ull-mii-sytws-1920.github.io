# Descripción de la Práctica p7-t2-asyncmap 

Escriba un programa Node.js que usando `fs.readFile` lea  un conjunto de ficheros pasados en vía de comandos y produzca como salida la concatenación de los mismos en el orden especificado. Evite usar `fs.readFileSync`:

```
$ concat -f one.txt -f two.txt -f three.txt -o salida.txt
```

Con [commander](https://www.npmjs.com/package/commander?activeTab=readme) es posible indicar una opción que se puede repetir

```js
const program = require('commander');
function collect(value, previous) {
  return previous.concat([value]);
}
program.option('-c, --collect <value>', 'repeatable value', collect, []);
program.parse(process.argv);
console.log(program.collect)
```

```
$ node repeatable-option-commander.js -c a -c b -c c
[ 'a', 'b', 'c' ]
```

1. Lea la sección [The Async Module]({{site.baseurl}}/tema2-async/async-js) de los apuntes y encuentre una solución usando `Async`. Considere la posibilidad de excepciones debidas a que alguno de los ficheros no exista
3. Encuentre  una solución sin hacer uso de `Async` ¿Cómo lo haría?
4. Haciendo abstracción de la solución encontrada en el paso anterior escriba una función `asyncMap` que funcione como el `map` del módulo `Async`:

  ```js
  asyncMap(inputs, (item, cb) => fs.readFile(item, cb), (err, contents) => { ... });
  ```
