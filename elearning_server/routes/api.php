<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\CourseController;

Route::group(['prefix' => 'v0.1'], function () {

    //Admins routes
    Route::group(['prefix' => 'admin'], function () {
        Route::group(['middleware' => 'admin.role'], function () {
            Route::post('/register_admin', [AuthController::class, 'registerAdmin'])->name('register-admin');
            Route::post('/register_instructor', [AuthController::class, 'registerInstructor'])->name('register-instructor');
            Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
            Route::get('/all_students', [StudentController::class, 'getAllStudents'])->name('all-students');
            Route::get('/all_instructors', [InstructorController::class, 'getAllInstructors'])->name('all-instructors');
            Route::post('/add_course', [CourseController::class, 'addCourse'])->name('add-course');
            // Route::get('/all_courses', [CourseController::class, 'getAllInstructors'])->name('all-courses');

        });
    });

    //Instructors routes
    Route::group(['prefix' => 'instructor'], function () {
        Route::group(['middleware' => 'instructor.role'], function () {
            Route::post('/register_student', [AuthController::class, 'registerStudent'])->name('register-student');
            Route::get('/all_students', [StudentController::class, 'getAllStudents'])->name('all-students');
        });
    });

    //Students routes
    Route::group(['prefix' => 'student'], function () {
        Route::group(['middleware' => 'student.role'], function () {
        });
    });

    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
