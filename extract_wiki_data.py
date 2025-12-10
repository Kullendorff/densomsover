#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrahera all data från kampanjwiki och skapa JavaScript-objekt
"""

import os
import re
import json
from pathlib import Path

def parse_yaml_frontmatter(content):
    """Extrahera YAML frontmatter från markdown-fil"""
    yaml_match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', content, re.DOTALL)
    if not yaml_match:
        return {}, content

    yaml_text = yaml_match.group(1)
    body = yaml_match.group(2)

    # Enkel YAML-parser (hanterar nyckel: värde och listor)
    data = {}
    current_key = None

    for line in yaml_text.split('\n'):
        if not line.strip():
            continue

        # Lista-item (börjar med -)
        if line.strip().startswith('- '):
            if current_key and isinstance(data.get(current_key), list):
                value = line.strip()[2:].strip()
                # Ta bort citattecken om de finns
                if value.startswith('"') and value.endswith('"'):
                    value = value[1:-1]
                elif value.startswith("'") and value.endswith("'"):
                    value = value[1:-1]
                data[current_key].append(value)
            continue

        # Nyckel: värde
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()

            # Ta bort citattecken om de finns
            if value and value.startswith('"') and value.endswith('"'):
                value = value[1:-1]
            elif value and value.startswith("'") and value.endswith("'"):
                value = value[1:-1]

            # Kolla om nästa värde är en lista
            if not value:
                data[key] = []
                current_key = key
            else:
                data[key] = value if value else None
                current_key = key

    return data, body

def extract_npcs(base_path):
    """Extrahera alla NPCs"""
    npcs_path = os.path.join(base_path, '_npcs')
    npcs = []

    if not os.path.exists(npcs_path):
        return npcs

    for filename in sorted(os.listdir(npcs_path)):
        if not filename.endswith('.md'):
            continue

        filepath = os.path.join(npcs_path, filename)

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            data, body = parse_yaml_frontmatter(content)

            npc = {
                'namn': data.get('namn', None),
                'ras': data.get('ras', None),
                'titel': data.get('titel', None),
                'status': data.get('status', None),
                'plats': data.get('plats', None),
                'fraktion': data.get('fraktion', None),
                'kapitel': data.get('första_omnämnande', data.get('forsta_omnamnande', None))
            }

            npcs.append(npc)

        except Exception as e:
            print(f"Fel vid läsning av {filename}: {e}")

    return npcs

def extract_platser(base_path):
    """Extrahera alla platser"""
    platser_path = os.path.join(base_path, '_platser')
    platser = []

    if not os.path.exists(platser_path):
        return platser

    for filename in sorted(os.listdir(platser_path)):
        if not filename.endswith('.md'):
            continue

        filepath = os.path.join(platser_path, filename)

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            data, body = parse_yaml_frontmatter(content)

            # Extrahera första stycket från body som beskrivning
            beskrivning = body.strip().split('\n\n')[0] if body.strip() else None
            if beskrivning and len(beskrivning) > 200:
                beskrivning = beskrivning[:200] + '...'

            plats = {
                'namn': data.get('namn', None),
                'typ': data.get('typ', None),
                'region': data.get('region', None),
                'beskrivning': beskrivning
            }

            platser.append(plats)

        except Exception as e:
            print(f"Fel vid läsning av {filename}: {e}")

    return platser

def extract_kapitel(base_path):
    """Extrahera alla kapitel"""
    kapitel_path = os.path.join(base_path, '_kapitel')
    kapitel = []

    if not os.path.exists(kapitel_path):
        return kapitel

    for filename in sorted(os.listdir(kapitel_path)):
        if not filename.endswith('.md'):
            continue

        filepath = os.path.join(kapitel_path, filename)

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            data, body = parse_yaml_frontmatter(content)

            # Extrahera nummer från filnamn (01-tirakgraven.md -> 1)
            nummer_match = re.match(r'(\d+)', filename)
            nummer = int(nummer_match.group(1)) if nummer_match else None

            kap = {
                'nummer': data.get('nummer', nummer),
                'titel': data.get('titel', None),
                'status': data.get('status', None),
                'plats': data.get('plats', None),
                'datum': data.get('datum', None)
            }

            kapitel.append(kap)

        except Exception as e:
            print(f"Fel vid läsning av {filename}: {e}")

    return kapitel

def generate_javascript(data):
    """Generera JavaScript-objekt från data"""

    # Konvertera None till null i JSON
    json_str = json.dumps(data, ensure_ascii=False, indent=2)

    # Ersätt null med null (redan OK i JSON)
    js_output = f"const wikiData = {json_str};\n"

    return js_output

def main():
    base_path = r'D:\GDRIVE\My Drive\Johan\Gaming\Gammal leka bäst\EON\kampanjwiki'

    print("Läser NPCs...")
    npcs = extract_npcs(base_path)
    print(f"Hittade {len(npcs)} NPCs")

    print("Läser platser...")
    platser = extract_platser(base_path)
    print(f"Hittade {len(platser)} platser")

    print("Läser kapitel...")
    kapitel = extract_kapitel(base_path)
    print(f"Hittade {len(kapitel)} kapitel")

    # Skapa dataobjekt
    data = {
        'npcs': npcs,
        'platser': platser,
        'kapitel': kapitel
    }

    # Generera JavaScript
    js_output = generate_javascript(data)

    # Spara till fil
    output_path = r'D:\GDRIVE\My Drive\Johan\Gaming\Gammal leka bäst\EON\wiki_data.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_output)

    print(f"\nJavaScript-objekt sparat till: {output_path}")
    print(f"\nSammanfattning:")
    print(f"- {len(npcs)} NPCs")
    print(f"- {len(platser)} platser")
    print(f"- {len(kapitel)} kapitel")

if __name__ == '__main__':
    main()
