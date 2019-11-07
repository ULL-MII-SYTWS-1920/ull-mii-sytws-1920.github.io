# Clases

  {% assign previousMonth = "0" %}
  {% for post in site.posts %}
     {% assign currentMonth = post.date | date: "%B" %}
      {% if currentMonth != previousMonth %}
### Classes during the month of {{ currentMonth }}
      {% endif %}
* [{{ post.title }}]({{ post.url }}) ({{post.path}})
      {% assign previousMonth = currentMonth %}
  {% endfor %}
