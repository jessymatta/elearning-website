<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'v0.1'], function () {

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/homepage', [UserController::class, 'getHomepage'])->name('homepage');
    });

    //TODO : authorize only admins and instructors to add students
    Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
    //TODO : only authorize admins to register admins
    Route::post('/register_admin', [AuthController::class, 'registerAdmin'])->name('register-admin');
    //TODO : only authorize admins to register instructors
    Route::post('/register_instructor', [AuthController::class, 'registerInstructor'])->name('register-instructor');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
