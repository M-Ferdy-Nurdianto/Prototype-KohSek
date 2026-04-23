@extends('layouts.admin')

@section('title', 'Dashboard Admin')

@section('content')
    <div class="mb-12">
        <h1 class="text-5xl font-extrabold text-neutral">Dashboard <span class="text-primary italic">Kohi Sekai</span></h1>
        <p class="text-neutral/40 mt-2">Selamat datang, Admin Kohi Sekai. Kelola event, pesanan, dan tiket Cheki Anda.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
        <!-- Stats Cards -->
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5 relative overflow-hidden group hover:border-primary/20 transition-all">
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-all duration-500"></div>
            <p class="text-xs font-bold text-neutral/30 uppercase tracking-widest mb-2 relative z-10">Total Pendapatan</p>
            <h3 class="text-4xl font-extrabold text-neutral relative z-10">Rp 4.250.000</h3>
            <p class="text-green-400 text-xs font-bold mt-4 relative z-10">+12% dari minggu lalu</p>
        </div>
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5 relative overflow-hidden group hover:border-primary/20 transition-all">
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-secondary/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
            <p class="text-xs font-bold text-neutral/30 uppercase tracking-widest mb-2 relative z-10">Tiket Cheki Terjual</p>
            <h3 class="text-4xl font-extrabold text-neutral relative z-10">142</h3>
            <p class="text-primary text-xs font-bold mt-4 relative z-10">85% dari total kuota</p>
        </div>
        <div class="bg-white p-8 rounded-4xl shadow-xl border border-neutral/5 relative overflow-hidden group hover:border-primary/20 transition-all">
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-tertiary/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
            <p class="text-xs font-bold text-neutral/30 uppercase tracking-widest mb-2 relative z-10">Event Aktif</p>
            <h3 class="text-4xl font-extrabold text-neutral relative z-10">2</h3>
            <p class="text-neutral/40 text-xs font-bold mt-4 relative z-10">Berikutnya: 24 April 2026</p>
        </div>
    </div>

    <!-- Recent Orders Table -->
    <div class="mt-12 bg-white rounded-4xl shadow-xl border border-neutral/5 overflow-hidden">
        <div class="p-8 border-b border-neutral/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h3 class="text-2xl font-extrabold text-neutral">Pesanan Terbaru</h3>
            <div class="flex gap-3">
                <button class="bg-green-50 text-green-600 border border-green-200 px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-100 transition-all flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Export Excel
                </button>
                <button class="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-100 transition-all flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    Export PDF
                </button>
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left">
                <thead class="bg-background text-neutral/40 text-[10px] uppercase tracking-widest font-bold">
                    <tr>
                        <th class="px-8 py-4">Nama Pemesan</th>
                        <th class="px-8 py-4">Pesanan (Target - Tipe)</th>
                        <th class="px-8 py-4">Tipe Pemesanan</th>
                        <th class="px-8 py-4">Total Harga</th>
                        <th class="px-8 py-4">Status</th>
                        <th class="px-8 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-neutral/5">
                    <tr class="hover:bg-background transition-colors group">
                        <td class="px-8 py-6 font-bold text-neutral">Andi Wijaya</td>
                        <td class="px-8 py-6 text-sm text-neutral/80">Dea - Regular Cheki</td>
                        <td class="px-8 py-6"><span class="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold">Pre-Order</span></td>
                        <td class="px-8 py-6 font-bold text-neutral/80">Rp 35.000</td>
                        <td class="px-8 py-6"><span class="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-bold">Selesai</span></td>
                        <td class="px-8 py-6 text-right"><button class="text-primary font-bold text-sm underline opacity-0 group-hover:opacity-100 transition-all">Detail</button></td>
                    </tr>
                    <tr class="hover:bg-background transition-colors group">
                        <td class="px-8 py-6 font-bold text-neutral">Budi Santoso</td>
                        <td class="px-8 py-6 text-sm text-neutral/80">Faatin - VIP Cheki</td>
                        <td class="px-8 py-6"><span class="bg-secondary/20 text-neutral border border-secondary px-3 py-1 rounded-full text-[10px] font-bold">On The Spot (OTS)</span></td>
                        <td class="px-8 py-6 font-bold text-neutral/80">Rp 80.000</td>
                        <td class="px-8 py-6"><span class="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-bold">Selesai</span></td>
                        <td class="px-8 py-6 text-right"><button class="text-primary font-bold text-sm underline opacity-0 group-hover:opacity-100 transition-all">Detail</button></td>
                    </tr>
                    <tr class="hover:bg-background transition-colors group">
                        <td class="px-8 py-6 font-bold text-neutral">Siska Amelia</td>
                        <td class="px-8 py-6 text-sm text-neutral/80">Vinci - Regular Cheki</td>
                        <td class="px-8 py-6"><span class="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold">Pre-Order</span></td>
                        <td class="px-8 py-6 font-bold text-neutral/80">Rp 35.000</td>
                        <td class="px-8 py-6"><span class="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-bold">Menunggu Bukti</span></td>
                        <td class="px-8 py-6 text-right"><button class="text-primary font-bold text-sm underline opacity-0 group-hover:opacity-100 transition-all">Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="p-4 border-t border-neutral/5 flex justify-center bg-background/50">
            <button class="text-primary font-bold text-xs uppercase tracking-widest hover:text-neutral transition-colors">Lihat Semua Pesanan</button>
        </div>
    </div>
@endsection
