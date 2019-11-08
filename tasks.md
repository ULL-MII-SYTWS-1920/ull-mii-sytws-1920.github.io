---
layout: error
permalink: tasks
---

# Prácticas Publicadas

## [Libro de Calificaciones](https://campusvirtual.ull.es/1920/grade/report/grader/index.php?id=201913778)

{% for practica in site.practicas %}

##  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>

{% endfor %}
