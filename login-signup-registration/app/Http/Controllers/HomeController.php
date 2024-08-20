<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function adminDash()
    {
        return view('adminDashboard');
    }

    public function editorDash()
    {
        return view('editorDashboard');
    }
}

