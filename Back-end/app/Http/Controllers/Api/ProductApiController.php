<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    /**
     * GET /api/products
     * Ambil list produk dengan pagination
     */
    public function index(Request $request)
    {
        $query = Product::with(['primaryImage', 'category']);

        // Filter berdasarkan kategori
        if ($request->category) {
            $query->where('category_id', $request->category);
        }

        // Search produk berdasarkan nama
        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // Pagination
        $products = $query->paginate(12);

        // Map collection agar sesuai format CardProduk.vue
        $formatted = $products->getCollection()->map(function ($p) {
            return [
                "id"       => $p->id,
                "nama"     => $p->name,
                "harga"    => $p->price,
                "gambar"   => $p->primaryImage->image_path ?? "https://via.placeholder.com/300",
                "stok"     => $p->stock ?? 0,
                "deskripsi"=> $p->description,
                "slug"     => $p->slug,
                "kategori" => $p->category->name ?? "Uncategorized",
            ];
        });

        // Set collection kembali ke paginator
        $products->setCollection($formatted);

        return response()->json([
            'status' => true,
            'data'   => $products,
            'pagination' => [
                "current_page" => $products->currentPage(),
                "last_page"    => $products->lastPage(),
                "total"        => $products->total()
            ]
        ]);
    }

    /**
     * GET /api/products/{slug}
     * Ambil detail produk berdasarkan slug
     */
    public function show($slug)
    {
        $product = Product::with(['images', 'variants', 'category'])
            ->where('slug', $slug)
            ->first();

        if (!$product) {
            return response()->json([
                'status'  => false,
                'message' => 'Produk tidak ditemukan',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data'   => [
                "id"       => $product->id,
                "nama"     => $product->name,
                "harga"    => $product->price,
                "gambar"   => $product->images->pluck('image_path')->toArray() ?: ["https://via.placeholder.com/300"],
                "stok"     => $product->stock ?? 0,
                "deskripsi"=> $product->description,
                "kategori" => $product->category->name ?? "Uncategorized",
                "variants" => $product->variants->map(function ($v) {
                    return [
                        'id' => $v->id,
                        'name' => $v->name,
                        'price' => $v->price,
                        'stock' => $v->stock,
                    ];
                }),
            ]
        ]);
    }
}
