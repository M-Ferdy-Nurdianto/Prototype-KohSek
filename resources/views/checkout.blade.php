@extends('layouts.app')

@section('title', 'Checkout')

@section('content')
    <section class="pt-40 pb-20 bg-background min-h-screen">
        <div class="container mx-auto px-6 max-w-4xl">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-extrabold text-neutral mb-4">
                    Form <span class="text-primary italic">Pemesanan</span>
                </h1>
                <p class="text-neutral/60">Lengkapi data diri Anda dan unggah bukti pembayaran (Pre-Order).</p>
            </div>

            <div class="bg-white p-8 md:p-12 rounded-4xl shadow-2xl border border-neutral/5">
                <form action="{{ route('checkout.post') }}" method="POST" enctype="multipart/form-data" class="space-y-8">
                    @csrf
                    
                    <!-- Detail Pemesan -->
                    <div>
                        <h3 class="text-xl font-bold text-neutral mb-6 border-b border-neutral/10 pb-2">1. Detail Pemesan</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label for="name" class="block text-sm font-bold text-neutral">Nama Pemesan</label>
                                <input type="text" id="name" name="name" placeholder="Nama lengkap Anda..." class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral" required>
                            </div>
                            <div class="space-y-2">
                                <label for="contact" class="block text-sm font-bold text-neutral">Kontak (IG / WA)</label>
                                <input type="text" id="contact" name="contact" placeholder="@username / 0812..." class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral" required>
                            </div>
                        </div>
                    </div>

                    <!-- Detail Pesanan -->
                    <div>
                        <h3 class="text-xl font-bold text-neutral mb-6 border-b border-neutral/10 pb-2">2. Detail Pesanan</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label for="member" class="block text-sm font-bold text-neutral">Cheki Siapa? (Target Member)</label>
                                <select id="member" name="member" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral appearance-none" required>
                                    <option value="" disabled {{ !request('member') ? 'selected' : '' }}>Pilih Member...</option>
                                    @foreach($members as $m)
                                        <option value="{{ strtolower($m['name']) }}" {{ request('member') == strtolower($m['name']) ? 'selected' : '' }}>{{ $m['name'] }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label for="type" class="block text-sm font-bold text-neutral">Tipe Cheki (Pre-Order)</label>
                                <select id="type" name="type" class="w-full bg-background border border-neutral/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-neutral appearance-none" required>
                                    <option value="" disabled selected>Pilih Tipe...</option>
                                    <option value="Regular Cheki">Regular Cheki (Rp 35.000)</option>
                                    <option value="VIP Cheki">Wide/VIP Cheki (Rp 70.000)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Pembayaran -->
                    <div>
                        <h3 class="text-xl font-bold text-neutral mb-6 border-b border-neutral/10 pb-2">3. Pembayaran</h3>
                        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/20 mb-6">
                            <p class="text-sm text-neutral/80 mb-2">Silakan transfer sesuai nominal pesanan Anda ke rekening berikut:</p>
                            <p class="font-extrabold text-lg text-neutral">BCA 1234567890 a.n Kohi Sekai</p>
                            <p class="text-xs text-neutral/50 mt-1">*Pastikan nominal transfer sesuai dengan tipe tiket yang dipilih.</p>
                        </div>
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-neutral">Foto Bukti Transfer</label>
                            <div class="w-full border-2 border-dashed border-neutral/20 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-background">
                                <svg class="mx-auto h-12 w-12 text-neutral/40" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="mt-4 flex justify-center text-sm leading-6 text-neutral/60">
                                    <label for="proof" class="relative cursor-pointer rounded-md bg-transparent font-bold text-primary focus-within:outline-none hover:text-primary/80">
                                        <span>Pilih File</span>
                                        <input id="proof" name="proof" type="file" class="sr-only" required>
                                    </label>
                                    <p class="pl-1">atau drag & drop kesini</p>
                                </div>
                                <p class="text-xs leading-5 text-neutral/40">PNG, JPG maksimal 2MB</p>
                            </div>
                        </div>
                    </div>

                    <div class="pt-8">
                        <button type="submit" class="w-full bg-primary text-white font-extrabold py-5 rounded-2xl hover:bg-neutral transition-all shadow-xl shadow-primary/30 text-lg">
                            Kirim Pesanan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection
