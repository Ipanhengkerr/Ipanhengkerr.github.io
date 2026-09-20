#!/bin/bash

echo "================================================"
echo "🔧 UPDATE REFERENSI FILE DI SCRIPT.JS"
echo "================================================"
echo ""

# Backup script.js dulu
cp script.js script.js.backup
echo "✓ Backup dibuat: script.js.backup"
echo ""

# Update referensi
sed -i 's/WhatsApp Image 2026-07-28 at 02\.09\.38\.jpeg/play-it-2026-competition-1.jpeg/g' script.js
sed -i 's/WhatsApp Image 2026-07-28 at 02\.38\.00\.jpeg/play-it-2026-competition-2.jpeg/g' script.js
sed -i 's/WhatsApp Image 2026-07-28 at 02\.39\.01\.jpeg/play-it-2026-competition-3.jpeg/g' script.js
sed -i 's/WhatsApp Image 2026-07-28 at 02\.39\.02\.jpeg/play-it-2026-competition-4.jpeg/g' script.js

echo "✓ Referensi di script.js sudah diupdate"
echo ""

# Verifikasi
echo "📋 Verifikasi perubahan:"
echo ""
grep -n "play-it-2026-competition" script.js || echo "⚠️  Tidak ditemukan perubahan (mungkin sudah diupdate sebelumnya)"

echo ""
echo "✅ Selesai!"
echo ""
echo "Jika ada masalah, restore dengan:"
echo "  mv script.js.backup script.js"
echo ""
