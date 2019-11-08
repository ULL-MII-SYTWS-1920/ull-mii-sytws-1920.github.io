---
layout: error
---

# Prácticas Publicadas

{% for practica in site.practicas %}

##  <a href="{{ practica.myurl }}">Práctica {{ practica.name }}</a>

{% endfor %}
