
# Páginas

{% for page in site.pages %}

  {% if (page.title contains "Descripción de la Práctica") and (page.path contains "/practicas/") %}
* [{{ page.title }}]({{ page.url }}) ([Página en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endif %}

{% endfor %}
