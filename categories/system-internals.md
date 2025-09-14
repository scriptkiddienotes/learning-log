---
layout: default
title: system internals
permalink: /categories/system-internals/
---

# posts in **system internals**

{% for post in site.categories["System Internals"] %}
- [{{ post.title }}]({{ post.url | relative_url }}) <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
{% endfor %}
