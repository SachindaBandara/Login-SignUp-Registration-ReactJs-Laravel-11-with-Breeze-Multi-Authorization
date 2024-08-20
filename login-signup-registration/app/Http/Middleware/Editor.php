<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class Editor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Create middleware to redirect to the user dashboard.
        // User or Admin can not enter the admin dashboard.
        if (auth::user()->userType != 'editor') {

            return redirect('/');
        }
        return $next($request);
    }
}
