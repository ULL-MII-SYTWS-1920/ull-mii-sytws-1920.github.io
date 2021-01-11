
{%- for practica in site.practicas %}
  {%- if practica.visible %}
1. <a href="{{ practica.url }}">Descripción de la Práctica {{ practica.name }}</a>
  * Enlace <a href="{{ site.classroom.url }}/assignments/{{ practica.name }}"  target="_blank">a los repos</a>  de los alumnos 
  {%- endif -%}
{%- endfor %}

