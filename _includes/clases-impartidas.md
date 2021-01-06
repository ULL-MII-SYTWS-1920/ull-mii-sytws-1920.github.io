
  {% assign previousMonth = "0" %}
<ol>
  {% for post in site.posts %}
     {% capture nowunix %}{{ site.start_date | date: '%s'}}{% endcapture %}
     {% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}
     {% if posttime > nowunix %}
       {% assign currentMonth = post.date | date: "%B" %}
        {% if currentMonth != previousMonth %}
<br/>
<h3> Classes Durante el mes de {{ currentMonth }}</h3>
</ol>
<ol reversed>
        {% endif %}
<li> <a href="{{ post.url }}">{{ post.title }}</a> (<a href="{{site.repo_apuntes}}/tree/master/{{post.path}}">Clase en el repo</a>) </li>
      {% assign previousMonth = currentMonth %}
     {% endif%}
  {% endfor %}
</ol>
