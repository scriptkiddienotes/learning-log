---
layout: category
title: Reversing Basic Programs
permalink: /categories/learn-reversing/reversing-basic-programs/
category_key: "Reversing Basic Programs"
---

# posts in **Reversing Basic Programs**

{% for post in site.categories["Reversing Basic Programs"] %}
- [{{ post.title }}]({{ post.url | relative_url }}) <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
{% endfor %}
