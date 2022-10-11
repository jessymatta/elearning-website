<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Announcement extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'crn',
        'content',
    ];

    public function instructor(){
        return $this->belongsTo(Student::class);
    }

}
