#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Uppdaterar wiki_data.js med beskrivningar från markdown-filer.
"""

import json
import re
import os
import sys
from pathlib import Path
from typing import Optional

# Fixa encoding för Windows console
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

# Sökvägar
BASE_DIR = Path(__file__).parent
WIKI_DATA_FILE = BASE_DIR / "wiki_data.js"
NPCS_DIR = BASE_DIR / "kampanjwiki" / "_npcs"
PLATSER_DIR = BASE_DIR / "kampanjwiki" / "_platser"


def extract_description_from_markdown(file_path: Path) -> Optional[str]:
    """
    Extraherar beskrivning från markdown-fil (allt efter YAML frontmatter).
    """
    if not file_path.exists():
        return None

    try:
        content = file_path.read_text(encoding='utf-8')

        # Hitta slut på YAML frontmatter (andra ---)
        parts = content.split('---', 2)
        if len(parts) >= 3:
            # Returnera allt efter YAML frontmatter, trimmat
            description = parts[2].strip()
            return description if description else None

        return None
    except Exception as e:
        print(f"Fel vid läsning av {file_path}: {e}")
        return None


def normalize_name_for_filename(name: str) -> str:
    """
    Normaliserar namn till filnamnsformat.
    Exempel: "Kaelar Stålsvärd" -> "kaelar-stalsvard"
    """
    # Ta bort specialtecken och ersätt mellanslag med bindestreck
    name = name.lower()

    # Ersätt svenska tecken
    replacements = {
        'å': 'a', 'ä': 'a', 'ö': 'o',
        'é': 'e', 'è': 'e', 'ü': 'u',
        'û': 'u', 'í': 'i', 'á': 'a'
    }
    for old, new in replacements.items():
        name = name.replace(old, new)

    # Ta bort specialtecken och ersätt med bindestreck
    name = re.sub(r'[^\w\s-]', '', name)
    name = re.sub(r'[\s_]+', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')

    return name


def find_markdown_file(directory: Path, entity_name: str) -> Optional[Path]:
    """
    Hittar markdown-filen för en entitet (NPC eller plats).
    """
    # Försök med normaliserat namn
    normalized = normalize_name_for_filename(entity_name)
    md_file = directory / f"{normalized}.md"

    if md_file.exists():
        return md_file

    # Om inte hittat, sök i alla filer
    for file in directory.glob("*.md"):
        content = file.read_text(encoding='utf-8')
        # Kolla om namnet matchar i YAML frontmatter
        if f'namn: "{entity_name}"' in content or f"namn: '{entity_name}'" in content:
            return file

    return None


def update_wiki_data():
    """
    Huvudfunktion som uppdaterar wiki_data.js med beskrivningar.
    """
    print("Läser wiki_data.js...")

    # Läs wiki_data.js
    content = WIKI_DATA_FILE.read_text(encoding='utf-8')

    # Extrahera JSON-delen
    match = re.search(r'const wikiData = ({.*});', content, re.DOTALL)
    if not match:
        print("Kunde inte hitta wikiData i filen!")
        return

    data = json.loads(match.group(1))

    # Uppdatera NPCs
    print(f"\nBearbetar {len(data['npcs'])} NPCs...")
    updated_npcs = 0
    missing_npcs = 0

    for npc in data['npcs']:
        namn = npc['namn']
        md_file = find_markdown_file(NPCS_DIR, namn)

        if md_file:
            description = extract_description_from_markdown(md_file)
            if description:
                npc['beskrivning'] = description
                updated_npcs += 1
                print(f"  [OK] {namn}")
            else:
                npc['beskrivning'] = None
                print(f"  [-] {namn} (tom beskrivning)")
        else:
            npc['beskrivning'] = None
            missing_npcs += 1
            print(f"  [X] {namn} (fil saknas)")

    print(f"\nNPCs: {updated_npcs} uppdaterade, {missing_npcs} saknade")

    # Uppdatera Platser
    print(f"\nBearbetar {len(data['platser'])} platser...")
    updated_platser = 0
    missing_platser = 0

    for plats in data['platser']:
        namn = plats['namn']
        md_file = find_markdown_file(PLATSER_DIR, namn)

        if md_file:
            description = extract_description_from_markdown(md_file)
            if description:
                plats['beskrivning'] = description
                updated_platser += 1
                print(f"  [OK] {namn}")
            else:
                print(f"  [-] {namn} (tom beskrivning)")
        else:
            missing_platser += 1
            print(f"  [X] {namn} (fil saknas)")

    print(f"\nPlatser: {updated_platser} uppdaterade, {missing_platser} saknade")

    # Skriv tillbaka till fil
    print("\nSkriver tillbaka till wiki_data.js...")

    # Formatera JSON med korrekt indrag
    json_str = json.dumps(data, ensure_ascii=False, indent=2)

    # Skriv tillbaka med const deklaration
    new_content = f"const wikiData = {json_str};"

    WIKI_DATA_FILE.write_text(new_content, encoding='utf-8')

    print("\n[OK] Klart! wiki_data.js har uppdaterats.")


if __name__ == "__main__":
    update_wiki_data()
