# Clases

  {% assign previousMonth = "0" %}
  {% for post in site.posts %}
     {% assign currentMonth = post.date | date: "%B" %}
      {% if currentMonth != previousMonth %}
### Classes during the month of {{ currentMonth }}
      {% endif %}
* [{{ post.title }}]({{ post.url }}) [En el repo]({{site.repo_apuntes}}/tree/master/{{post.path}})
      {% assign previousMonth = currentMonth %}
  {% endfor %}
