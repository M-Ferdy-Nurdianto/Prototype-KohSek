@extends('layouts.app')

@section('title', 'Cheki Store')

@section('content')
    <!-- Header Section -->
    <section class="pt-40 pb-20 bg-background">
        <div class="container mx-auto px-6">
            <h1 class="text-6xl font-extrabold text-neutral mb-6">
                Cheki <span class="text-primary italic">Tickets</span>
            </h1>
            <p class="text-lg text-neutral/60 max-w-2xl">
                Capture the moment. Purchase digital or physical cheki tickets for your favorite members.
            </p>
        </div>
    </section>

    <!-- Cheki Grid -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-8">
                @foreach($tickets as $ticket)
                    <x-cheki-card :ticket="$ticket" />
                @endforeach
            </div>
        </div>
    </section>

@endsection
