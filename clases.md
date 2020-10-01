---
layout: error
---

# Clases

  {% assign previousMonth = "0" %}
  {% for post in site.posts %}
     {% capture nowunix %}{{ site.start_date | date: '%s'}}{% endcapture %}
     {% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}
     {% if posttime > nowunix %}
       {% assign currentMonth = post.date | date: "%B" %}
        {% if currentMonth != previousMonth %}
### Classes during the month of {{ currentMonth }}
        {% endif %}
* [{{ post.title }}]({{ post.url }}) ([Clase en el repo]({{site.repo_apuntes}}/tree/master/{{post.path}})) {{ posttime }}
      {% assign previousMonth = currentMonth %}
     {% endif%}
  {% endfor %}
