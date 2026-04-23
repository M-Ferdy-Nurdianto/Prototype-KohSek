@extends('layouts.app')

@section('title', 'Admin Login')

@section('content')
    <section class="min-h-screen flex items-center justify-center pt-20 bg-background">
        <div class="w-full max-w-md p-8">
            <div class="bg-white rounded-4xl p-10 shadow-2xl border border-neutral/5">
                <div class="text-center mb-10">
                    <h1 class="text-3xl font-extrabold text-neutral mb-2">Admin Login</h1>
                    <p class="text-neutral/40 text-sm italic">"Kohi Sekai Dashboard Access"</p>
                </div>

                @if($errors->any())
                    <div class="bg-red-50 text-red-500 p-4 rounded-2xl mb-6 text-sm font-bold border border-red-100">
                        {{ $errors->first() }}
                    </div>
                @endif

                <form action="{{ route('login.post') }}" method="POST" class="space-y-6" x-data="{ 
                    showPass: false,
                    isLoading: false,
                    async handleSubmit(e) {
                        this.isLoading = true;
                        // Simulating async operation
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        e.target.submit();
                    }
                }" @submit.prevent="handleSubmit($event)">
                    @csrf
                    <div>
                        <label class="block text-xs font-bold text-neutral/40 uppercase mb-2 ml-1">Username</label>
                        <input type="text" name="username" required placeholder="Kohi" 
                               class="w-full bg-background border border-neutral/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-neutral/40 uppercase mb-2 ml-1">Password</label>
                        <div class="relative">
                            <input :type="showPass ? 'text' : 'password'" name="password" required placeholder="Sekai"
                                   class="w-full bg-background border border-neutral/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium">
                            <button type="button" @click="showPass = !showPass" class="absolute right-6 top-1/2 -translate-y-1/2 text-neutral/30 hover:text-primary transition-colors">
                                <template x-if="!showPass">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </template>
                                <template x-if="showPass">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.024 10.024 0 014.13-5.322m3.944-.559L10 3m4.618 1.118L15 3m-1.371 4.126A3.001 3.001 0 0010 10m-3.722 3.722L3 17m18-5c-.479 1.523-1.353 2.872-2.458 4.013m-2.586-1.127l-4.126-4.126m0 0L21 3" />
                                    </svg>
                                </template>
                            </button>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-neutral transition-all shadow-xl shadow-primary/20 mt-4 disabled:opacity-50" :disabled="isLoading">
                        <span x-show="!isLoading">Login to Dashboard</span>
                        <span x-show="isLoading" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Authenticating...
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </section>
@endsection
