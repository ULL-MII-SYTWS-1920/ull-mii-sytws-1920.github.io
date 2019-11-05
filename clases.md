# Clases

  {% assign previousMonth = "0" %}
  {% for post in site.posts %}
     {% assign currentMonth = post.date | date: "%m" %}
      {% if currentMonth != previousMonth %}
## {{ currentMonth }}
      {% endif %}
* [{{ post.title }}]({{ post.url }})
      {% assign previousMonth = currentMonth %}
  {% endfor %}
