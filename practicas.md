---
layout: error
permalink: practicas
---

## [Al Libro de Calificaciones en el Campus]({{site.calificador}})

## [A la lista de Prácticas en el Campus]({{site.campus_virtual}})

## Lista de Prácticas Publicadas

{% assign items = site.practicas | sort: 'date' %}
{% for practica in items %}

##  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>

{% endfor %}