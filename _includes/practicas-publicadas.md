
{%- for practica in site.practicas reversed %}
  {%- if practica.visible %}
{{ practica.name | slice: 0, 2  }}.  <a href="{{ practica.url }}">Práctica {{ practica.name }}</a>
  {%- endif %}
{%- endfor %}
