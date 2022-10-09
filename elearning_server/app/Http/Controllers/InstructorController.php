<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

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

    public function updateInstructor(Request $request, $instructor_id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $updated_instructor = User::find($instructor_id);
        $updated_instructor->name = $request->name;
        $updated_instructor->email = $request->email;
        $updated_instructor->save();

        return response()->json([
            "status" => "success",
            "updated_instructor" => $updated_instructor
        ], 200);

    }
}


