# 📋 Laporan Pembersihan Repository GitHub Pages

## 🎯 Ringkasan
Repository Anda saat ini berukuran **37MB**, dengan **13MB** di folder assets.

---

## ✅ File yang DIGUNAKAN (JANGAN DIHAPUS)

### File Utama Website
- ✓ `index.html` (24KB)
- ✓ `styles.css` (56KB)
- ✓ `script.js` (40KB)

### Assets Media
- ✓ `logo-idn-theme.png` (4KB) - digunakan di badge IDN
- ✓ `assets/audio/bgm.mp3` (8.9MB) - background music
- ✓ `assets/characters/*.jpg` (5 files, ~4MB total)

### Dokumentasi & Sertifikat
- ✓ `Bootcamp.jpeg` (160KB)
- ✓ `Muhammad Ifannudin Azi.pdf` (2.7MB) ⚠️ BESAR
- ✓ `Jurnal Analisis AES di WhatsApp pada Wifi Publik (Muhammad Ifannudin Azi).pdf` (532KB)

### Screenshot Kompetisi Play IT 2026
- ✓ `WhatsApp Image 2026-07-28 at 02.09.38.jpeg` (176KB)
- ✓ `WhatsApp Image 2026-07-28 at 02.38.00.jpeg` (128KB)
- ✓ `WhatsApp Image 2026-07-28 at 02.39.01.jpeg` (100KB)
- ✓ `WhatsApp Image 2026-07-28 at 02.39.02.jpeg` (1.2MB) ⚠️ SANGAT BESAR

---

## 🗑️ File TIDAK DIGUNAKAN (Bisa Dihapus)

Logo yang tidak direferensikan di kode:
- ✗ `logo-clean2.png` (4KB)
- ✗ `logo-clean.png` (8KB)
- ✗ `logo-idn.png` (12KB)
- ✗ `logo-mask.png` (4KB)
- ✗ `logo-transparent.png` (4KB)

**Total hemat: ~32KB** (kecil tapi tetap perlu dibersihkan)

---

## 💡 Rekomendasi Optimasi

### 1. ⚡ PRIORITAS TINGGI - Kompres File Besar

File yang perlu dikompres:
```bash
# Screenshot WhatsApp yang 1.2MB
WhatsApp Image 2026-07-28 at 02.39.02.jpeg  → kompres ke ~300KB (75% lebih kecil)

# PDF Sertifikat 2.7MB
Muhammad Ifannudin Azi.pdf  → kompres ke ~1MB (60% lebih kecil)

# Background Music 8.9MB
assets/audio/bgm.mp3  → gunakan bitrate 128kbps, bisa jadi ~3-4MB
```

**Tools untuk kompres:**
- **Gambar JPEG**: https://tinyjpg.com/ atau ImageMagick
- **PDF**: https://www.ilovepdf.com/compress_pdf atau Adobe Acrobat
- **MP3**: Audacity (export dengan bitrate 128kbps)

**Estimasi pengurangan ukuran: 37MB → 23MB (~38% lebih kecil!)**

### 2. 🗑️ Hapus File Tidak Terpakai

Jalankan script:
```bash
cd /home/ipanhengker/Documents/github/War
chmod +x cleanup-unused.sh
./cleanup-unused.sh
```

Script akan:
- Membuat folder backup otomatis
- Memindahkan file logo yang tidak terpakai
- Aman untuk dijalankan

### 3. 📝 Rename File dengan Nama Lebih Baik

File screenshot WhatsApp sebaiknya di-rename:
```bash
# Dari:
WhatsApp Image 2026-07-28 at 02.09.38.jpeg
WhatsApp Image 2026-07-28 at 02.38.00.jpeg
WhatsApp Image 2026-07-28 at 02.39.01.jpeg
WhatsApp Image 2026-07-28 at 02.39.02.jpeg

# Menjadi:
play-it-2026-competition-1.jpeg
play-it-2026-competition-2.jpeg
play-it-2026-competition-3.jpeg
play-it-2026-competition-4.jpeg
```

⚠️ **INGAT:** Jika di-rename, harus update referensinya di `script.js`!

### 4. 🛡️ Tambahkan .gitignore

File `.gitignore` sudah dibuat untuk mencegah file sampah masuk ke repo.

---

## 📊 Perbandingan Ukuran

| Status | Ukuran | Keterangan |
|--------|--------|------------|
| **Saat ini** | 37MB | Belum dioptimasi |
| **Setelah hapus logo** | 37MB | -32KB (tidak signifikan) |
| **Setelah kompres semua** | ~23MB | ✅ **-14MB (38% lebih kecil)** |

---

## 🚀 Langkah-langkah Pembersihan

### Step 1: Backup Dulu
```bash
cd /home/ipanhengker/Documents/github/War
git status  # pastikan clean
git add .
git commit -m "backup: before cleanup"
```

### Step 2: Hapus File Tidak Terpakai
```bash
./cleanup-unused.sh
```

### Step 3: Kompres File Besar (Manual)
1. Download file yang perlu dikompres
2. Kompres menggunakan tools online/offline
3. Replace file lama dengan file baru

### Step 4: Commit & Push
```bash
git add .
git commit -m "chore: cleanup unused files and compress large assets"
git push origin main
```

### Step 5: Verifikasi
Cek website: https://ipanhengkerr.github.io
Pastikan semua masih berfungsi normal!

---

## ⚠️ Catatan Penting

1. **Jangan hapus file yang ada di list "DIGUNAKAN"** - semuanya direferensikan di kode
2. **Backup dulu sebelum hapus** - script sudah otomatis buat backup
3. **Test website setelah perubahan** - pastikan tidak ada broken link
4. **PDF dan screenshot memang besar** - tapi itu memang dipakai untuk modal gallery

---

## ❓ FAQ

**Q: Kenapa PDF-nya besar?**
A: PDF `Muhammad Ifannudin Azi.pdf` mungkin berisi gambar high-res. Kompres dengan "low quality" settings.

**Q: Apakah aman hapus logo yang tidak terpakai?**
A: Ya, script sudah verifikasi bahwa logo tersebut tidak direferensikan di HTML/CSS/JS.

**Q: Berapa lama loading website setelah optimasi?**
A: Dengan pengurangan 14MB, loading time bisa 2-3x lebih cepat, terutama pada koneksi lambat.

---

📌 **Dibuat:** $(date)
🔧 **Tools:** cleanup-analysis.sh, cleanup-unused.sh
