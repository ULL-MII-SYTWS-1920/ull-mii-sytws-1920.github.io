
# Prácticas

{% for page in site.pages %}

  {% if (
    (page.path contains "/practica/")
    and 
    (page.path contains "/tema")
    )
  %}
* [{{ page.title }}]({{ page.url }}) ([Página en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endif %}

{% endfor %}
