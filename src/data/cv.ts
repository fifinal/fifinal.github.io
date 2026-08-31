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
   * yang 1335px membuat berkas cv.pdf membengkak jadi setengah megabita.
   * Aslinya sudah dihapus dari public/ karena tidak terpakai — masih
   * bisa diambil dari commit 588f210 bila suatu saat perlu potongan
   * yang berbeda. Kosongkan (null) bila tidak ingin ada foto.
   */
  foto: '/gambar/foto-360.jpg',

  /** Dibuat lewat `npm run cv:pdf`, lalu ikut di-commit. */
  berkasPdf: '/cv.pdf',

  ringkas:
    'Full-Stack Engineer yang terbiasa membangun sistem multi-pengguna berskala besar. Fokus pada REST API, alur bisnis yang berlapis — kewenangan berbasis peran, persetujuan bertingkat — optimasi performa basis data, serta memindahkan sistem warisan ke arsitektur yang lebih modular dan mudah dirawat.',

  keahlian: [
    { judul: 'Bahasa & Kerangka Kerja', daftar: ['PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'REST API', 'JWT'] },
    { judul: 'Antarmuka', daftar: ['Vue 3', 'Inertia.js', 'React', 'Blade', 'Tailwind'] },
    { judul: 'Basis Data', daftar: ['PostgreSQL', 'Oracle', 'MySQL'] },
    { judul: 'Perkakas', daftar: ['Git', 'Docker', 'GitHub Actions', 'Linux'] },
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
          judul: 'Sistem Akreditasi Internasional',
          periode: 'Jan 2023 — Des 2024',
          isi: 'Pengembangan fitur dari hulu ke hilir, dengan alur verifikasi dan hak akses berbasis peran.',
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
