@extends('layouts.app')

@section('title', 'Members')

@section('content')
    <!-- Header Section -->
    <section class="pt-40 pb-20 bg-background overflow-hidden relative">
        <div class="container mx-auto px-6 relative z-10">
            <h1 class="text-6xl font-extrabold text-neutral mb-6">
                The <span class="text-primary italic">Members</span>
            </h1>
            <p class="text-lg text-neutral/60 max-w-2xl leading-relaxed">
                Meet the unique personalities that make up Kohi Sekai. Each member brings a different flavor to the group, creating a perfect blend of talent and charisma.
            </p>
        </div>
        <div class="absolute top-0 right-0 w-1/4 h-1/2 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
    </section>

    <!-- Members Grid -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-12">
                @foreach($members as $member)
                    <x-member-card :member="$member" />
                @endforeach
            </div>
        </div>
    </section>
@endsection
