---
layout: default
permalink: practicas
---

## [Al Libro de Calificaciones en el Campus]({{site.calificador}})

## [A la lista de Prácticas en el Campus]({{site.campus_virtual.tareas}})

## Lista de Prácticas Publicadas

{%- for practica in site.practicas reversed %}
  {%- if practica.visible %}
{{ practica.name | slice: 0, 2  }}.  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>
  {%- endif %}
{%- endfor %}

