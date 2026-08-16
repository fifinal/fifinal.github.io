/* =========================================================
   Skrip bersama untuk semua halaman portofolio
   ========================================================= */
(function () {
  'use strict';

  var hemat = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Tahun otomatis di footer ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();


  /* ---------- Tombol ganti tema ---------- */
  var tombolTema = document.getElementById('temaBtn');
  if (tombolTema) {
    var sistemGelap = window.matchMedia('(prefers-color-scheme: dark)');

    function temaSekarang() {
      var dipilih = document.documentElement.dataset.tema;
      if (dipilih) return dipilih;
      return sistemGelap.matches ? 'gelap' : 'terang';
    }

    function pasangLabel() {
      var berikutnya = temaSekarang() === 'gelap' ? 'terang' : 'gelap';
      tombolTema.setAttribute('aria-label', 'Ganti ke tema ' + berikutnya);
    }

    tombolTema.addEventListener('click', function () {
      var baru = temaSekarang() === 'gelap' ? 'terang' : 'gelap';
      document.documentElement.dataset.tema = baru;
      try { localStorage.setItem('tema', baru); } catch (e) {}
      pasangLabel();
    });

    // Ikut berubah bila pengunjung mengganti setelan sistem dan belum memilih sendiri
    sistemGelap.addEventListener('change', function () {
      if (!document.documentElement.dataset.tema) pasangLabel();
    });

    pasangLabel();
  }

  /* ---------- Menu mobile ---------- */
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? '✕' : '☰';
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
        btn.textContent = '☰';
      }
    });
  }

  /* ---------- Panah yang bergeser saat disentuh kursor ---------- */
  document.querySelectorAll('a').forEach(function (a) {
    if (a.children.length) return;
    var t = a.innerHTML;
    if (t.indexOf('→') > -1) a.innerHTML = t.replace('→', '<span class="arw">→</span>');
    else if (t.indexOf('↗') > -1) a.innerHTML = t.replace('↗', '<span class="arw naik">↗</span>');
  });

  /* Panah pada navigasi proyek sebelumnya / berikutnya */
  document.querySelectorAll('.pager .dir').forEach(function (s) {
    s.innerHTML = s.innerHTML
      .replace('→', '<span class="arw">→</span>')
      .replace('←', '<span class="arw mundur">←</span>');
  });

  /* ---------- Judul dibungkus agar bisa tersingkap dari bawah ---------- */
  document.querySelectorAll('h1, h2').forEach(function (h) {
    if (h.closest('.pager')) return;
    h.innerHTML = '<span class="mask"><span class="mask-in">' + h.innerHTML + '</span></span>';
  });

  function singkap(akar, jeda) {
    akar.querySelectorAll('.mask-in').forEach(function (m, i) {
      setTimeout(function () { m.classList.add('tampil'); }, (jeda || 0) + i * 120);
    });
  }

  if (hemat) {
    document.querySelectorAll('.mask-in').forEach(function (m) { m.classList.add('tampil'); });
  } else {
    // judul di bagian paling atas langsung tersingkap
    var atas = document.querySelector('.hero, .case-hero');
    if (atas) requestAnimationFrame(function () { singkap(atas, 120); });
  }

  /* ---------- Bilah kemajuan gulir ---------- */
  if (!hemat) {
    var bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);
    var ticking = false;
    var perbarui = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var r = h > 0 ? window.scrollY / h : 0;
      bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, r)) + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(perbarui); }
    }, { passive: true });
    perbarui();
  }

  /* ---------- Tandai bagian yang sedang dibaca di navigasi ---------- */
  var tautanNav = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href*="#"]')
  );
  var bagian = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  if (tautanNav.length && bagian.length && 'IntersectionObserver' in window) {
    var pantauBagian = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        tautanNav.forEach(function (a) {
          a.classList.toggle('aktif', a.getAttribute('href').split('#')[1] === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    bagian.forEach(function (s) { pantauBagian.observe(s); });
  }

  /* ---------- Kelompok elemen yang muncul berurutan ---------- */
  var kelompok = [
    '.projects', '.skills', '.metrics', '.gallery',
    '.timeline', '.facts', '.case ul', '.case ol', '.pager', '.meta'
  ];
  var wadah = [];
  kelompok.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.closest('.hero')) return;
      el.classList.add('stagger');
      Array.prototype.forEach.call(el.children, function (anak, i) {
        anak.style.transitionDelay = (i * 130) + 'ms';
      });
      wadah.push(el);
    });
  });

  /* ---------- Hitung angka metrik ---------- */
  function hitungAngka(el) {
    var teks = el.textContent.trim();
    var cocok = teks.match(/^([^\d]*)(\d+(?:[.,]\d+)?)([\s\S]*)$/);
    if (!cocok) return;
    var awalan = cocok[1], akhiran = cocok[3];
    var target = parseFloat(cocok[2].replace(',', '.'));
    var desimal = (cocok[2].indexOf(',') > -1 || cocok[2].indexOf('.') > -1) ? 1 : 0;
    var mulai = null, durasi = 1600;
    function langkah(t) {
      if (mulai === null) mulai = t;
      var p = Math.min(1, (t - mulai) / durasi);
      var e = 1 - Math.pow(1 - p, 4);            // melambat di akhir
      if (p < 1) {
        el.textContent = awalan + (target * e).toFixed(desimal).replace('.', ',') + akhiran;
        requestAnimationFrame(langkah);
      } else {
        el.textContent = teks;   // pastikan nilai akhir persis seperti aslinya
      }
    }
    el.textContent = awalan + (0).toFixed(desimal).replace('.', ',') + akhiran;
    requestAnimationFrame(langkah);
  }

  /* ---------- Pengamat utama ---------- */
  var semua = Array.prototype.slice.call(document.querySelectorAll('.reveal')).concat(wadah);

  if (hemat || !('IntersectionObserver' in window)) {
    semua.forEach(function (el) { el.classList.add('show', 'go'); });
    document.querySelectorAll('.mask-in').forEach(function (m) { m.classList.add('tampil'); });
    return;
  }

  var pengamat = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.classList.add('show', 'go');
      singkap(el, 80);

      if (el.classList.contains('metrics')) {
        el.querySelectorAll('.num').forEach(function (n, i) {
          setTimeout(function () { hitungAngka(n); }, 200 + i * 160);
        });
      }
      pengamat.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -12% 0px' });

  semua.forEach(function (el) { pengamat.observe(el); });
})();
