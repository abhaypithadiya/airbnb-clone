<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/check-email', function (Request $request) {
    $request->validate([
        'email' => ['required', 'email'],
    ]);

    $email = $request->email;

    $checkIfEmailExists = User::where('email', $email)->first();

    return response()->json(['user_exists' => $checkIfEmailExists ? true : false]);
})->name('register.check-email');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
