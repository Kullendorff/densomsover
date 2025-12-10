---
layout: default
title: Spelarkaraktärer
---

# Spelarkaraktärer

<p style="font-style: italic; color: #666; margin-bottom: 30px;">Hjältarna i kampanjen "Gravens Arv"</p>

{% assign aktiva = site.spelarkaraktarer | where: "status", "aktiv" | sort: 'namn' %}
{% assign andra = site.spelarkaraktarer | where_exp: "item", "item.status != 'aktiv'" | sort: 'namn' %}

{% if aktiva.size > 0 %}
<h2>Aktiva äventyrare</h2>
{% for karaktar in aktiva %}
  <div class="karaktar-card" style="background: #f0f8ff; padding: 20px; margin: 15px 0; border-left: 4px solid #4169e1; border-radius: 3px;">
    {% if karaktar.bild %}
    <img src="{{ karaktar.bild }}" alt="{{ karaktar.namn }}" style="max-width: 150px; float: right; margin: 0 0 10px 20px; border-radius: 5px;">
    {% endif %}
    <h3 style="margin-top: 0;"><a href="{{ karaktar.url }}">{{ karaktar.namn }}</a></h3>
    {% if karaktar.spelare %}
    <p><strong>Spelare:</strong> {{ karaktar.spelare }}</p>
    {% endif %}
    <p>
      {% if karaktar.ras %}<strong>Ras:</strong> {{ karaktar.ras }} | {% endif %}
      {% if karaktar.nuvarande_plats %}<strong>Plats:</strong> {{ karaktar.nuvarande_plats }}{% endif %}
    </p>
    <div style="clear: both;"></div>
  </div>
{% endfor %}
{% endif %}

{% if andra.size > 0 %}
<h2 style="margin-top: 40px;">Andra karaktärer</h2>
{% for karaktar in andra %}
  <div class="karaktar-card" style="background: #f5f5f5; padding: 20px; margin: 15px 0; border-left: 4px solid #999; border-radius: 3px;">
    <h3 style="margin-top: 0;"><a href="{{ karaktar.url }}">{{ karaktar.namn }}</a></h3>
    {% if karaktar.spelare %}
    <p><strong>Spelare:</strong> {{ karaktar.spelare }}</p>
    {% endif %}
    {% if karaktar.status %}
    <p><strong>Status:</strong> {{ karaktar.status }}</p>
    {% endif %}
  </div>
{% endfor %}
{% endif %}

<p style="margin-top: 30px; color: #666;">Totalt {{ site.spelarkaraktarer.size }} spelarkaraktärer</p>
