---
layout: default
title: c
permalink: /categories/c/
---

# posts in **C**

{% for post in site.categories["C"] %}
- [{{ post.title }}]({{ post.url | relative_url }}) <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
{% endfor %}
