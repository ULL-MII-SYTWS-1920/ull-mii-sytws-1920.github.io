
# Páginas

{% for page in site.pages %}

  {% if (page.title contains "Descripción de la Práctica") 
    or
    (page.title contains "Descripcion de la Práctica")
    or
    (page.title contains "Descripcion de la Practica")
    or
    (page.title contains "Descripcion de la práctica")
    or
    (page.title contains "descripcion de la práctica")
    and 
    (page.path contains "/practicas/") 
  %}
* [{{ page.title }}]({{ page.url }}) ([Página en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endif %}

{% endfor %}
