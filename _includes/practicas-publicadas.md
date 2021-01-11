
<ol>
{%- for practica in site.practicas -%}
  {%- if practica.visible -%}
<li> 
  <a href="{{ practica.url }}">Descripción de la Práctica {{ practica.name }}</a>
  <ul><li> Enlace <a href="{{ site.classroom.url }}/assignments/{{ practica.name }}"  target="_blank">a los repos</a>  de los alumnos</li></ul>
</li>
  {%- endif -%}
{%- endfor -%}
</ol>
