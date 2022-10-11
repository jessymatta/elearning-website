<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Announcement;
use App\Models\User;


class AnnouncementController extends Controller
{
    //A method that will add a new announcement
    public function addAnnouncement(Request $request)
    {

        $instructor = Auth::user();

        $validator = Validator::make($request->all(), [
            'crn' => 'required|string',
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }


        $announcement = Announcement::create([
            "crn" => $request->crn,
            "content" => $request->content,
        ]);

        $instructor->announcements()->save($announcement);

        return response()->json([
            'message' => 'Announcement successfully added',
            'status' => "success",
            'announcement' => $announcement
        ], 201);
    }

    //A method that will get all announcements of the logged in instructor
    public function getAllAnnouncements()
    {
        $instructor_announcements = Auth::user()->announcements;
        return response()->json([
            "status"=>"success",
            'message'=>'Retrieved all instructors announcements',
            "instructor_announcements"=>$instructor_announcements
        ]);
    }

}
