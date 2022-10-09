<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $updated_student = User::find($student_id);
        $updated_student->name = $request->name;
        $updated_student->email = $request->email;
        $updated_student->save();

        return response()->json([
            "status" => "success",
            "updated_student" => $updated_student
        ], 200);

    }
}
