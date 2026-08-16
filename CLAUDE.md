# Konteks proyek — portofolio Fifin Alamsyah

Berkas ini otomatis dibaca Claude Code saat dijalankan di folder ini.
Isinya ringkasan keadaan proyek dan keputusan yang sudah diambil, supaya
percakapan bisa dilanjutkan tanpa mengulang dari nol.

## Ringkas

Situs portofolio pribadi. Astro 7, statis penuh, tanpa framework UI.
Pemilik: Fifin Alamsyah — web developer, fokus frontend/React.
Bahasa situs dan seluruh komentar kode: **Bahasa Indonesia**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Keputusan yang sudah diambil

Jangan diubah tanpa alasan — ini hasil diskusi, bukan bawaan template.

1. **Gaya minimalis modern.** Banyak ruang kosong, tipografi bersih
   (Inter + JetBrains Mono), garis tipis, tanpa bayangan berat.

2. **Tanpa tombol "Kode".** Seluruh proyek berupa kerja klien atau sistem
   internal dengan repo privat. Tombol yang dulu ada dihapus, bukan
   dikosongkan — tautan mati dianggap lebih merugikan daripada tidak ada.

3. **"Demo" diganti "Situs Live".** Hanya muncul bila kolom `live` di YAML
   berisi URL. Bila `live: null`, yang tampil adalah label status
   (misal "Produksi — sistem internal") sebagai teks biasa, bukan tautan.

4. **Bukti teknis dipindahkan ke tangkapan layar dan studi kasus,**
   karena repo tidak bisa dibagikan. Tiap halaman detail punya bagian
   galeri "05 — Tampilan".

5. **Aksen satu warna saja: hijau lumut.** Dipakai hanya di lima titik yang
   sudah punya makna — nomor label bagian, menu aktif, tautan utama, angka
   metrik, penanda status. Sisanya hitam-putih. Menambah warna di luar itu
   akan merusak kesan minimalisnya.

6. **Dark mode ikut sistem + tombol penimpa.** Pilihan disimpan di
   `localStorage` kunci `tema`, dibaca skrip inline di `<head>` sebelum
   halaman digambar agar tidak berkedip.

7. **Animasi sudah dua kali diperkuat** atas permintaan pemilik. Kalau
   diminta menambah lagi, tawarkan dulu parallax atau kursor kustom sambil
   mengingatkan keduanya mulai menabrak gaya minimalis.

## Struktur

```
src/
├─ content/proyek/*.yaml   satu berkas = satu studi kasus
├─ content.config.ts       skema Zod, divalidasi saat build
├─ data/situs.ts           profil, skill, pengalaman, sosial
├─ components/             Header, Footer, Seksi, KartuProyek, Metrik, Galeri, Pager
├─ layouts/Dasar.astro     kerangka HTML, meta, skrip anti-kedip tema
├─ pages/index.astro       beranda
├─ pages/proyek/[slug].astro  halaman detail, satu route untuk semua proyek
├─ styles/global.css       seluruh gaya, variabel warna di paling atas
└─ scripts/animasi.js      tema, menu mobile, animasi gulir, hitung angka
public/gambar/             tangkapan layar (masih kosong)
```

Nama berkas YAML menjadi URL-nya: `toko-online-umkm.yaml` →
`/proyek/toko-online-umkm/`. Menambah proyek cukup menyalin satu YAML.

## Konvensi

- Penamaan variabel, komponen, dan komentar memakai Bahasa Indonesia
  (`Seksi`, `KartuProyek`, `--aksen`, `hitungAngka`). Ikuti pola ini.
- Warna **selalu** lewat variabel CSS di `:root`. Tidak boleh ada hex
  yang dipaku di tengah `global.css` — ini sudah dibersihkan sekali.
- Setiap animasi wajib punya pasangan di blok
  `@media (prefers-reduced-motion:reduce)`.
- Isi yang mengandung HTML sederhana (`<strong>`) dirender dengan
  `set:html`. Isi biasa jangan.

## Belum dikerjakan

- [ ] Ganti data contoh: nama perusahaan dan universitas di `src/data/situs.ts`,
      serta judul dan angka proyek di berkas YAML — semuanya masih karangan.
- [ ] Isi tautan `#`: `sosial` di `situs.ts` dan kolom `live` di YAML.
- [ ] Tangkapan layar. Taruh di `public/gambar/` sesuai nama pada kolom
      `gambar`, lalu ganti kotak placeholder `.shot` di `Galeri.astro` dan
      `.preview` di `[slug].astro` dengan tag `<img>` — contohnya sudah
      ditulis sebagai komentar di kedua berkas.
- [ ] Ganti `site` di `astro.config.mjs` dengan domain asli.
- [ ] Publikasi. Belum ada repo Git dan belum di-deploy.

## Cara memverifikasi perubahan

`npm run build` harus lolos tanpa peringatan — skema Zod akan menolak YAML
yang salah kolom. Setelah itu periksa di browser: mode terang dan gelap,
lebar mobile, dan animasi saat menggulir.

Kontras warna sudah diperiksa memenuhi WCAG AA. Bila mengganti `--aksen`,
hitung ulang kontrasnya terhadap `--bg` di kedua tema.
