<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email address or password is incorrect'
            ]);
        }
    }
    public function signup(SignupRequest $request)
    {
        /**
         * @var \App\Models\User $user
         */
        $data = $request->validated();
        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            //encrypt the data
            'password' => bcrypt($data['password']),
        ]);

        $token =  $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
    public function logout(Request $request) {}
}
