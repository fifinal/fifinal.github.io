/**
 * Membuat berkas CV-Slamet-Fifin-Alamsyah.pdf dari halaman /cv/.
 *
 * Alurnya: bangun situs → jalankan `astro preview` → cetak halamannya
 * dengan Chrome tanpa jendela → matikan preview. PDF-nya keluar dari
 * halaman yang sama persis dengan yang dilihat pengunjung, jadi
 * keduanya tidak bisa berbeda isi.
 *
 *   npm run cv:pdf              → membangun dulu, hasilnya ke public/
 *   npm run cv:pdf -- --ke-dist → memakai dist/ yang sudah ada, hasilnya
 *                                 langsung ke dist/
 *
 * Berkasnya sengaja TIDAK di-commit. Alur penerbitan menjalankan skrip
 * ini dengan --ke-dist setelah membangun situs, sehingga PDF selalu
 * dibuat dari halaman /cv/ versi terbaru dan keduanya tidak mungkin
 * berbeda isi. Runner ubuntu-latest sudah memuat Google Chrome.
 *
 * Bentuk tanpa argumen tetap berguna di mesin sendiri untuk melihat
 * hasil cetaknya sebelum push.
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const akar = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4331;
const ALAMAT = `http://localhost:${PORT}/cv/`;

/**
 * Nama berkasnya memakai nama lengkap pemilik supaya di folder unduhan
 * perekrut tidak tertimbun di antara belasan berkas bernama cv.pdf.
 * Nama yang sama ditulis di `berkasPdf` pada src/data/cv.ts — kalau
 * keduanya berbeda, tautannya mati. Pemeriksaannya ada di bawah.
 */
const NAMA_BERKAS = 'CV-Slamet-Fifin-Alamsyah.pdf';

/** Dipakai alur penerbitan: dist/ sudah dibangun, tinggal dicetak. */
const keDist = process.argv.includes('--ke-dist');
const KELUARAN = resolve(akar, (keDist ? 'dist/' : 'public/') + NAMA_BERKAS);

/** Chrome dicari di tempat bakunya. Edge dipakai bila Chrome tidak ada. */
const KANDIDAT_PERAMBAN = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

function cariPeramban() {
  const ada = KANDIDAT_PERAMBAN.find((p) => existsSync(p));
  if (!ada) {
    console.error(
      'Tidak menemukan Chrome, Chromium, maupun Edge di tempat bakunya.\n' +
        'Pasang salah satunya, atau tambahkan pathnya ke KANDIDAT_PERAMBAN di skrip ini.'
    );
    process.exit(1);
  }
  return ada;
}

function jalankan(perintah, argumen, opsi = {}) {
  return new Promise((selesai, gagal) => {
    const anak = spawn(perintah, argumen, { stdio: 'inherit', cwd: akar, ...opsi });
    anak.on('error', gagal);
    anak.on('exit', (kode) =>
      kode === 0 ? selesai() : gagal(new Error(`${perintah} keluar dengan kode ${kode}`))
    );
  });
}

/** Menunggu sampai preview benar-benar melayani, bukan sekadar menebak jeda. */
async function tungguSiap(alamat, batasMs = 30000) {
  const tenggat = Date.now() + batasMs;
  while (Date.now() < tenggat) {
    try {
      const jawaban = await fetch(alamat);
      if (jawaban.ok) return;
    } catch {
      // preview belum menyala, coba lagi
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview tidak siap dalam ${batasMs / 1000} detik.`);
}

const peramban = cariPeramban();

if (keDist) {
  if (!existsSync(resolve(akar, 'dist/cv/index.html'))) {
    console.error('dist/cv/index.html tidak ada. Jalankan `npm run build` lebih dulu.');
    process.exit(1);
  }
  console.log('1/4  Melewati build — memakai dist/ yang sudah ada.');
} else {
  console.log('1/4  Membangun situs…');
  await jalankan(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build']);
}

console.log('2/4  Menyalakan preview…');
const preview = spawn(
  process.execPath,
  ['node_modules/astro/bin/astro.mjs', 'preview', '--port', String(PORT)],
  { cwd: akar, stdio: 'ignore' }
);

const matikanPreview = () => {
  if (!preview.killed) preview.kill();
};
process.on('exit', matikanPreview);
process.on('SIGINT', () => {
  matikanPreview();
  process.exit(130);
});

try {
  await tungguSiap(ALAMAT);

  console.log('3/4  Mencetak halaman /cv/ ke PDF…');
  mkdirSync(dirname(KELUARAN), { recursive: true });
  await jalankan(peramban, [
    '--headless',
    '--disable-gpu',
    // Sandbox Chrome tidak selalu bisa dipakai di dalam runner CI.
    ...(process.env.CI ? ['--no-sandbox'] : []),
    '--no-pdf-header-footer',
    `--print-to-pdf=${KELUARAN}`,
    ALAMAT,
  ]);

  // Halaman CV harus benar-benar menunjuk berkas yang barusan dicetak.
  // Tanpa ini, mengganti nama di satu tempat saja menghasilkan tombol
  // unduh yang menunjuk berkas tidak ada — dan penerbitan tetap sukses.
  if (keDist) {
    const halaman = readFileSync(resolve(akar, 'dist/cv/index.html'), 'utf8');
    if (!halaman.includes(`"/${NAMA_BERKAS}"`)) {
      console.error(
        `Halaman /cv/ tidak menunjuk /${NAMA_BERKAS}. ` +
          'Samakan NAMA_BERKAS di skrip ini dengan `berkasPdf` di src/data/cv.ts.'
      );
      process.exit(1);
    }
  }

  console.log(`4/4  Selesai — ${KELUARAN}`);
} finally {
  matikanPreview();
}
