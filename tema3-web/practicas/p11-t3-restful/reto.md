# Reto: Developing RESTful Web Services (p11-t3-restful)

En la versión actual los bundles guardan de un libro su `id` y el `title`:

```
./esclu -i b4 -t bundle get _search | jq '.hits.hits'
```

```js
[
  ...
  {
    "_index": "b4",
    "_type": "bundle",
    "_id": "P75BTWgBZl6NTqvZQTZt",
    "_score": 1,
    "_source": {
      "name": "prueba",
      "userKey": "twitter-116415832",
      "books": [
        {
          "id": "pg6873",
          "title": "Mark Twain"
        },
        {
          "id": "pg9014",
          "title": "The Letters of Mark Twain"
        },
        {
          "id": "pg1286",
          "title": "Tales from Shakespeare"
        }
      ]
    }
  },
  {
    "_index": "b4",
    "_type": "bundle",
    "_id": "Pr49TWgBZl6NTqvZfzZv",
    "_score": 1,
    "_source": {
      "name": "nuevo-bundle-prueba",
      "userKey": "twitter-116415832",
      "books": [
        {
          "id": "pg14420",
          "title": "The Exemplary Novels of Cervantes"
        },
        {
          "id": "pg21839",
          "title": "Sense and Sensibility"
        }
      ]
    }
  }
]
```

Modifique el programa para que se guarde también el campo `authors`
