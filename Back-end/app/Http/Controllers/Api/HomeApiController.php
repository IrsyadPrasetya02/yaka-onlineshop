<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;

class HomeApiController extends Controller
{
    public function index()
    {
        $latest_products = Product::latest()->take(8)->get();
        $recommended     = Product::inRandomOrder()->take(6)->get();
        $categories      = Category::all();

        return response()->json([
            'status' => true,
            'latest_products' => $latest_products,
            'recommended'     => $recommended,
            'categories'      => $categories,
        ]);
    }
}
