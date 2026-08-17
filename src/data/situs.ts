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
    'Halo, saya Fifin — web developer yang sehari-hari membangun sistem informasi pendidikan tinggi. Empat tahun terakhir saya mengerjakan perangkat lunak yang dipakai perguruan tinggi se-Indonesia, dari pengelolaan hibah mahasiswa sampai sistem akademik kampus.',
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
    'Kerja saya sebagian besar <strong>full-stack dengan Laravel dan Vue</strong> — membangun API yang melayani banyak jenis pengguna sekaligus, lalu antarmuka yang membuatnya masuk akal dipakai. Prinsip yang saya pegang sederhana: kode harus mudah dibaca orang lain, dan antarmuka harus mudah dipakai siapa saja.',
    'Sistem yang saya kerjakan biasanya punya banyak peran pengguna dengan kebutuhan berbeda — mahasiswa, dosen, operator kampus, reviewer, pengelola kementerian. Bagian yang paling menantang jarang soal teknologinya, melainkan menjaga agar setiap peran hanya melihat apa yang memang perlu ia lihat.',
  ],
  fakta: [
    { label: 'Lokasi', nilai: 'Sidoarjo, Jawa Timur' },
    { label: 'Peran', nilai: 'Web Developer' },
    { label: 'Fokus', nilai: 'Laravel / Vue' },
    { label: 'Status', nilai: 'Tersedia' },
    { label: 'Email', nilai: 's.fifinalamsyah@gmail.com' },
  ],
};

export const skill = [
  { judul: 'Frontend', daftar: ['Vue', 'TypeScript', 'JavaScript', 'Blade', 'Tailwind', 'SCSS'] },
  { judul: 'Backend', daftar: ['PHP', 'Laravel', 'REST API', 'JWT', 'PostgreSQL', 'Redis'] },
  { judul: 'Tools', daftar: ['Git', 'Docker', 'GitHub Actions', 'Linux'] },
];

export const pengalaman = [
  {
    posisi: 'Web Developer',
    periode: '2022 — Sekarang',
    tempat: 'Universitas Maarif Hasyim Latif · Sidoarjo',
    rincian: [
      'Mengembangkan dan merawat Sistem Langitan, sistem informasi akademik multi-tenant yang melayani beberapa perguruan tinggi dari satu basis kode — lima puluh modul, dari pendaftaran mahasiswa baru sampai wisuda.',
      'Kontributor terbesar kedua dari dua belas orang di repositori intinya, dengan lebih dari 480 commit.',
      'Membangun UNSCO, platform kompetisi dan olimpiade tingkat nasional yang diselenggarakan kampus.',
    ],
  },
  {
    posisi: 'Web Developer (Freelance)',
    periode: '2023 — Sekarang',
    tempat: 'Kementerian Pendidikan Tinggi, Sains, dan Teknologi · Remote',
    rincian: [
      'Pengembang utama Simbelmawa API, tulang punggung sistem pengelolaan hibah dan program kemahasiswaan nasional. Melayani delapan jenis pengguna dengan hak akses berbeda dan terhubung ke Pangkalan Data Perguruan Tinggi.',
      'Membangun sistem Magang serta platform penyelenggaraan Peksiminas dan MTQMN — ajang nasional yang diikuti perguruan tinggi dari seluruh Indonesia.',
      'Bekerja dalam tim lintas lembaga dengan alur rilis yang harus menyesuaikan jadwal kegiatan kementerian.',
    ],
  },
  {
    posisi: 'S1 Teknik Informatika',
    periode: 'Lulus 2019',
    tempat: 'Universitas Maarif Hasyim Latif · Sidoarjo',
    rincian: [
      'Skripsi: implementasi deep learning untuk klasifikasi tanaman toga berbasis Android, memakai convolutional neural network.',
      'Mendalami sistem pakar dan penambangan data lewat serangkaian proyek kuliah — diagnosis penyakit berbasis aturan, metode AHP, dan algoritma Apriori.',
    ],
  },
];

export const sosial = [
  { teks: 'GitHub', url: 'https://github.com/fifinal' },
  { teks: 'LinkedIn', url: '#' },
  { teks: 'Instagram', url: '#' },
];
