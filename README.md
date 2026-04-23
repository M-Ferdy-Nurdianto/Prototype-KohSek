# Kohi Sekai - PHP Native Version

Proyek ini telah diubah dari Laravel menjadi **PHP Native** untuk mempermudah pengembangan dan penggunaan tanpa ribet.

## Cara Menjalankan
1. Pastikan Anda memiliki server PHP (seperti XAMPP, Laragon, atau PHP CLI).
2. Letakkan seluruh folder ini di folder `htdocs` atau folder root server Anda.
3. Buka browser dan akses `localhost/Kohi` (sesuaikan dengan nama folder).
4. Tidak perlu menjalankan `composer install` atau `npm install`.

## Struktur Folder
- `index.php`: Halaman Utama
- `members.php`: Halaman Member
- `cheki.php`: Toko Tiket Cheki
- `checkout.php`: Form Pemesanan
- `receipt.php`: Bukti Pemesanan
- `login.php`: Login Admin
- `admin/`: Halaman Dashboard Admin
- `includes/`: Komponen header, footer, navbar, dan data bersama.
- `assets/`: File gambar dan aset lainnya.
- `laravel_backup/`: Cadangan file versi Laravel sebelumnya.

## Akun Admin
- **Username**: Kohi
- **Password**: Sekai

## Fitur
- Desain Premium menggunakan Tailwind CSS & Alpine.js (via CDN).
- Sistem pemesanan simulasi (Mockup).
- Dashboard Admin untuk simulasi manajemen event & pesanan OTS.
