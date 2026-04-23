<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\AdminController;

// Public Routes
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/members', [PublicController::class, 'members'])->name('members');
Route::get('/cheki', [PublicController::class, 'cheki'])->name('cheki');

// Admin Routes
Route::get('/login', [AdminController::class, 'showLogin'])->name('login');
Route::post('/login', [AdminController::class, 'login'])->name('login.post');
Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
Route::get('/admin/orders/ots/create', [AdminController::class, 'createOtsOrder'])->name('admin.orders.ots.create');
Route::get('/admin/events/create', [AdminController::class, 'createEvent'])->name('admin.events.create');
Route::post('/logout', [AdminController::class, 'logout'])->name('logout');

// Checkout Routes
Route::get('/checkout', [PublicController::class, 'checkout'])->name('checkout');
Route::post('/checkout', [PublicController::class, 'processCheckout'])->name('checkout.post');
Route::get('/receipt', [PublicController::class, 'receipt'])->name('receipt');
