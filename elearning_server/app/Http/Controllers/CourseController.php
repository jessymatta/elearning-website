<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Course;

class CourseController extends Controller
{
    //A method that will add a new course
    public function addCourse(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'crn' => 'required|string|unique:courses',
            'course_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $instructor_name = explode(",",$request->instructor)[0];
        $instructor_id = explode(",",$request->instructor)[1];

        $course = Course::create([
            "crn" => $request->crn,
            "course_name" => $request->course_name,
            "instructor_name" => $instructor_name,
            "instructor_id" => $instructor_id
        ]);

        return response()->json([
            'message'=>'Course successfully registered',
            'status'=>"success",
            'course'=>$course
        ], 201);
    }

    //A method that will get all courses
    public function getAllCourses()
    {
        $courses = Course::all();
        return response()->json([
            "status" => "success",
            "courses" => $courses
        ], 200);
    }

    //A method that updates a course info
    public function updateCourse(Request $request, $course_id)
    {
        $validator = Validator::make($request->all(), [
            'crn' => 'string|unique:courses',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $updated_course = Course::find($course_id);
        $updated_course->name = $request->crn;
        $updated_course->course_name = $request->course_name;
        $updated_course->instructor = $request->instructor;

        $updated_course->save();

        return response()->json([
            "status" => "success",
            "updated_course" => $updated_course
        ], 200);

    }
    
}
