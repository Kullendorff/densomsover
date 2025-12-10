#!/usr/bin/env python3
"""Fix image links in NPC markdown files - fuzzy matching version."""

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
        actual_images[img_file.name] = img_file.name

print(f"Found {len(actual_images)} images in {images_dir}")

# Process each NPC file
fixed_count = 0
removed_count = 0
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

        # Try exact match first
        found_image = None
        for img_name in actual_images:
            if img_name.lower() == old_filename.lower():
                found_image = img_name
                break

        # Try fuzzy match - if old_stem is contained in image name
        if not found_image:
            for img_name in actual_images:
                img_stem = Path(img_name).stem.lower()
                # Check if the NPC name is in the image name
                if old_stem in img_stem or img_stem in old_stem:
                    found_image = img_name
                    break

        if found_image:
            new_path = f"/assets/images/npcs/{found_image}"

            if old_path != new_path:
                # Update the file
                new_content = content.replace(
                    f'bild: "{old_path}"',
                    f'bild: "{new_path}"'
                )

                with open(npc_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f"[OK] {npc_file.name}: {old_filename} -> {found_image}")
                fixed_count += 1
        else:
            # Remove the bild field completely
            new_content = re.sub(
                r'^bild:\s*"[^"]+"\n',
                '',
                content,
                flags=re.MULTILINE
            )

            with open(npc_file, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"[REMOVED] {npc_file.name}: {old_filename} (no matching image found)")
            removed_count += 1

print(f"\n[OK] Fixed {fixed_count} image links")
print(f"[OK] Removed {removed_count} non-existent image links")
