
# Páginas

{% for page in site.pages %}

  {% if (page.title contains "Práctica") 
    or
    (page.title contains "práctica")
    or
    (page.title contains "Practica")
    or
    (page.title contains "práctica")
    and 
    (page.path contains "/practicas/")
    and 
    (page.path contains "/tema/") 
  %}
* [{{ page.title }}]({{ page.url }}) ([Página en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endif %}

{% endfor %}
