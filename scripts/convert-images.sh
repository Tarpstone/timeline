#!/bin/bash
FOLDER="$(pwd)"
for file in "${FOLDER}"/*; do
    newfile=$(echo "$file" | sed 's/.png/.webp/')
    echo "$newfile"
    cwebp -q 100 "$file" -o "$newfile"
done