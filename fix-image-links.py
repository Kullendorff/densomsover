#!/usr/bin/env python3
"""Fix image links in NPC markdown files to match actual image filenames."""

import os
import re
from pathlib import Path

# Paths
wiki_dir = Path("kampanjwiki")
npcs_dir = wiki_dir / "_npcs"
images_dir = wiki_dir / "assets/images/npcs"

# Get all actual image files
actual_images = {}
for img_file in images_dir.glob("*"):
    if img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.webp']:
        # Store lowercase version as key, actual filename as value
        actual_images[img_file.stem.lower()] = img_file.name

print(f"Found {len(actual_images)} images in {images_dir}")

# Process each NPC file
fixed_count = 0
not_found = []

for npc_file in npcs_dir.glob("*.md"):
    with open(npc_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the bild: line
    match = re.search(r'^bild:\s*"(/assets/images/npcs/[^"]+)"', content, re.MULTILINE)

    if match:
        old_path = match.group(1)
        old_filename = Path(old_path).name
        old_stem = Path(old_path).stem.lower()

        # Try to find matching image
        if old_stem in actual_images:
            new_filename = actual_images[old_stem]
            new_path = f"/assets/images/npcs/{new_filename}"

            if old_path != new_path:
                # Update the file
                new_content = content.replace(
                    f'bild: "{old_path}"',
                    f'bild: "{new_path}"'
                )

                with open(npc_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f"[OK] {npc_file.name}: {old_filename} -> {new_filename}")
                fixed_count += 1
        else:
            not_found.append((npc_file.name, old_filename))

print(f"\n[OK] Fixed {fixed_count} image links")

if not_found:
    print(f"\n[WARNING] Could not find images for {len(not_found)} NPCs:")
    for npc, img in not_found:
        print(f"  - {npc}: {img}")
