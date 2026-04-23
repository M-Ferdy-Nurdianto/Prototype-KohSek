<?php
$title = 'Manajemen Event';
include '../includes/admin_header.php';
?>

<div class="mb-12">
    <h1 class="text-4xl font-extrabold text-neutral">Manajemen <span class="text-primary italic">Event & Harga</span></h1>
    <p class="text-neutral/40 mt-2">Kelola event dan pengaturan harga Cheki untuk toko.</p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Left: Form Tambah Event & Pengaturan -->
    <div class="lg:col-span-1 space-y-8">
        <!-- Tambah Event Form -->
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5">
            <h2 class="text-2xl font-bold text-neutral mb-6">Tambah Event</h2>
            <form action="#" method="POST" class="space-y-6">
                <div class="space-y-2">
                    <label for="event_name" class="block text-sm font-bold text-neutral">Nama Event</label>
                    <input type="text" id="event_name" name="event_name" placeholder="Misal: Kohi Sekai..." class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral" required>
                </div>

                <div class="space-y-2">
                    <label for="event_date" class="block text-sm font-bold text-neutral">Tanggal Event</label>
                    <input type="date" id="event_date" name="event_date" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral" style="color-scheme: light;" required>
                </div>

                <div class="space-y-2">
                    <label for="event_location" class="block text-sm font-bold text-neutral">Lokasi (Opsional)</label>
                    <input type="text" id="event_location" name="event_location" placeholder="Misal: Surabaya..." class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral">
                </div>

                <div class="pt-4">
                    <button type="submit" class="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-neutral transition-colors shadow-lg shadow-primary/30">
                        Simpan Event
                    </button>
                </div>
            </form>
        </div>

        <!-- Pengaturan Harga Cheki -->
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5">
            <h2 class="text-2xl font-bold text-neutral mb-6">Pengaturan Harga</h2>
            <form action="#" method="POST" class="space-y-6">
                <div class="space-y-2">
                    <label for="cheki_price" class="block text-sm font-bold text-neutral">Harga Cheki (Rp)</label>
                    <input type="number" id="cheki_price" name="cheki_price" value="35000" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral font-mono" required>
                    <p class="text-xs text-neutral/40 mt-1">Harga ini akan digunakan sebagai base harga cheki di form checkout.</p>
                </div>
                <div class="pt-4">
                    <button type="button" onclick="alert('Harga berhasil diupdate (Dummy)')" class="w-full bg-secondary text-neutral font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-colors shadow-lg shadow-secondary/30">
                        Update Harga
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Right: List Event -->
    <div class="lg:col-span-2">
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5">
            <h2 class="text-2xl font-bold text-neutral mb-6">Daftar Event Aktif</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-neutral/10">
                            <th class="py-4 px-4 font-bold text-neutral/40 text-sm uppercase">Nama Event</th>
                            <th class="py-4 px-4 font-bold text-neutral/40 text-sm uppercase">Tanggal</th>
                            <th class="py-4 px-4 font-bold text-neutral/40 text-sm uppercase">Lokasi</th>
                            <th class="py-4 px-4 font-bold text-neutral/40 text-sm uppercase text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral/5">
                        <tr class="hover:bg-background/50 transition-colors">
                            <td class="py-4 px-4 font-bold text-neutral">Kohi Sekai 1st Anniversary</td>
                            <td class="py-4 px-4 text-neutral/80">25 Mei 2026</td>
                            <td class="py-4 px-4 text-neutral/80">Tunjungan Plaza 3</td>
                            <td class="py-4 px-4 text-right">
                                <button class="text-red-500 hover:text-red-700 font-bold text-sm transition-colors">Hapus</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-background/50 transition-colors">
                            <td class="py-4 px-4 font-bold text-neutral">Mini Live & Cheki Event</td>
                            <td class="py-4 px-4 text-neutral/80">10 Juni 2026</td>
                            <td class="py-4 px-4 text-neutral/80">Pakuwon Mall</td>
                            <td class="py-4 px-4 text-right">
                                <button class="text-red-500 hover:text-red-700 font-bold text-sm transition-colors">Hapus</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-background/50 transition-colors">
                            <td class="py-4 px-4 font-bold text-neutral">Special Meet and Greet</td>
                            <td class="py-4 px-4 text-neutral/80">15 Juli 2026</td>
                            <td class="py-4 px-4 text-neutral/80">Galaxy Mall</td>
                            <td class="py-4 px-4 text-right">
                                <button class="text-red-500 hover:text-red-700 font-bold text-sm transition-colors">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?php include '../includes/admin_footer.php'; ?>
