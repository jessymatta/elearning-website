<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Course;

class CourseController extends Controller
{
    //A function that will add a new course
    public function addCourse(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'crn' => 'required|string|unique:courses',
            'course_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $course = Course::create([
            "crn" => $request->crn,
            "course_name" => $request->course_name,
            "instructor" => $request->instructor,
        ]);

        return response()->json([
            'message'=>'Course successfully registered',
            'status'=>"success",
            'course'=>$course
        ], 201);
    }

    
}
