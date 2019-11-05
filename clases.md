# Clases

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> 
      {{post.date | date: "%m"}}
    </li>
  {% endfor %}
</ul>

<!-->
<div id="posts">
  <h2>Clases</h2>
  {% for post in site.posts %}
    {% capture post_month %}{{post.date | date: "%m"}}{% endcapture %}
    {% if post_month != prev_post_month %}
        {% if prev_post_month %}
          </ol>
        {% endif %}
        <h3>{{post.date | date: "%B %Y"}}</h3>
        <ol class="posts-list">
    {% endif %}
  	{% include post-list-post.html %}
    {% capture prev_post_month %}
      {{post_month}}
    {% endcapture %}
  {% endfor %}
</div>
-->