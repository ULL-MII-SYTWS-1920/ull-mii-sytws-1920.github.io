---
layout: error
---

# Prácticas Publicadas

{% for practica in site.practicas %}

##  <a href="{{ practica.myurl }}">Práctica frontmatter {{ practica.name }}</a>

{% endfor %}
