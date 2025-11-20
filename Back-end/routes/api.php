<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\StoreSettingController;
use App\Http\Controllers\Api\AuthApiController;
use App\Http\Controllers\Api\HomeApiController;
use App\Http\Controllers\Api\ProductApiController;

// --------------------
// Guest/Public Routes
// --------------------
Route::get('/home', [HomeApiController::class, 'index']);
Route::get('/products', [ProductApiController::class, 'index']);
Route::get('/products/{slug}', [ProductApiController::class, 'show']);

// --------------------
// Auth Routes
// --------------------
Route::post('/register', [AuthApiController::class, 'register']);
Route::post('/login', [AuthApiController::class, 'login']);

// --------------------
// Protected Routes (Authenticated)
// --------------------
Route::middleware('auth:sanctum')->group(function () {
    
    // User Info
    Route::get('/user', [AuthApiController::class, 'user']);
    Route::post('/logout', [AuthApiController::class, 'logout']);
    
    // Cart
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart', [CartController::class, 'store']);
    Route::put('/cart/{cart}', [CartController::class, 'update']);
    Route::delete('/cart/{cart}', [CartController::class, 'destroy']);

    // Checkout
    Route::get('/checkout', [CheckoutController::class, 'index']);
    Route::post('/checkout', [CheckoutController::class, 'store']);

    // Orders
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{order}', [OrderController::class, 'show']);

    // Reviews
    Route::post('/products/{product}/reviews', [ReviewController::class, 'store']);

    // Account
    Route::get('/account', [AccountController::class, 'index']);
    Route::put('/account', [AccountController::class, 'update']);
    Route::put('/account/password', [AccountController::class, 'updatePassword']);
});

// --------------------
// Admin Routes
// --------------------
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    
    // Dashboard
    Route::get('/', [DashboardController::class, 'index']);

    // Products
    Route::apiResource('products', AdminProductController::class);
    Route::get('products/{product}/variants', [AdminProductController::class, 'variants']);
    Route::post('products/{product}/variants', [AdminProductController::class, 'storeVariant']);
    Route::put('variants/{variant}', [AdminProductController::class, 'updateVariant']);
    Route::delete('variants/{variant}', [AdminProductController::class, 'destroyVariant']);
    Route::delete('product-images/{image}', [AdminProductController::class, 'deleteImage']);

    // Categories
    Route::apiResource('categories', AdminCategoryController::class);

    // Orders
    Route::get('orders', [AdminOrderController::class, 'index']);
    Route::get('orders/{order}', [AdminOrderController::class, 'show']);
    Route::put('orders/{order}/status', [AdminOrderController::class, 'updateStatus']);

    // Store Settings
    Route::get('settings', [StoreSettingController::class, 'index']);
    Route::put('settings', [StoreSettingController::class, 'update']);
});
