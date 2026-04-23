<?php
include_once __DIR__ . '/../includes/data.php';
$title = 'Tambah Pesanan OTS';
include '../includes/admin_header.php';
?>

<div class="mb-12">
    <h1 class="text-4xl font-extrabold text-neutral">Tambah Pesanan <span class="text-primary italic">On The Spot (OTS)</span></h1>
    <p class="text-neutral/40 mt-2">Formulir khusus admin untuk mendaftarkan pesanan tiket Cheki di tempat.</p>
</div>

<div class="bg-white p-10 rounded-4xl shadow-xl border border-neutral/5 max-w-3xl">
    <form action="dashboard.php" method="POST" class="space-y-6">
        <div class="space-y-2">
            <label for="name" class="block text-sm font-bold text-neutral">Nama Pemesan</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama pemesan..." class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral" required>
        </div>

        <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="member" class="block text-sm font-bold text-neutral">Cheki Siapa? (Target Member)</label>
                <select id="member" name="member" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral appearance-none" required>
                    <option value="" disabled selected>Pilih Member...</option>
                    <?php foreach($members as $m): ?>
                        <option value="<?php echo strtolower($m['name']); ?>"><?php echo $m['name']; ?></option>
                    <?php endforeach; ?>
                </select>
            </div>

            <div class="space-y-2">
                <label for="type" class="block text-sm font-bold text-neutral">Tipe Cheki</label>
                <select id="type" name="type" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral appearance-none" required>
                    <option value="" disabled selected>Pilih Tipe...</option>
                    <option value="regular">Regular Cheki (Rp 40.000)</option>
                    <option value="vip">Wide/VIP Cheki (Rp 80.000)</option>
                </select>
            </div>
        </div>

        <div class="space-y-2">
            <label for="payment_method" class="block text-sm font-bold text-neutral">Metode Pembayaran</label>
            <div class="flex gap-4">
                <label class="flex-1 cursor-pointer relative">
                    <input type="radio" name="payment_method" value="cash" class="peer sr-only" checked>
                    <div class="w-full p-4 rounded-xl border-2 border-neutral/10 peer-checked:border-primary peer-checked:bg-primary/5 transition-all text-center">
                        <span class="block text-sm font-bold text-neutral peer-checked:text-primary">Tunai (Cash)</span>
                    </div>
                </label>
                <label class="flex-1 cursor-pointer relative">
                    <input type="radio" name="payment_method" value="qris" class="peer sr-only">
                    <div class="w-full p-4 rounded-xl border-2 border-neutral/10 peer-checked:border-primary peer-checked:bg-primary/5 transition-all text-center">
                        <span class="block text-sm font-bold text-neutral peer-checked:text-primary">QRIS / Transfer</span>
                    </div>
                </label>
            </div>
        </div>

        <div class="pt-6">
            <button type="submit" class="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-neutral transition-colors shadow-lg shadow-primary/30">
                Simpan Pesanan OTS
            </button>
        </div>
    </form>
</div>

<?php include '../includes/admin_footer.php'; ?>
