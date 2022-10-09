<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class StudentController extends Controller
{
    public function getAllStudents()
    {
        $students = User::where('user_type',"student")->get();
        return response()->json([
            "status" => "success",
            "students" => $students
        ], 200);
    }

}