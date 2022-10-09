<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'v0.1'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/homepage', [UserController::class, 'getHomepage'])->name('homepage');
    });

    Route::post('/login', [AuthController::class, 'login'])->name('login');
});