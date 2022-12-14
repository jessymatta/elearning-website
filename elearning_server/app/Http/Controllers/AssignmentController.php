<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;


class AssignmentController extends Controller
{
    //A method that will add a new assignment
    public function addAssignment(Request $request)
    {

        $instructor = Auth::user();

        $validator = Validator::make($request->all(), [
            'crn' => 'required|string',
            'description' => 'required|string',
            'due_date' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }


        $assignment = Assignment::create([
            "crn" => $request->crn,
            "description" => $request->description,
            "due_date" => $request->due_date,
        ]);

        $instructor->assignments()->save($assignment);

        return response()->json([
            'message' => 'Assignment successfully added',
            'status' => "success",
            'assignment' => $assignment
        ], 201);
    }

    //A method that will get all assignments of the logged in instructor
    public function getAllAssignments()
    {
        $instructor_assignments = Auth::user()->assignments;
        return response()->json([
            "status"=>"success",
            'message'=>'Retrieved all instructors assignments',
            "instructor_assignments"=>$instructor_assignments
        ]);
    }
}
