<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Assignment extends Authenticatable
{
    use HasFactory;
    protected $fillable = [
        'course_name',
        'description',
        'due_date',
    ];
}
