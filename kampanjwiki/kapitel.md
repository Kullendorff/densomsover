---
layout: default
title: Kapitel
---

# Kampanjens Kapitel

<p style="font-style: italic; color: #666; margin-bottom: 30px;">Kampanjen "Gravens Arv" - kronologisk översikt</p>

{% assign sorted_kapitel = site.kapitel | sort: 'nummer' %}
{% for kapitel in sorted_kapitel %}
  <div class="kapitel-card" style="background: #fffaf0; padding: 20px; margin: 15px 0; border-left: 4px solid #b8860b; border-radius: 3px;">
    <h2 style="margin-top: 0;"><a href="{{ kapitel.url }}">Kapitel {{ kapitel.nummer }}: {{ kapitel.titel }}</a></h2>
    {% if kapitel.plats %}
    <p><strong>Plats:</strong> {{ kapitel.plats }}</p>
    {% endif %}
    {% if kapitel.status %}
    <p><strong>Status:</strong> {{ kapitel.status }}</p>
    {% endif %}
    {% if kapitel.excerpt %}
    <p>{{ kapitel.excerpt }}</p>
    {% endif %}
  </div>
{% endfor %}

<p style="margin-top: 30px; color: #666;">Totalt {{ site.kapitel.size }} kapitel</p>
