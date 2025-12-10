---
layout: default
title: NPCs
---

# Alla NPCs

<div style="margin: 20px 0;">
  <input type="text" id="searchInput" placeholder="Sök NPCs..." style="width: 100%; padding: 10px; border: 2px solid #8b4513; border-radius: 5px;">
</div>

<div id="npcList">
{% assign sorted_npcs = site.npcs | sort: 'namn' %}
{% for npc in sorted_npcs %}
  <div class="npc-card" style="background: #faf8f3; padding: 15px; margin: 10px 0; border-left: 4px solid #8b4513; border-radius: 3px;">
    <h3 style="margin-top: 0;"><a href="{{ npc.url }}">{{ npc.namn }}</a></h3>
    <p style="margin: 5px 0;">
      {% if npc.ras %}<strong>Ras:</strong> {{ npc.ras }} | {% endif %}
      {% if npc.yrke %}<strong>Yrke:</strong> {{ npc.yrke }} | {% endif %}
      {% if npc.plats %}<strong>Plats:</strong> {{ npc.plats }}{% endif %}
    </p>
  </div>
{% endfor %}
</div>

<script>
document.getElementById('searchInput').addEventListener('keyup', function() {
    var searchText = this.value.toLowerCase();
    var cards = document.querySelectorAll('.npc-card');

    cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});
</script>

<p style="margin-top: 30px; color: #666;">Totalt {{ site.npcs.size }} NPCs</p>
