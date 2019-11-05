<h1> Clases</h1>

  {% assign previousMonth = "0" %}
  {% for post in site.posts %}
     {% assign currentMonth = post.date | date: "%m" %}
      {% if currentMonth != previousMonth %}
        <h2>{{ currentMonth }}</h2>
         <ul>
      {% endif %}

           <li><a href="{{ post.url }}">{{ post.title }}</a> </li>
      
      {% assign previousMonth = currentMonth %}
  {% endfor %}
         </ul>
