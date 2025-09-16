---
layout: category
title: Computer Architecture
permalink: /categories/computer-architecture/
category_key: "Computer Architecture"
---

# posts in **Computer Architecture**

{% for post in site.categories["Computer Architecture"] %}
- [{{ post.title }}]({{ post.url | relative_url }}) <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
{% endfor %}
