---
layout: category
title: Languages
permalink: /categories/Languages/
category_key: "Languages"
---


# posts in **C**

{% for post in site.categories["Languaes"] %}
- [{{ post.title }}]({{ post.url | relative_url }}) <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
{% endfor %}
