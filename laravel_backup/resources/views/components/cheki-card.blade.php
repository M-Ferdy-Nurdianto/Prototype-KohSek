@props(['ticket'])

<div class="bg-background rounded-4xl p-6 border border-neutral/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center group">
    <div class="w-full aspect-square rounded-3xl overflow-hidden mb-8 shadow-inner relative bg-neutral/5">
        <img src="{{ asset($ticket['image']) }}" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700">
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">Cheki Options</div>
    </div>
    <h3 class="text-2xl font-extrabold text-neutral mb-1">{{ $ticket['member'] }}</h3>
    <p class="text-neutral/40 text-sm mb-6 flex items-center">
        Select type & purchase method
    </p>
    <div class="w-full flex items-center justify-between mt-auto pt-6 border-t border-neutral/5">
        <div class="flex flex-col text-left">
            <span class="text-[10px] font-bold text-neutral/40 uppercase">Starting from</span>
            <span class="text-xl font-bold text-neutral">Rp {{ number_format($ticket['pricing']['regular']['pre_order'], 0, ',', '.') }}</span>
        </div>
        <a href="{{ route('checkout', ['member' => strtolower($ticket['member'])]) }}" class="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-neutral transition-colors shadow-lg shadow-primary/20">Buy Now</a>
    </div>
</div>