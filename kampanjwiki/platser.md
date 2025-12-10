---
layout: default
title: Platser
---

# Alla Platser

<div style="margin: 20px 0;">
  <input type="text" id="searchInput" placeholder="Sök platser..." style="width: 100%; padding: 10px; border: 2px solid #2e8b57; border-radius: 5px;">
</div>

<div id="platsList">
{% assign sorted_platser = site.platser | sort: 'namn' %}
{% for plats in sorted_platser %}
  <div class="plats-card" style="background: #f0faf0; padding: 15px; margin: 10px 0; border-left: 4px solid #2e8b57; border-radius: 3px;">
    <h3 style="margin-top: 0;"><a href="{{ plats.url }}">{{ plats.namn }}</a></h3>
    <p style="margin: 5px 0;">
      {% if plats.typ %}<strong>Typ:</strong> {{ plats.typ }} | {% endif %}
      {% if plats.region %}<strong>Region:</strong> {{ plats.region }}{% endif %}
    </p>
  </div>
{% endfor %}
</div>

<script>
document.getElementById('searchInput').addEventListener('keyup', function() {
    var searchText = this.value.toLowerCase();
    var cards = document.querySelectorAll('.plats-card');

    cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});
</script>

<p style="margin-top: 30px; color: #666;">Totalt {{ site.platser.size }} platser</p>
