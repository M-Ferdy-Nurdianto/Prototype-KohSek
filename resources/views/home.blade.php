@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div class="space-y-8">
                <div class="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary font-semibold text-sm tracking-wider uppercase">Official Website</div>
                <h1 class="text-6xl md:text-8xl font-extrabold text-neutral leading-[1.1]">
                    The World of <span class="text-primary italic">Kohi</span>
                </h1>
                <p class="text-lg text-neutral/70 max-w-lg leading-relaxed">
                    A warm blend of melodies and moments. Experience the unique Chika Idol sensation from Yogyakarta, where every performance feels like a fresh brew.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="{{ route('cheki') }}" class="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">Buy Cheki Ticket</a>
                    <a href="#events" class="border-2 border-primary/20 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">Upcoming Events</a>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -inset-4 bg-primary/10 rounded-4xl blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <img src="{{ asset('img/hero.png') }}" alt="Kohi Sekai Group" class="relative rounded-4xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square">
            </div>
        </div>
        
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tertiary/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4"></div>
    </section>

    <!-- Event Schedule -->
    <section id="events" class="py-32 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-4xl font-extrabold text-neutral mb-4">Event Schedule</h2>
                <p class="text-neutral/50 max-w-2xl mx-auto italic">"Meet us at the next session. Let's create beautiful memories over music."</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                @php
                    $events = [
                        ['title' => 'Espresso Morning Session', 'date' => '24 April 2026', 'time' => '10:00 AM', 'location' => 'Kohi Cafe, Yogyakarta', 'price' => 'Rp 50.000'],
                        ['title' => 'Creamy Sunset Concert', 'date' => '30 April 2026', 'time' => '05:00 PM', 'location' => 'Jogja Expo Center', 'price' => 'Rp 75.000']
                    ];
                @endphp
                @foreach($events as $event)
                    <div class="group bg-background rounded-3xl p-8 border border-neutral/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                        <div class="flex justify-between items-start mb-6">
                            <div class="bg-white px-4 py-2 rounded-2xl shadow-sm text-center">
                                <span class="block text-primary font-bold text-xl">{{ explode(' ', $event['date'])[0] }}</span>
                                <span class="block text-neutral/50 text-[10px] uppercase font-bold">{{ explode(' ', $event['date'])[1] }}</span>
                            </div>
                            <div class="px-4 py-1.5 rounded-full bg-secondary/40 text-primary text-xs font-bold">{{ $event['time'] }}</div>
                        </div>
                        <h3 class="text-2xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors">{{ $event['title'] }}</h3>
                        <div class="flex items-center text-neutral/60 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-sm">{{ $event['location'] }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-extrabold text-neutral">{{ $event['price'] }}</span>
                            <a href="{{ route('cheki') }}" class="text-primary font-bold hover:underline">Get Tickets &rarr;</a>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Spotify Section -->
    <section class="py-32 bg-background relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-4xl font-extrabold text-neutral mb-6">Listen to Our Brews</h2>
                    <p class="text-lg text-neutral/60 mb-8 leading-relaxed">
                        Stream our latest singles and curated playlists. From the upbeat "Mocca Morning" to the soulful "Black Coffee Night", we have a rhythm for every mood.
                    </p>
                </div>
                <div class="rounded-3xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-700 border-8 border-white">
                    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/2bt858ji7ugrpjuNUEChED?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
@endsection
