# Páginas

  {% for page in site.pages %}

* [{{ page.title }}]({{ page.url }}) ([Clase en el repo]({{site.repo_apuntes}}/tree/master/{{page.path}}))
  {% endfor %}
