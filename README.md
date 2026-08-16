# Portofolio Fifin Alamsyah — versi Astro

Situs portofolio statis yang dibangun dengan [Astro](https://astro.build).
Seluruh halaman dihasilkan saat build, tanpa JavaScript framework di sisi
pengunjung — hanya sekitar 4 KB skrip animasi.

## Menjalankan

```bash
npm install      # sekali saja
npm run dev      # buka http://localhost:4321
npm run build    # hasil siap unggah ada di dist/
npm run preview  # cek hasil build secara lokal
```

Butuh Node.js versi 18.20 atau lebih baru.

## Struktur

```
src/
├─ content/proyek/*.yaml   ← isi studi kasus, satu berkas per proyek
├─ content.config.ts       ← skema data proyek (divalidasi saat build)
├─ data/situs.ts           ← profil, skill, pengalaman, tautan sosial
├─ components/             ← potongan tampilan yang dipakai berulang
├─ layouts/Dasar.astro     ← kerangka HTML, meta tag, pemanggilan skrip
├─ pages/
│  ├─ index.astro          ← beranda
│  └─ proyek/[slug].astro  ← halaman detail, dibuat otomatis per berkas YAML
├─ styles/global.css       ← seluruh gaya situs
└─ scripts/animasi.js      ← animasi gulir, hitung angka, menu mobile
public/gambar/             ← tangkapan layar proyek
```

## Tema gelap & warna aksen

Situs mengikuti setelan gelap/terang perangkat pengunjung, dan ada tombol di
navigasi untuk menimpanya. Pilihan itu disimpan di `localStorage` dengan kunci
`tema`, lalu dibaca kembali oleh skrip kecil di dalam `<head>` sebelum halaman
digambar — supaya tidak ada kedipan putih saat halaman dibuka.

Semua warna hidup sebagai variabel CSS di bagian atas `src/styles/global.css`:

- `:root` berisi tema terang
- blok `@media (prefers-color-scheme:dark)` untuk pengunjung yang belum memilih
- blok `:root[data-tema="gelap"]` untuk yang menekan tombol

Warna aksen (`--aksen`) sengaja hanya dipakai di lima tempat yang sudah punya
makna: nomor label bagian, menu yang sedang dibaca, tautan utama, angka metrik,
dan penanda status. Mengganti seluruh nuansa situs cukup dengan mengubah nilai
`--aksen` di kedua tema. Semua kombinasi warna sudah diperiksa memenuhi
kontras WCAG AA.

## Menambah proyek baru

1. Salin salah satu berkas di `src/content/proyek/` dan beri nama baru,
   misalnya `aplikasi-kasir.yaml`. Nama berkas menjadi alamat halamannya:
   `/proyek/aplikasi-kasir/`.
2. Isi kolomnya. Skema di `src/content.config.ts` akan menolak build bila ada
   kolom yang salah ketik atau tertinggal — jadi kesalahan ketahuan lebih awal.
3. Atur `urutan` untuk menentukan posisi di beranda.
4. Simpan tangkapan layar ke `public/gambar/` sesuai nama pada kolom `gambar`.

Halaman detail, kartu di beranda, dan navigasi antar proyek terbentuk sendiri.

## Catatan isi

- Kolom `live` diisi URL bila proyek bisa dibuka publik. Isi `null` bila tidak,
  dan kolom `status` akan tampil sebagai gantinya.
- Beberapa kolom menerima HTML sederhana seperti `<strong>` untuk penekanan.
- Gambar masih berupa kotak placeholder. Setelah tangkapan layar tersedia,
  ganti isi `.shot` di `src/components/Galeri.astro` dan `.preview` di
  `src/pages/proyek/[slug].astro` dengan tag `<img>`; contohnya sudah
  dituliskan sebagai komentar di kedua berkas itu.

## Sebelum dipublikasikan

- Ganti `site` di `astro.config.mjs` dengan domain aslimu.
- Isi tautan `#` pada `sosial` di `src/data/situs.ts` dan kolom `live` di berkas YAML.
- Perbarui nama perusahaan dan universitas pada `pengalaman` di `src/data/situs.ts`.

## Publikasi

Hasil build berupa berkas statis di `dist/`, jadi bisa diunggah ke mana saja.
Untuk Netlify, Vercel, atau Cloudflare Pages: perintah build `npm run build`,
folder keluaran `dist`.
