<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    //Register Method
    public function registerAdmin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|string|unique:users',
            'user_type' =>'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            "email" => $request->email,
            "username" => $request->username,
            "user_type"=>$request->user_type,
            "password" => bcrypt($request->password)

        ]);

        return response()->json([
            'message'=>'User successfully registered',
            'status'=>"success",
            'user'=>$user
        ], 201);
    }

    // Login Method
    public function login(Request $request){
        $validator =Validator::make($request->all(),[
            'username'=>'required|string',
            'password'=>'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 422);
        }

        if(!$token=auth() -> attempt($validator->validated())){
            return response()->json(['error'=>'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }

    //A function that will create a new jwt token
    public function createNewToken($token){
        return response()->json([
            'access_token'=>$token,
            'token_type'=>'bearer',
            'expires_in'=>auth()->factory()->getTTL()*60,
            'user'=>auth()->user()
        ]);
    }

    //A function that will add a new student
    public function registerStudent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            "email" => $request->email,
            "username" => $request->username,
            "user_type"=> "student",
            "password" => bcrypt($request->password)

        ]);

        return response()->json([
            'message'=>'Student successfully registered',
            'status'=>"success",
            'student'=>$user
        ], 201);
    }




}
