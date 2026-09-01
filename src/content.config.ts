import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Satu berkas YAML = satu studi kasus proyek.
 * Skema di bawah divalidasi saat build, jadi salah ketik nama kolom
 * akan langsung ketahuan sebelum situs terbit.
 */
const proyek = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/proyek' }),
  schema: z.object({
    urutan: z.number(),                    // urutan tampil di beranda
    judul: z.string(),
    tahun: z.number(),
    ringkas: z.string(),                   // dipakai di kartu beranda & meta description
    lead: z.string(),                      // kalimat pembuka halaman detail

    peran: z.string(),
    periode: z.string(),
    tim: z.string(),
    tipe: z.string(),
    tags: z.array(z.string()),

    live: z.string().nullable(),           // null bila proyek tidak bisa diakses publik

    // Alamat live tambahan, untuk sistem yang satu basis kodenya
    // melayani lebih dari satu institusi. Tiap entri diberi label
    // supaya pembaca tahu itu kampus yang mana.
    liveLain: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .optional(),
    status: z.string(),                    // label pengganti saat live bernilai null

    fitur: z.array(z.string()),
    metrik: z.array(z.object({ angka: z.string(), keterangan: z.string() })),
    gambar: z.array(z.object({ file: z.string(), keterangan: z.string() })),

    // Diagram arsitektur, opsional — hanya proyek yang memang punya
    // sesuatu untuk digambar. Berkasnya diambil dari src/diagram/.
    diagram: z.object({ file: z.string(), keterangan: z.string() }).optional(),
    tantangan: z.array(z.string()),
    belajar: z.string(),
    kerahasiaan: z.string(),               // dipakai pada catatan di bawah galeri
  }),
});

export const collections = { proyek };
