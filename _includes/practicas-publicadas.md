
{%- for practica in site.practicas %}
  {%- if practica.visible %}
1.  <a href="{{ practica.url }}">Práctica {{ practica.name }}</a>
  {%- endif %}
{%- endfor %}

