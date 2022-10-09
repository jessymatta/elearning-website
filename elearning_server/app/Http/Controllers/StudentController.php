<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class StudentController extends Controller
{
    public function getAllStudents()
    {
        $students = User::where('user_type', "student")->get();
        return response()->json([
            "status" => "success",
            "students" => $students
        ], 200);
    }

    public function updateStudent(Request $request, $student_id)
    {
        $updated_student = User::find($student_id);
        $updated_student->name = $request->name;
        $updated_student->email = $request->email;
        $updated_student->save();

        return response()->json([
            "status" => "success",
            "updated_user" => $updated_student
        ], 200);

    }
}
