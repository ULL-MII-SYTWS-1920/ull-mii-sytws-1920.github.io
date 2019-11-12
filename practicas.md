---
layout: error
permalink: practicas
---

# Prácticas Publicadas

## [Al Libro de Calificaciones]({{site.calificador})

## [A la lista de Prácticas en el Campus]({{site.campus_virtual}})

{% for practica in site.practicas %}

##  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>


{% endfor %}
