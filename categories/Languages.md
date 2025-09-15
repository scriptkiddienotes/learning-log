---
layout: category
title: Languages
permalink: /categories/Languages/
category_key: "Languages"
---


<section class="prose">
  <h1>Languages</h1>
  <p class="note">Posts grouped by language. Add new posts with categories like <code>["Languages","C++"]</code>, <code>["Languages","Golang"]</code>, or <code>["Languages","Rust"]</code>.</p>
</section>


{% assign langs = "C++,Golang,Rust" | split: "," %}

{% for lang in langs %}
  {% assign items = site.posts | where_exp: "p", "p.categories contains 'Languages' and p.categories contains lang" %}
  {% if items and items.size > 0 %}
  <section class="prose" id="{{ lang | downcase | replace: '+','p' }}">
    <h2>{{ lang }}</h2>
    <ul class="cat-list">
      {% for post in items %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="meta">— {{ post.date | date: "%Y-%m-%d" }}</span>
          {% if post.excerpt %}
            <div class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>
  {% endif %}
{% endfor %}
