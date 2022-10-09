<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'v0.1'], function () {

    // Route::group(['middleware' => 'auth:api'], function () {
    //     Route::get('/homepage', [UserController::class, 'getHomepage'])->name('homepage');
    // });
    
    //Admins routes
    Route::group(['prefix' => 'admin'], function () {
        Route::group(['middleware' => 'admin.role'], function () {
            Route::post('/register_admin', [AuthController::class, 'registerAdmin'])->name('register-admin');
            Route::post('/register_instructor', [AuthController::class, 'registerInstructor'])->name('register-instructor');
            Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
        });
    });

    //Instructors routes
    Route::group(['prefix' => 'instructor'], function () {
        Route::group(['middleware' => 'instructor.role'], function () {
            Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
        });
    });

    //Students routes
    Route::group(['prefix' => 'student'], function () {
        Route::group(['middleware' => 'student.role'], function () {
        });
    });



    //TODO : authorize only admins and instructors to add students
    // Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
    //TODO : only authorize admins to register admins
    // Route::post('/register_admin', [AuthController::class, 'registerAdmin'])->name('register-admin');
    //TODO : only authorize admins to register instructors
    // Route::post('/register_instructor', [AuthController::class, 'registerInstructor'])->name('register-instructor');




    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
