---
layout: default
title: Languages
permalink: /categories/Languages/
toc: true   # ← show the right-side mini ToC on this page too
---

<section class="prose">
  <h1>Languages</h1>
  <p class="note">Posts grouped by language. Add posts with categories like
  <code>["Languages","C++"]</code>, <code>["Languages","Golang"]</code>, or <code>["Languages","Rust"]</code>.</p>
</section>

{% assign langs = "C++,Golang,Rust" | split: "," %}

{%- comment -%} C++ {%- endcomment -%}
{% assign items_cpp = site.posts | where_exp: "p", "p.categories contains 'Languages' and p.categories contains 'C++'" %}
{% if items_cpp and items_cpp.size > 0 %}
<section class="prose" id="cpp">
  <h2 id="cpp">C++</h2>
  <ul class="cat-list">
    {% for post in items_cpp %}
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

{%- comment -%} Golang {%- endcomment -%}
{% assign items_go = site.posts | where_exp: "p", "p.categories contains 'Languages' and p.categories contains 'Golang'" %}
{% if items_go and items_go.size > 0 %}
<section class="prose" id="golang">
  <h2 id="golang">Golang</h2>
  <ul class="cat-list">
    {% for post in items_go %}
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

{%- comment -%} Rust {%- endcomment -%}
{% assign items_rust = site.posts | where_exp: "p", "p.categories contains 'Languages' and p.categories contains 'Rust'" %}
{% if items_rust and items_rust.size > 0 %}
<section class="prose" id="rust">
  <h2 id="rust">Rust</h2>
  <ul class="cat-list">
    {% for post in items_rust %}
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
