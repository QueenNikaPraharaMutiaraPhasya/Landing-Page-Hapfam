# Happiness Family Scholarship Landing Page

Landing page statis satu halaman, tanpa framework atau proses build. Cocok untuk GitHub Pages.

## Menjalankan

Buka `index.html` di browser. Untuk publikasi, unggah seluruh folder ini ke sebuah repositori GitHub, lalu aktifkan **Settings → Pages → Deploy from a branch → main / root**.

## Struktur

```
index.html       halaman utama
css/style.css    seluruh tampilan responsif
js/script.js     menu mobile, slider testimoni, animasi sederhana
```

## Hal yang perlu diganti sebelum dipublikasikan

- Logo teks di navbar/footer dengan logo resmi (bila tersedia).
- Kotak bertanda `FOTO ...` dengan foto kegiatan HapFam berizin pakai.
- Placeholder angka dampak (`00+`) dengan data terverifikasi.
- Semua nama, angkatan, kampus, dan kutipan testimoni dengan data alumni asli.
- Informasi founder, syarat, biaya, periode, dan alur seleksi di FAQ.
- Nilai GROW jika nilai resmi HapFam berbeda.
- URL `https://forms.google.com` pada tombol pendaftaran dengan formulir resmi.
- Alamat email dan tautan media sosial lain yang resmi.

## Menambahkan foto

Buat folder `assets/images/`, masukkan foto di sana, lalu ubah elemen placeholder pada `index.html`. Contoh: tambahkan `background-image: url('../assets/images/kegiatan.jpg')` ke class yang relevan di `css/style.css`.
