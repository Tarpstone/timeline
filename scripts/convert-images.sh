#!/bin/bash
FOLDER="$(pwd)"
for file in "${FOLDER}"/*; do
    # 400w
    newfile=$(echo "$file" | sed 's/.png/-400w.webp/')
    echo "$newfile"
    cwebp -resize 400 0 -q 100 "$file" -o "$newfile"

    # 800w
    newfile=$(echo "$file" | sed 's/.png/-800w.webp/')
    echo "$newfile"
    cwebp -resize 800 0 -q 100 "$file" -o "$newfile"

    # 1600w
    newfile=$(echo "$file" | sed 's/.png/-1600w.webp/')
    echo "$newfile"
    cwebp -resize 1600 0 -q 100 "$file" -o "$newfile"
done