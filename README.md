# 💍 Undangan Pernikahan Digital — Saiful & Aulia

Website undangan pernikahan digital untuk:
- **Mempelai Pria:** Kyai Muh. Saiful Anwar
- **Mempelai Wanita:** Aulia Priyangka
- **Tanggal:** Kamis, 09 April 2026 · 12:30–17:00 WIB
- **Lokasi:** Pondok Pesantren Al-Qomar, Mempawah Hilir

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|-----------|
| 🔗 Undangan personal | URL unik per tamu: `domain.com/nama-tamu` |
| 📋 Admin panel | Kelola & kirim undangan via WhatsApp |
| ⏱️ Countdown timer | Hitung mundur ke hari pernikahan |
| 🎵 Musik latar | Putar otomatis saat interaksi pertama |
| 📱 Mobile-first | Dioptimalkan untuk dibuka dari WhatsApp |
| 🌙 Desain Islami | Elegan minimalis dengan nuansa gold |

---

## 🚀 Cara Memulai

### 1. Clone & Install

```bash
git clone <repo-url>
cd wedding
npm install
```

### 2. Konfigurasi Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SHEETS_CSV_URL=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv
```

### 3. Setup Google Sheets

1. Buat Google Sheet baru dengan **2 kolom** (baris pertama = header):

   | nama            | no_wa         |
   |-----------------|---------------|
   | Bapak Sanusi    | 6281234567890 |
   | Keluarga Budi   | 6289876543210 |
   | Ibu Siti Rahayu | 6285551234567 |

   - **nama**: nama lengkap tamu (tampil di undangan)
   - **no_wa**: nomor WhatsApp tanpa tanda `+` (format: 628xxx)

   > **Slug otomatis** — tidak perlu kolom slug. URL undangan di-generate otomatis dari nama.
   > Contoh: `Bapak Sanusi` → `domain.com/bapak-sanusi`

2. Klik **File → Bagikan → Publikasikan ke web**
3. Pilih sheet Anda → format **CSV** → klik **Publikasikan**
4. Salin URL yang muncul → tempel ke `NEXT_PUBLIC_SHEETS_CSV_URL`

### 4. Tambahkan File Musik

Letakkan file musik (`.mp3`) di:

```
public/music/nasheed.mp3
```

> Gunakan musik bebas royalti/nasheed. Disarankan: [Free Nasheed resources](https://freemusicarchive.org/)

### 5. Jalankan Lokal

```bash
npm run dev
```

Buka: `http://localhost:3000`

---

## 📁 Struktur File

```
wedding/
├── app/
│   ├── [nama]/page.tsx       ← Halaman undangan per tamu
│   ├── undangan-admin-saiful/
│   │   ├── page.tsx          ← Admin page (server component)
│   │   └── AdminPageClient.tsx ← Admin UI (client component)
│   ├── api/guests/route.ts   ← API refresh daftar tamu
│   ├── page.tsx              ← Halaman 404 kustom
│   ├── layout.tsx            ← Root layout
│   └── globals.css           ← CSS global & design tokens
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── GuestGreetingSection.tsx
│   │   ├── CoupleSection.tsx
│   │   ├── EventSection.tsx
│   │   ├── CountdownTimer.tsx
│   │   └── ClosingSection.tsx
│   └── ui/
│       ├── MusicToggle.tsx
│       └── GoldDivider.tsx
├── lib/
│   └── guests.ts             ← Logika fetch & parse CSV
├── public/
│   └── music/nasheed.mp3     ← File musik (tambahkan manual)
├── .env.local.example
└── README.md
```

---

## 🌐 Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

Set environment variables via Vercel Dashboard:
- `NEXT_PUBLIC_SHEETS_CSV_URL`

---

## 📤 Cara Kirim Undangan via WhatsApp

1. Buka `https://domainanda.com/undangan-admin-saiful`
2. Cari nama tamu di kotak pencarian
3. Klik **📤 Kirim WA** → WhatsApp Web terbuka dengan pesan sudah terisi
4. Kirim!

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Google Fonts** (Cormorant Garamond + Inter + Amiri)

---

*Dibuat dengan ❤️ untuk Saiful & Aulia — 09 April 2026*
