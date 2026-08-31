# Konteks proyek — portofolio Fifin Alamsyah

Berkas ini otomatis dibaca Claude Code saat dijalankan di folder ini.
Isinya ringkasan keadaan proyek dan keputusan yang sudah diambil, supaya
percakapan bisa dilanjutkan tanpa mengulang dari nol.

## Ringkas

Situs portofolio pribadi. Astro 7, statis penuh, tanpa framework UI.
Pemilik: Fifin Alamsyah — web developer sistem informasi pendidikan
tinggi. Stack sehari-harinya Laravel + Vue, bukan React.
Bahasa situs dan seluruh komentar kode: **Bahasa Indonesia**.

Astro 7 menuntut **Node ≥ 22.12**. Mesin pemilik masih memakai v20
sebagai bawaan, jadi `npm run build` gagal sebelum versinya dinaikkan
(`nvm use 22`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

Sudah terbit di **https://fifinal.github.io/** — lihat bagian
"Publikasi" di bawah.

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

4. **Bukti teknis dipindahkan ke tangkapan layar, diagram, dan studi
   kasus,** karena repo tidak bisa dibagikan.

   Untuk sistem yang kerjanya di balik layar, **diagram arsitektur lebih
   kuat daripada tangkapan layar** — dan jauh lebih aman, karena tidak
   memuat data pribadi yang harus disensor lebih dulu.

   Kolom `diagram` di YAML bersifat opsional. Bila diisi, muncul bagian
   "05 — Arsitektur" dan nomor bagian sesudahnya bergeser satu; bila
   tidak, penomoran lama tetap berlaku. Label dihitung di `[slug].astro`,
   jangan dipaku.

   Diagram digambar ulang pada tingkat abstraksi yang aman — **jangan**
   menyalin diagram internal apa adanya. Nama institusi klien, topologi
   server, nama kelas, dan nama tabel tidak boleh keluar.

   SVG-nya disisipkan langsung ke HTML lewat `Diagram.astro`, **bukan**
   `<img>`. SVG di dalam `<img>` terkunci dari halaman induknya dan tidak
   bisa membaca variabel CSS, jadi tidak akan ikut tombol penimpa tema
   pada keputusan No. 6. Warnanya lewat kelas `.dg-*` di `global.css`.

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

8. **Jangan mengarang isi.** Situs ini pernah dua kali berisi data
   template — portofolio 2021 tayang empat tahun dengan "John Joe" dan
   Lorem ipsum, lalu versi Astro ini sempat memuat perusahaan, kampus,
   dan metrik fiktif yang terbaca meyakinkan. Yang kedua lebih berbahaya
   justru karena tidak terlihat palsu.

   Aturannya: isi hanya yang bisa ditunjuk asalnya. Bila sebuah bagian
   menuntut cerita orang pertama — kenapa sebuah keputusan diambil, apa
   yang macet, apa yang dipelajari — tulis penanda `[ISI]` berisi
   pertanyaan terarah dan tanyakan pada pemilik. Halaman yang tampak
   belum selesai lebih baik daripada halaman yang meyakinkan tapi palsu.

9. **Bagian "01 — Latar belakang", "02 — Pendekatan", dan "03 — Proses"
   sudah dihapus** dari halaman detail, atas keputusan pemilik pada 31
   Agustus 2026. Kolom `masalah`, `solusi`, dan `proses` dibuang dari
   skema Zod dan dari ketujuh YAML — termasuk dari `simbelmawa` dan
   `sistem-langitan` yang isinya sudah lengkap.

   Alasannya: 37 dari 64 penanda `[ISI]` yang tersisa berada di ketiga
   kolom itu, dan penanda tampil di situs publik. Konsekuensinya halaman
   detail kini hanya menyajikan fitur, diagram, galeri, metrik, dan
   refleksi — bukti teknis bertumpu pada diagram, bukan lagi pada narasi.

   Kalau suatu saat mau dikembalikan, isinya masih ada di riwayat git
   sebelum penghapusan ini. Penomoran bagian dihitung di `[slug].astro`
   dan sekarang mulai dari `01 — Hasil kerja`.

10. **Halaman CV terbit di `/cv/`, dan `/cv.pdf` dibuat dari halaman itu
    juga.** Disusun 31 Agustus 2026 dari berkas CV milik pemilik
    (`~/Sites/cv.html`), bukan dikarang, tapi digambar ulang dengan
    bahasa visual portofolio — bukan meniru gaya kuning-biru berkas
    aslinya.

    Alamat rumah dan nomor telepon yang ada di berkas asli **sengaja
    tidak diterbitkan**; yang tampil hanya email dan kota. Halaman ini
    publik dan terindeks mesin pencari.

    PDF-nya **tidak disimpan di repositori.** Ia dicetak ulang tiap
    penerbitan oleh langkah "Cetak CV ke PDF" di `deploy.yml`, yang
    menjalankan `npm run cv:pdf -- --ke-dist` setelah build: menyalakan
    `astro preview` di atas `dist/`, lalu mencetak `/cv/` dengan Chrome
    tanpa jendela langsung ke `dist/cv.pdf`. Runner `ubuntu-latest`
    sudah memuat Google Chrome di `/usr/bin/google-chrome` — kalau suatu
    saat GitHub mencabutnya, penerbitan gagal terang-terangan di langkah
    itu, bukan diam-diam menerbitkan tautan mati.

    Di mesin sendiri, `npm run cv:pdf` (tanpa argumen) membangun dulu
    lalu menaruh hasilnya di `public/cv.pdf` — untuk memeriksa hasil
    cetaknya sebelum push; sudah masuk `.gitignore`. Ingat: `npm run
    build` biasa **tidak** membuat PDF, jadi `/cv.pdf` akan 404 di dev.

    Cara ini sempat diganti pembuatan di peramban dengan `html2pdf.js`
    pada 31 Agustus 2026, lalu dikembalikan di hari yang sama. Alasannya
    terukur: hasil peramban adalah PDF **raster ±500 KB** yang teksnya
    tidak bisa disorot, dicari, maupun dibaca mesin pemindai CV,
    sedangkan cara ini menghasilkan **197 KB dengan teks utuh**.
    Percobaan itu ada di commit `bc5ce6a` — beserta empat jebakan
    html2canvas yang sempat ditemukan, kalau suatu saat dicoba lagi.

    Gaya cetaknya disetel supaya muat **tepat satu halaman A4**, dan
    dipakai dua-duanya: oleh dialog cetak peramban dan oleh tombol unduh.
    Menambah satu pengalaman atau beberapa baris sorotan akan membuatnya
    tumpah ke halaman kedua — periksa jumlah halamannya setelah berubah.
    Tiga hal lain yang mudah terlewat di blok `@media print`, semuanya
    sudah pernah menggigit:

    1. Pemilih warnanya harus menyebut `:root:not([data-tema="terang"])`,
       kalau tidak mesin bertema gelap mencetak CV berlatar hitam.
    2. Aturan penyembunyi kerangka situs harus memakai
       `header:not(.cv-kepala)` — kepala CV juga bertag `<header>`.
    3. `animasi.js` membungkus **semua** `h1` dan `h2` dalam `.mask-in`
       yang tersembunyi sampai animasi gulirnya jalan. Blok cetak wajib
       memaksa `.mask{overflow:visible}` dan `.mask-in{transform:none;
       transition:none}` — tanpa itu nama dan judul bagian hilang dari
       kertas dan hanya menyisakan garis bawahnya.

    Cara memeriksa PDF-nya tanpa memasang apa pun: `qlmanage -t -s 1400
    -o <folder> berkas.pdf` menghasilkan PNG halaman pertama yang bisa
    dilihat langsung. **Selalu periksa begitu.** Semua kesalahan di atas
    tidak terlihat di halaman web, dan sebagian tidak terlihat pula dari
    ukuran berkas atau jumlah halamannya — PDF 500 KB satu halaman pun
    bisa kehilangan seluruh judulnya.

## Struktur

```
src/
├─ content/proyek/*.yaml   satu berkas = satu studi kasus
├─ content.config.ts       skema Zod, divalidasi saat build
├─ data/situs.ts           profil, skill, pengalaman, sosial
├─ components/             Header, Footer, Seksi, KartuProyek, Metrik, Galeri, Diagram, Pager
├─ diagram/*.svg           diagram arsitektur, disisipkan inline (bukan <img>)
├─ layouts/Dasar.astro     kerangka HTML, meta, skrip anti-kedip tema
├─ pages/index.astro       beranda
├─ pages/proyek/[slug].astro  halaman detail, satu route untuk semua proyek
├─ pages/cv.astro          halaman CV, sekaligus sumber berkas cv.pdf
├─ data/cv.ts              isi CV — lebih rinci daripada `pengalaman` di situs.ts
├─ styles/global.css       seluruh gaya, variabel warna di paling atas
└─ scripts/animasi.js      tema, menu mobile, animasi gulir, hitung angka
scripts/buat-cv-pdf.mjs    membuat public/cv.pdf dari halaman /cv/
public/gambar/             foto profil; tangkapan layar proyek masih kosong
```

Nama berkas YAML menjadi URL-nya: `simbelmawa.yaml` →
`/proyek/simbelmawa/`. Menambah proyek cukup menyalin satu YAML.

Tujuh studi kasus yang ada sekarang, urut sesuai kolom `urutan`:
`simbelmawa`, `sistem-langitan`, `sistem-langitan-v2`, `slf-sync`,
`sistem-magang`, `peksiminas`, `unisco`.

Keluarga Langitan sengaja dikelompokkan di urutan 2–4 — v1, penulisan
ulangnya, lalu alat sinkronisasinya — bukan diurutkan menurut jumlah
commit.

## Konvensi

- Penamaan variabel, komponen, dan komentar memakai Bahasa Indonesia
  (`Seksi`, `KartuProyek`, `--aksen`, `hitungAngka`). Ikuti pola ini.
- Warna **selalu** lewat variabel CSS di `:root`. Tidak boleh ada hex
  yang dipaku di tengah `global.css` — ini sudah dibersihkan sekali.
- Setiap animasi wajib punya pasangan di blok
  `@media (prefers-reduced-motion:reduce)`.
- Isi yang mengandung HTML sederhana (`<strong>`) dirender dengan
  `set:html`. Isi biasa jangan.
- **Tidak semua kolom menerima HTML.** `pengalaman[].rincian` di
  `situs.ts` dirender sebagai `{r}` teks biasa di `index.astro`, jadi
  tag yang ditulis di sana akan tampil mentah. Periksa dulu cara
  sebuah kolom dirender sebelum menyisipkan `<strong>`.

## Publikasi

Terbit di **https://fifinal.github.io/** — situs pengguna GitHub Pages,
dilayani dari akar domain, jadi `base` di `astro.config.mjs` tidak
diisi.

Alurnya di `.github/workflows/deploy.yml`: tiap push ke `main`
membangun dengan Node 22 lalu menerbitkan lewat `actions/deploy-pages`.
Sekitar 40 detik. Sumber Pages disetel ke `workflow`, **bukan** branch —
kalau kembali ke `legacy`, Jekyll akan mencoba memproses sumber Astro
dan gagal di tiap push.

Portofolio pertama (2021–2022, template yang tak pernah diisi)
diarsipkan di repo `fifinal/portfolio-lama-2021`.

## Sumber data

Isi `situs.ts` dan bagian faktual tiap YAML disusun dari riwayat
kontribusi GitHub yang bisa diperiksa ulang, bukan dari ingatan:

- Statistik kontributor tiap repo (`gh api repos/OWNER/REPO/contributors`)
- Rentang commit pemilik (`gh api "repos/.../commits?author=fifinal"`)
- Struktur repo — berkas rute menandakan jumlah peran pengguna,
  `.env.example` menandakan basis data (PostgreSQL, bukan MySQL)

Pemilik punya **dua akun**: `fifinal` dan `fifinalamsyah`. Kontribusinya
terpecah, jadi keduanya harus dijumlahkan saat menghitung metrik.

Kerjanya tersebar di dua organisasi yang tidak muncul di `gh repo list`
biasa — `umaha-ac-id` (tempat bekerja) dan `kemdikbud-id` (freelance,
kini bernama Kemdiktisaintek). Pakai `gh api "user/repos?affiliation=..."`
untuk melihatnya.

## Belum dikerjakan

- [ ] **27 penanda `[ISI]` di enam berkas YAML** — tersisa di kolom
      `tantangan` (10), `belajar` (5), dan keterangan `gambar` (12).
      Penanda ini **tampil di situs publik**, jadi ini pekerjaan paling
      mendesak. `simbelmawa.yaml` sudah bersih.

      Dari 87 penanda semula: 23 sudah diisi lewat tanya-jawab dengan
      pemilik (`simbelmawa` 10, `sistem-langitan` 13), dan 37 sisanya
      ikut terhapus bersama kolom `masalah`, `solusi`, dan `proses` —
      lihat keputusan No. 9.

      Cara mengisinya: **tanya pemilik, jangan mengarang.** Tawarkan
      beberapa kemungkinan jawaban yang masuk akal agar ia tinggal
      memilih, lalu tulis prosanya dari pilihan itu. Jawaban "tidak ada
      yang berubah" atau "sudah stabil sejak awal" adalah jawaban sah —
      jangan didramatisasi menjadi cerita penyelamatan.
- [x] Diagram arsitektur — **selesai untuk ketujuh proyek.** Masing-masing
      sengaja berbeda bentuk, karena diagram yang seragam tidak menambah
      informasi:

      | Berkas | Bentuk | Yang diberi aksen |
      |---|---|---|
      | `sistem-langitan.svg` | lapisan berurutan | resolusi multi-tenant |
      | `simbelmawa.svg` | peran mengerucut ke satu API | pemisahan kewenangan |
      | `sistem-magang.svg` | perjalanan peserta antar tahap | tahap menyeberang ke industri |
      | `peksiminas.svg` | penyempitan berjenjang | penjurian berjalur terpisah |
      | `sistem-langitan-v2.svg` | dua permukaan menyatu di atas basis data warisan | basis data warisan |
      | `slf-sync.svg` | jembatan satu arah dengan jalan pulang | jalur pembatalan |
      | `unisco.svg` | hub — masukan menyatu lalu memancar | sesi ujian |

      Kosakata visual yang berlaku di ketujuhnya, ikuti bila menambah
      diagram baru. **Kotak** putus-putus (`.dg-cip`) berarti di luar
      kendali sistem — sistem luar seperti PDDikti dan Feeder, juga
      institusi penyetor seperti perguruan tinggi dan provinsi.
      **Garis** putus-putus (`.dg-cabang`) tidak ada hubungannya dengan
      kendali; artinya percabangan atau penempelan peran ke tahap. Alur
      utama selalu garis tegas (`.dg-alur`), termasuk bila melengkung —
      keliru memakai `.dg-cabang` untuk alur inti sudah pernah terjadi
      di UNISCO dan SLF Sync, dan sudah dibetulkan. Dan **hanya satu**
      elemen per diagram yang boleh diberi aksen
      hijau — pilih yang paling menjelaskan inti persoalannya, dan itu
      boleh berupa kendala, bukan hanya solusi. Pada v2 misalnya, yang
      diberi aksen adalah basis data warisannya, bukan lapisan layanan
      yang dibangun untuk mengatasinya.
- [x] Tautan `sosial` LinkedIn dan Instagram sudah terisi, diambil dari
      berkas CV pemilik.
- [ ] Kolom `live` terisi di empat proyek — simbelmawa, sistem-langitan,
      sistem-magang, unisco — dan sengaja dibiarkan `null` di tiga
      sisanya karena URL-nya tidak lolos uji: `langitan-v2.umaha.ac.id`
      mengembalikan halaman "Not Found", `slf-sync.umaha.ac.id` tidak
      terjangkau dari luar, dan peksiminas belum punya URL.

      **Uji dulu sebelum memasang tautan.** Domain UMAHA berada di
      belakang Cloudflare: `curl` selalu dijawab 403 meski situsnya
      hidup. Yang sahih adalah membukanya dengan peramban sungguhan.
- [ ] Tangkapan layar. Taruh di `public/gambar/` sesuai nama pada kolom
      `gambar`, lalu ganti kotak placeholder `.shot` di `Galeri.astro`
      dengan tag `<img>` — contohnya sudah ditulis sebagai komentar di
      berkas itu.

      **Hati-hati:** ini sistem kementerian dan kampus. Tangkapan layar
      berpotensi memuat data mahasiswa asli dan harus disensor lebih
      dulu.

      Pratinjau besar di kepala halaman detail (`.preview`) **sudah
      dihapus** atas permintaan pemilik, beserta gayanya di `global.css`.
      Bukti visual kini hanya lewat galeri dan diagram.
- [x] "Lulus 2019" terkonfirmasi — berkas CV pemilik menyebut Teknik
      Informatika 2015–2019.
- [x] Beda tanggal mulai di UMAHA sudah disamakan ke **Juli 2021**
      sesuai CV, bukan 2022 yang disimpulkan dari commit pertama.
      Ringkasan hero ikut berubah jadi "Lima tahun terakhir".

      Catatan bila nanti membaca ulang: `periode` di
      `sistem-langitan.yaml` tetap "2022 — Sekarang" dan narasinya
      menyebut "Ketika saya masuk pada 2022". Itu bukan salah — yang
      2021 adalah mulai bekerja di UMAHA, yang 2022 adalah mulai
      memegang Sistem Langitan. Jangan disamakan tanpa bertanya dulu.
- [ ] `profil.status` masih berbunyi "Terbuka untuk peluang baru" —
      bawaan template, sementara pemilik sedang bekerja.

## Cara memverifikasi perubahan

`npm run build` harus lolos tanpa peringatan — skema Zod akan menolak YAML
yang salah kolom. Setelah itu periksa di browser: mode terang dan gelap,
lebar mobile, dan animasi saat menggulir.

Kontras warna sudah diperiksa memenuhi WCAG AA. Bila mengganti `--aksen`,
hitung ulang kontrasnya terhadap `--bg` di kedua tema.
