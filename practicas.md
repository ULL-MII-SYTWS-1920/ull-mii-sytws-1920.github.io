
# Prácticas

{% for page in site.pages %}

  {% if (
    (page.path contains "/practica/")
    and 
    (page.path contains "/index.html")
    )
  %}
* [{{ page.title }}]({{ page.url }}) ([Página en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endif %}

{% endfor %}
