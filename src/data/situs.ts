/**
 * Semua isi statis situs dikumpulkan di sini supaya mudah diubah
 * tanpa menyentuh komponen.
 */

export const profil = {
  nama: 'Fifin Alamsyah',
  logo: { depan: 'Fifin', belakang: '.dev' },
  peran: 'Web Developer',
  email: 's.fifinalamsyah@gmail.com',
  status: 'Terbuka untuk peluang baru',
  judulHero: 'Membangun web yang rapi, cepat, dan berguna.',
  ringkasHero:
    'Halo, saya Fifin — seorang web developer yang fokus pada frontend modern dan pengalaman pengguna. Saya senang mengubah ide jadi produk yang benar-benar dipakai orang.',
  deskripsiSitus:
    'Portofolio Fifin Alamsyah, web developer. Kumpulan proyek, pengalaman, dan kontak.',
};

export const navigasi = [
  { teks: 'Tentang', anchor: 'tentang' },
  { teks: 'Skill', anchor: 'skill' },
  { teks: 'Proyek', anchor: 'proyek' },
  { teks: 'Pengalaman', anchor: 'pengalaman' },
  { teks: 'Kontak', anchor: 'kontak' },
];

export const tentang = {
  paragraf: [
    'Saya mulai ngoding karena penasaran bagaimana sebuah tombol di layar bisa mengubah sesuatu di dunia nyata. Rasa penasaran itu belum hilang sampai sekarang.',
    'Fokus saya ada di <strong>pengembangan frontend</strong> dengan JavaScript dan React, tapi saya juga nyaman bekerja di sisi backend ketika sebuah proyek membutuhkannya. Prinsip yang saya pegang sederhana: kode harus mudah dibaca orang lain, dan antarmuka harus mudah dipakai siapa saja.',
    'Di luar pekerjaan, saya suka membaca dokumentasi teknologi baru, menulis catatan belajar, dan sesekali berkontribusi di proyek open source.',
  ],
  fakta: [
    { label: 'Lokasi', nilai: 'Indonesia' },
    { label: 'Peran', nilai: 'Web Developer' },
    { label: 'Fokus', nilai: 'Frontend / React' },
    { label: 'Status', nilai: 'Tersedia' },
    { label: 'Email', nilai: 's.fifinalamsyah@gmail.com' },
  ],
};

export const skill = [
  { judul: 'Frontend', daftar: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'] },
  { judul: 'Backend', daftar: ['Node.js', 'Express', 'REST API', 'MySQL', 'MongoDB'] },
  { judul: 'Tools', daftar: ['Git', 'GitHub', 'Figma', 'Vercel', 'Docker'] },
];

export const pengalaman = [
  {
    posisi: 'Frontend Developer',
    periode: '2024 — Sekarang',
    tempat: 'Nama Perusahaan · Jakarta',
    rincian: [
      'Mengembangkan dan merawat antarmuka produk utama yang dipakai ribuan pengguna aktif.',
      'Membangun design system internal sehingga waktu pembuatan halaman baru berkurang setengahnya.',
      'Bekerja erat dengan tim desain dan backend dalam siklus rilis dua mingguan.',
    ],
  },
  {
    posisi: 'Web Developer (Freelance)',
    periode: '2022 — 2024',
    tempat: 'Mandiri · Remote',
    rincian: [
      'Menangani lebih dari 10 proyek klien: company profile, landing page, dan toko online.',
      'Mengurus proyek dari pertemuan awal, desain, pengembangan, hingga peluncuran.',
    ],
  },
  {
    posisi: 'S1 Teknik Informatika',
    periode: '2018 — 2022',
    tempat: 'Nama Universitas',
    rincian: [
      'Fokus pada rekayasa perangkat lunak dan interaksi manusia–komputer.',
      'Tugas akhir tentang optimasi performa aplikasi web berbasis single-page application.',
    ],
  },
];

export const sosial = [
  { teks: 'GitHub', url: 'https://github.com/fifinal' },
  { teks: 'LinkedIn', url: '#' },
  { teks: 'Instagram', url: '#' },
];
