<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Illuminate\Http\JsonResponse;

class RouteController extends Controller
{
    public function index(): JsonResponse
    {
        $routes = Route::with('user')->get(); // Eager load user relationship
        return response()->json($routes);
    }
}