<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class InstructorController extends Controller
{
    public function getAllInstructors()
    {
        $instructors = User::where('user_type',"instructor")->get();
        return response()->json([
            "status" => "success",
            "instructors" => $instructors
        ], 200);
    }

}
