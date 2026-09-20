#!/bin/bash

echo "================================================"
echo "📝 RENAME FILE WHATSAPP KE NAMA LEBIH BAIK"
echo "================================================"
echo ""

# Mapping file lama ke file baru
declare -A FILE_MAP=(
    ["WhatsApp Image 2026-07-28 at 02.09.38.jpeg"]="play-it-2026-competition-1.jpeg"
    ["WhatsApp Image 2026-07-28 at 02.38.00.jpeg"]="play-it-2026-competition-2.jpeg"
    ["WhatsApp Image 2026-07-28 at 02.39.01.jpeg"]="play-it-2026-competition-3.jpeg"
    ["WhatsApp Image 2026-07-28 at 02.39.02.jpeg"]="play-it-2026-competition-4.jpeg"
)

echo "⚠️  PERINGATAN:"
echo "Script ini akan rename file WhatsApp screenshot."
echo "Setelah rename, Anda HARUS update referensi di script.js!"
echo ""
read -p "Lanjutkan? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Dibatalkan."
    exit 0
fi

echo ""
echo "🔄 Merename file..."
echo ""

for old_name in "${!FILE_MAP[@]}"; do
    new_name="${FILE_MAP[$old_name]}"
    
    if [ -f "$old_name" ]; then
        mv "$old_name" "$new_name"
        echo "✓ $old_name → $new_name"
    else
        echo "✗ Skip: $old_name (tidak ditemukan)"
    fi
done

echo ""
echo "✅ Selesai!"
echo ""
echo "⚠️  PENTING: Update referensi di script.js!"
echo ""
echo "Cari dan ganti semua:"
echo "  'WhatsApp Image 2026-07-28 at 02.09.38.jpeg' → 'play-it-2026-competition-1.jpeg'"
echo "  'WhatsApp Image 2026-07-28 at 02.38.00.jpeg' → 'play-it-2026-competition-2.jpeg'"
echo "  'WhatsApp Image 2026-07-28 at 02.39.01.jpeg' → 'play-it-2026-competition-3.jpeg'"
echo "  'WhatsApp Image 2026-07-28 at 02.39.02.jpeg' → 'play-it-2026-competition-4.jpeg'"
echo ""
echo "Atau jalankan: ./update-script-references.sh"
echo ""
