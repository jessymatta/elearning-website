<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Course extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'crn',
        'course_name',
        'instructor_name',
        'instructor_id'
    ];
}
