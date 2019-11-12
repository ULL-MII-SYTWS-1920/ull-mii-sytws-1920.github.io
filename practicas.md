---
layout: error
permalink: practicas
---



## [Al Libro de Calificaciones en el Campus]({{site.calificador}})

## [A la lista de Prácticas en el Campus]({{site.campus_virtual}})

## Lista de Prácticas Publicadas

{% for practica in site.practicas %}

##  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>


{% endfor %}
