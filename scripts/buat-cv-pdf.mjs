/**
 * Membuat public/cv.pdf dari halaman /cv/.
 *
 * Alurnya: bangun situs → jalankan `astro preview` → cetak halamannya
 * dengan Chrome tanpa jendela → matikan preview. PDF-nya keluar dari
 * halaman yang sama persis dengan yang dilihat pengunjung, jadi
 * keduanya tidak bisa berbeda isi.
 *
 *   npm run cv:pdf
 *
 * Hasilnya ikut di-commit. Alur penerbitan di GitHub Actions tidak
 * menjalankan skrip ini — di sana tidak ada Chrome — jadi setiap kali
 * isi CV berubah, jalankan lagi perintah ini sebelum push.
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const akar = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4331;
const ALAMAT = `http://localhost:${PORT}/cv/`;
const KELUARAN = resolve(akar, 'public/cv.pdf');

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

console.log('1/4  Membangun situs…');
await jalankan(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build']);

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
    '--no-pdf-header-footer',
    `--print-to-pdf=${KELUARAN}`,
    ALAMAT,
  ]);

  console.log(`4/4  Selesai — ${KELUARAN}`);
  console.log('     Jangan lupa ikut di-commit supaya tautan /cv.pdf hidup di situs.');
} finally {
  matikanPreview();
}
