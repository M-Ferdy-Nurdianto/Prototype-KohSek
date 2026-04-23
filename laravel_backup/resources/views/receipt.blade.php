@extends('layouts.app')

@section('title', 'Receipt')

@section('content')
    <section class="pt-40 pb-32 bg-background min-h-screen flex items-center justify-center">
        <div class="container mx-auto px-6 max-w-lg">
            
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral/5 relative">
                <!-- Top Decoration -->
                <div class="h-4 bg-primary w-full"></div>
                <div class="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-neutral/10 rounded-full"></div>

                <div class="p-10 text-center">
                    <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 class="text-3xl font-extrabold text-neutral mb-2">Terima Kasih!</h2>
                    <p class="text-neutral/60 text-sm mb-8">Pesanan Pre-Order Anda sedang diproses. Mohon tunggu konfirmasi admin melalui kontak Anda.</p>

                    <!-- Receipt Details (Ticket Design) -->
                    <div class="bg-background rounded-2xl p-6 relative border border-dashed border-neutral/20 text-left">
                        <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-r border-neutral/10"></div>
                        <div class="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-l border-neutral/10"></div>
                        
                        <div class="flex justify-between items-center border-b border-dashed border-neutral/20 pb-4 mb-4">
                            <div>
                                <p class="text-[10px] uppercase font-bold text-neutral/40 tracking-widest mb-1">Event</p>
                                <p class="font-bold text-neutral">Kohi Sekai Event</p>
                            </div>
                            <div class="text-right">
                                <p class="text-[10px] uppercase font-bold text-neutral/40 tracking-widest mb-1">Date</p>
                                <p class="font-bold text-neutral">{{ date('d M Y') }}</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="text-sm font-bold text-neutral/60">Target Member</span>
                                <span class="font-extrabold text-primary capitalize">{{ session('member', 'Unknown') }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm font-bold text-neutral/60">Tipe Cheki</span>
                                <span class="font-bold text-neutral">{{ session('type', 'Regular') }}</span>
                            </div>
                            <div class="flex justify-between items-center pt-4 border-t border-neutral/10">
                                <span class="text-sm font-bold text-neutral uppercase tracking-widest">Total Bayar</span>
                                <span class="text-2xl font-extrabold text-neutral">Rp {{ session('amount', '35.000') }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <a href="{{ route('home') }}" class="block w-full bg-neutral/5 hover:bg-neutral/10 text-neutral font-bold py-4 rounded-xl transition-colors">
                            Kembali ke Beranda
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
@endsection
