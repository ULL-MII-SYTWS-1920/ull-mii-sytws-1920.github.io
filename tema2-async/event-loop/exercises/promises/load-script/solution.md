## Solución

```html
{% include_relative index.html %}
```

* [Run the solution](index.html)


## Pregunta

¿Que ocurre si añado el `script` a `document.head`
  
```js
document.head.append(script);
```

solo cuando se que la promesa se ha cumplido? ¿Qué ocurre?

Conjetura: Parece que el navegador sólo comienza la carga si el elemento creado está vinculado al documento