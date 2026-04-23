<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function showLogin()
    {
        if (Session::has('admin_logged_in')) {
            return redirect()->route('admin.dashboard');
        }
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        if ($username === 'Kohi' && $password === 'Sekai') {
            Session::put('admin_logged_in', true);
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['message' => 'Invalid credentials.']);
    }

    public function dashboard()
    {
        if (!Session::has('admin_logged_in')) {
            return redirect()->route('login');
        }
        return view('admin.dashboard');
    }

    public function logout()
    {
        Session::forget('admin_logged_in');
        return redirect()->route('home');
    }

    public function createOtsOrder()
    {
        if (!Session::has('admin_logged_in')) {
            return redirect()->route('login');
        }
        return view('admin.orders.create_ots');
    }

    public function createEvent()
    {
        if (!Session::has('admin_logged_in')) {
            return redirect()->route('login');
        }
        return view('admin.events.create');
    }
}
