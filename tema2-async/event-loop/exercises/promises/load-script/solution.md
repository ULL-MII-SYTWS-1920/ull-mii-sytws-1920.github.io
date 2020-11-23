## Solución

```html
{% include_relative index.html %}
```

* [Run the solution](index.html)

<!--
## Pregunta

¿Que ocurre si añado el `script` a `document.head`
  
```js
document.head.append(script);
```

solo cuando se que la promesa se ha cumplido? ¿Qué ocurre?

Observación: Parece que el navegador sólo comienza la carga del script si el elemento HTML creado está vinculado al documento en el momento de la asignación `script.src = src;`

-->