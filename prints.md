---
layout: default
title: Prints
permalink: /prints/
---

<div class="content">

  <ul class="image-links">
      {% assign projects = site.prints | sort: 'order' %}
      {% for project in projects %}

          <li class="image-link fullwidth">
              <a href="{{ project.url | prepend: site.github.url }}">
                  <img src="{{ project.image | prepend: "/img/" | prepend: site.github.url }}"/>
                  <p class="image-link-title">
                      <span class="image-link-title-text">{{ project.title }}</span>
                  </p>
              </a>
          </li>
      {% endfor %}
  </ul>

</div>
