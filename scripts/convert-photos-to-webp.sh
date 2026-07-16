#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="public/photos/source"
OUTPUT_DIR="public/photos"
QUALITY="${WEBP_QUALITY:-82}"

mkdir -p "$SOURCE_DIR" "$OUTPUT_DIR"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp is required to convert photos to WebP."
  echo "Install libwebp, then run: npm run photos:webp"
  exit 1
fi

convert_one() {
  local source_name="$1"
  local output_name="$2"
  local input_path=""

  for ext in jpg jpeg png JPG JPEG PNG; do
    if [ -f "$SOURCE_DIR/$source_name.$ext" ]; then
      input_path="$SOURCE_DIR/$source_name.$ext"
      break
    fi
  done

  if [ -z "$input_path" ]; then
    echo "Missing source for $source_name. Expected $SOURCE_DIR/$source_name.jpg, .jpeg, or .png"
    return 0
  fi

  cwebp -quiet -q "$QUALITY" "$input_path" -o "$OUTPUT_DIR/$output_name.webp"
  echo "Created $OUTPUT_DIR/$output_name.webp"
}

convert_one "00-cover" "00-cover"
convert_one "01-kitchen-main" "01-kitchen-main"
convert_one "02-closet" "02-closet"
convert_one "03-bedroom" "03-bedroom"
convert_one "04-bathroom-wide" "04-bathroom-wide"
convert_one "05-fridge" "05-fridge"
convert_one "06-bathroom-vanity" "06-bathroom-vanity"
convert_one "07-range" "07-range"
convert_one "08-laundry" "08-laundry"
convert_one "09-open-living" "09-open-living"
convert_one "10-bedroom-view" "10-bedroom-view"
convert_one "11-open-layout-wide" "11-open-layout-wide"

echo "Done. WebP quality: $QUALITY"
