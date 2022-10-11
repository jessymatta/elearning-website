<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Assignment extends Authenticatable
{
    use HasFactory;
    protected $fillable = [
        'crn',
        'description',
        'due_date',
    ];

    public function instructor(){
        return $this->belongsTo(Student::class);
    }
}
