# 🧹 GitHub Repository Cleanup Tools

Tools untuk membersihkan repository GitHub Pages dari file-file yang tidak terpakai.

## 📦 File yang Tersedia

| File | Deskripsi |
|------|-----------|
| `cleanup-analysis.sh` | ✅ Analisis file mana yang dipakai & tidak |
| `cleanup-unused.sh` | 🗑️ Hapus file logo yang tidak terpakai |
| `rename-whatsapp-files.sh` | 📝 Rename screenshot WhatsApp ke nama lebih baik |
| `update-script-references.sh` | 🔧 Update referensi file di script.js |
| `CLEANUP_REPORT.md` | 📋 Laporan lengkap & rekomendasi |

---

## 🚀 Quick Start

### 1️⃣ Analisis File
Cek file mana yang dipakai dan mana yang tidak:
```bash
./cleanup-analysis.sh
```

### 2️⃣ Hapus File Tidak Terpakai
Hapus logo yang tidak direferensikan di kode (otomatis backup):
```bash
./cleanup-unused.sh
```

### 3️⃣ (Opsional) Rename File WhatsApp
Rename screenshot dengan nama lebih deskriptif:
```bash
./rename-whatsapp-files.sh
./update-script-references.sh
```

---

## 📊 Hasil Pembersihan

**Sebelum:**
- Total ukuran: 37MB
- File tidak terpakai: 5 logo (~32KB)
- File besar: PDF 2.7MB, Screenshot 1.2MB, BGM 8.9MB

**Setelah:**
- ✅ Logo tidak terpakai dihapus
- ✅ File di-rename dengan nama lebih baik
- ⚠️ File besar perlu dikompres manual (lihat CLEANUP_REPORT.md)

---

## 🛡️ Keamanan

Semua script sudah aman:
- ✓ Otomatis buat backup sebelum hapus
- ✓ Verifikasi file yang digunakan di kode
- ✓ Konfirmasi sebelum eksekusi
- ✓ Tidak mengubah file penting

---

## 💡 Tips

1. **Selalu backup dulu:**
   ```bash
   git add .
   git commit -m "backup: before cleanup"
   ```

2. **Kompres file besar:**
   - Screenshot 1.2MB → kompres di https://tinyjpg.com/
   - PDF 2.7MB → kompres di https://www.ilovepdf.com/compress_pdf
   - BGM 8.9MB → export ulang dengan bitrate 128kbps

3. **Verifikasi website:**
   - Setelah cleanup, cek https://ipanhengkerr.github.io
   - Pastikan semua link dan gambar masih berfungsi

---

## 📖 Dokumentasi Lengkap

Baca `CLEANUP_REPORT.md` untuk:
- ✅ Daftar file yang digunakan
- 🗑️ Daftar file yang tidak terpakai
- 💡 Rekomendasi optimasi lengkap
- 📊 Perbandingan ukuran file

---

## 🆘 Troubleshooting

**Q: Script tidak bisa dijalankan?**
```bash
chmod +x cleanup-analysis.sh
chmod +x cleanup-unused.sh
chmod +x rename-whatsapp-files.sh
chmod +x update-script-references.sh
```

**Q: Website error setelah cleanup?**
```bash
# Restore dari backup
cd backup_unused_[timestamp]/
mv * ..
cd ..
```

**Q: Referensi file rusak setelah rename?**
```bash
# Restore script.js
mv script.js.backup script.js
```

---

## 📝 Changelog

- **2026-09-20**: Initial cleanup tools
  - Analisis file terpakai/tidak terpakai
  - Auto cleanup dengan backup
  - Rename & update referensi

---

## 📄 License

Free to use untuk cleanup repository pribadi.

---

**Dibuat oleh:** Kiro AI Assistant
**Untuk:** Ipanhengker GitHub Repository Cleanup
