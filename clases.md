# Clases

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> Mes {{post.date | date: "%m"}}
    </li>
  {% endfor %}
</ul>
