/**
 * Isi halaman CV (/cv/).
 *
 * Disusun dari berkas CV milik pemilik sendiri, bukan dikarang. Bedanya
 * dengan `situs.ts`: di sini pengalaman ditulis lebih rinci lengkap
 * dengan sorotan proyek, karena halaman ini memang dibaca perekrut.
 *
 * Kontak sengaja dibatasi email dan kota saja. Alamat RT/RW dan nomor
 * telepon yang ada di berkas CV asli tidak diterbitkan — halaman ini
 * publik dan terindeks mesin pencari.
 */

export const cv = {
  namaLengkap: 'Slamet Fifin Alamsyah',
  peran: 'Full-Stack / Back-End Engineer',
  lokasi: 'Sidoarjo, Jawa Timur',

  /**
   * Sengaja 360px: fotonya hanya ditampilkan 120px, dan versi aslinya
   * yang 1335px membuat berkas PDF-nya membengkak tanpa guna.
   * Aslinya sudah dihapus dari public/ karena tidak terpakai — masih
   * bisa diambil dari commit 588f210 bila suatu saat perlu potongan
   * yang berbeda. Kosongkan (null) bila tidak ingin ada foto.
   */
  foto: '/gambar/foto-360.jpg',

  /** Dibuat lewat `npm run cv:pdf`; dicetak ulang tiap penerbitan. */
  berkasPdf: '/cv.pdf',

  ringkas:
    'Full-Stack Engineer yang terbiasa membangun sistem multi-pengguna berskala besar. Fokus pada REST API, alur bisnis yang berlapis — kewenangan berbasis peran, persetujuan bertingkat — optimasi performa basis data, serta memindahkan sistem warisan ke arsitektur yang lebih modular dan mudah dirawat.',

  // Label kelompok sengaja Bahasa Inggris — istilahnya memang dikenal
  // begitu di lowongan dan CV, dan beranda pun sudah memakai Frontend,
  // Backend, Tools. Sisa halaman tetap Bahasa Indonesia.
  keahlian: [
    { judul: 'Languages & Frameworks', daftar: ['PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'REST API', 'JWT'] },
    { judul: 'UI', daftar: ['Vue 3', 'Inertia.js', 'React', 'Blade', 'Tailwind'] },
    { judul: 'Databases', daftar: ['PostgreSQL', 'Oracle', 'MySQL'] },
    { judul: 'Tools', daftar: ['Git', 'Docker', 'GitHub Actions', 'Linux'] },
  ],

  pengalaman: [
    {
      posisi: 'Full-Stack / Back-End Engineer (Freelance)',
      periode: 'Jan 2023 — Sekarang',
      tempat: 'Direktorat Belmawa · Kemdiktisaintek',
      deskripsi:
        'Mengembangkan dan merawat platform multi-pengguna berarsitektur API. Berfokus pada REST API, alur bisnis berbasis kewenangan peran, serta optimasi performa basis data untuk data berskala nasional.',
      tags: ['Laravel', 'REST API', 'Vue 3', 'Inertia.js', 'PostgreSQL'],
      sorotan: [
        {
          judul: 'Sistem PKM — Program Kreativitas Mahasiswa',
          periode: 'Jan 2023 — Sekarang',
          isi: 'Memindahkan sistem warisan ke REST API berbasis Laravel, dikerjakan bersama tim frontend React dan mobile Flutter yang memanggil API yang sama.',
        },
        {
          judul: 'Platform Magang Berdampak',
          periode: '2025',
          isi: 'Membangun alur lamaran magang dari hulu ke hilir — pendaftaran, verifikasi berbasis peran, pengelolaan dokumen, persetujuan bertingkat, hingga pelaporan — berikut optimasi kueri untuk volume data besar.',
        },
        {
          judul: 'Sistem MTQMN — Musabaqah Tilawatil Qur’an Mahasiswa Nasional',
          periode: '2025',
          isi: 'Pendaftaran peserta dan kategori lomba, pengelolaan tim, verifikasi dokumen, penilaian, pelaporan, serta ekspor otomatis ke PDF dan lembar sebar.',
        },
        {
          judul: 'Sistem Hibah Akreditasi Internasional',
          periode: 'Jan 2023 — Des 2024',
          isi: 'Pengelolaan program hibahnya — pengusulan, verifikasi berjenjang, sampai pelaporan. Yang dikelola dananya, bukan penilaian akreditasinya.',
        },
      ],
    },
    {
      posisi: 'Full-Stack Developer',
      periode: 'Jul 2021 — Sekarang',
      tempat: 'Universitas Maarif Hasyim Latif · Sidoarjo',
      deskripsi:
        'Pemrogram utama Sistem Informasi Akademik. Merawat dan mengembangkan sistem berbasis PHP native, sekaligus membangun versi keduanya dengan Laravel. Menangani integrasi dan sinkronisasi data akademik dengan sistem luar — termasuk Feeder PDDikti — beserta optimasi proses sinkronisasinya untuk data mahasiswa berskala besar.',
      tags: ['PHP', 'Laravel', 'Oracle', 'CodeIgniter', 'Docker'],
      sorotan: [],
    },
  ],

  /**
   * Menjawab pertanyaan yang lazim ditanyakan saat melamar posisi
   * pengembang sistem informasi kampus: sistem apa, modul apa, peran
   * apa, teknologi apa, dan integrasi apa. Angka commit dan jumlah
   * modul di sini berasal dari riwayat repositori, bukan ingatan.
   *
   * Tulis hanya yang benar-benar dikerjakan. Modul yang cuma dirawat
   * disebut sebagai dirawat — jangan diangkat jadi seolah dibangun.
   */
  sistemPT: [
    {
      nama: 'Sistem Langitan — Sistem Informasi Akademik',
      konteks: 'UMAHA · 2022 — Sekarang',
      ringkas:
        'SIAKAD multi-tenant: satu basis kode melayani beberapa perguruan tinggi sekaligus, dengan lima puluh modul yang saling terhubung dan empat jenis pengguna yang bercabang menjadi lebih dari tiga puluh peran.',
      peran: 'Pengembang utama — kontributor terbesar kedua dari dua belas orang, 484 commit',
      modul:
        'Akademik inti (penerimaan mahasiswa baru, KRS, perkuliahan, nilai, transkrip, wisuda), keuangan mahasiswa, kepegawaian dan penugasan dosen, pelaporan serta cetak dokumen. Modul kuisioner evaluasi penjaminan mutu saya rawat, bukan saya bangun.',
      teknologi: 'PHP 8.1, Oracle, Smarty, Docker, GitHub Actions, PHPStan',
      integrasi: 'Pelaporan data akademik ke PDDikti',
    },
    {
      nama: 'Sistem Langitan v2 — Penulisan Ulang SIAKAD',
      konteks: 'UMAHA · Feb 2025 — Sekarang',
      ringkas:
        'Menulis ulang SIAKAD di atas basis data Oracle warisan yang tidak boleh diubah, karena skema yang sama masih melayani versi lama di produksi.',
      peran: 'Pengembang utama — 170 commit, 106 model memetakan skema warisan',
      modul:
        'Empat belas peran dengan berkas rute dan kewenangan terpisah — mahasiswa, dosen, keuangan, penjaminan mutu, hingga rektor. Menu dan remah roti dirender dari tabel menu warisan.',
      teknologi: 'Laravel 12, Inertia, Vue 3, Oracle, JWT, Pest',
      integrasi: 'Autentikasi ganda — sesi untuk web, token JWT untuk klien mobile yang sudah berjalan',
    },
    {
      nama: 'SLF Sync — Penghubung ke Pangkalan Data Nasional',
      konteks: 'UMAHA · 2022 — Sekarang',
      ringkas:
        'Alat sinkronisasi data akademik kampus ke pangkalan data nasional, berikut jalur pembatalan untuk menarik kembali kiriman yang keliru — karena kesalahan di sana tidak bisa sekadar ditimpa.',
      peran: 'Pengembang utama — dua orang merawat seluruh sistem, 93 commit',
      modul:
        'Sinkronisasi data akademik, pembatalan hasil sinkronisasi, penghapusan dan penautan data, antarmuka pemantauan apa yang sudah dan belum terkirim.',
      teknologi: 'CodeIgniter, SOAP, Smarty, Docker',
      integrasi:
        'Neo Feeder PDDikti — dua generasi mekanisme sinkronisasi berjalan berdampingan, yang lama tidak dimatikan begitu saja',
    },
    {
      nama: 'UNISCO — Platform Kompetisi dan Ujian Daring',
      konteks: 'UMAHA · Jun — Agu 2026',
      ringkas:
        'Platform lomba dan olimpiade tingkat nasional yang diselenggarakan kampus. Satu alur pendaftaran bercabang menjadi dua jalur: lomba akademik diadu lewat ujian CBT serentak, lomba non-akademik lewat berkas persyaratan yang diverifikasi panitia. Babak finalnya luring, di luar sistem.',
      peran: 'Pengembang utama — kontributor terbesar, 85 commit',
      modul:
        'Pendaftaran perorangan dan kelompok beserta pembayarannya, bank soal per bidang dan tahapan, sesi ujian CBT terjadwal, unggahan dan verifikasi berkas untuk jalur non-akademik, penilaian serta pengumuman hasil penyisihan.',
      teknologi: 'Laravel, PHP 8.2, Blade, Tailwind, Docker',
      integrasi: null,
    },
  ],

  pendidikan: [
    {
      judul: 'S1 Teknik Informatika',
      periode: '2015 — 2019',
      tempat: 'Universitas Maarif Hasyim Latif · Sidoarjo',
      rincian:
        'Skripsi: implementasi deep learning untuk klasifikasi tanaman toga berbasis Android, memakai convolutional neural network.',
    },
  ],
};
