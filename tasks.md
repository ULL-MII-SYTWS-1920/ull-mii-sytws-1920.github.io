<h1>Prácticas Publicadas</h1>

<ol>
{% for practica in site.practicas %}
<li>  <a href="{{ practica.myurl }}">Práctica con myurl {{ practica.name }}</a></li>
{% endfor %}
</ol>