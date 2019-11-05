# Clases

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> {{post.date | date: "%m"}}
    </li>
  {% endfor %}
</ul>
