<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    // GET /api/products
    public function index(Request $request)
    {
        // gunakan query builder dasar supaya aman jika relasi belum ada
        $query = Product::query();

        // Filter kategori jika ada
        if ($request->has('category')) {
            $query->where('category_id', $request->category);
        }

        // Search products
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // Pagination 12
        $products = $query->paginate(12);

        return response()->json([
            'status' => true,
            'data'   => $products,
        ]);
    }

    // GET /api/products/{slug}
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json([
                'status'  => false,
                'message' => 'Product not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data'   => $product,
        ]);
    }
}
