---
layout: default
title: Fraktioner
---

# Alla Fraktioner

{% assign sorted_fraktioner = site.fraktioner | sort: 'namn' %}
{% for fraktion in sorted_fraktioner %}
  <div class="fraktion-card" style="background: #fff0f0; padding: 15px; margin: 10px 0; border-left: 4px solid #8b0000; border-radius: 3px;">
    <h3 style="margin-top: 0;"><a href="{{ fraktion.url }}">{{ fraktion.namn }}</a></h3>
    <p style="margin: 5px 0;">
      {% if fraktion.typ %}<strong>Typ:</strong> {{ fraktion.typ }} | {% endif %}
      {% if fraktion.region %}<strong>Region:</strong> {{ fraktion.region }}{% endif %}
    </p>
  </div>
{% endfor %}

<p style="margin-top: 30px; color: #666;">Totalt {{ site.fraktioner.size }} fraktioner</p>
