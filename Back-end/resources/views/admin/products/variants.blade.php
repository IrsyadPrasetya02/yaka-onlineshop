@extends('layouts.admin')

@section('header', 'Varian Produk')

@section('content')
<div class="max-w-3xl">
    <div class="bg-white rounded-lg shadow-md p-6">

        {{-- Product Info --}}
        <div class="mb-6">
            <h2 class="text-xl font-semibold mb-1">{{ $product->name }}</h2>
            <p class="text-gray-600">Kelola varian untuk produk ini</p>
        </div>

        {{-- List Variants --}}
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Daftar Varian</h3>

            @if($product->variants->count() == 0)
                <p class="text-gray-500">Belum ada varian.</p>
            @else
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-100 text-left">
                            <th class="p-2 border">Ukuran</th>
                            <th class="p-2 border">Warna</th>
                            <th class="p-2 border">Stok</th>
                            <th class="p-2 border">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($product->variants as $variant)
                        <tr>
                            <td class="p-2 border">{{ $variant->size }}</td>
                            <td class="p-2 border">{{ $variant->color }}</td>
                            <td class="p-2 border">{{ $variant->stock }}</td>
                            <td class="p-2 border">
                                <form method="POST" action="{{ route('admin.products.variants.delete', [$product->id, $variant->id]) }}">
                                    @csrf
                                    @method('DELETE')
                                    <button class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                                        Hapus
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>

        {{-- Create Variant Form --}}
        <div>
            <h3 class="font-semibold mb-2">Tambah Varian Baru</h3>

            <form method="POST" action="{{ route('admin.products.variants.store', $product->id) }}">
                @csrf

                <div class="grid grid-cols-3 gap-3 mb-3">
                    <div>
                        <label class="block font-semibold mb-1">Ukuran</label>
                        <input type="text" name="size" class="w-full px-3 py-2 border rounded">
                    </div>

                    <div>
                        <label class="block font-semibold mb-1">Warna</label>
                        <input type="text" name="color" class="w-full px-3 py-2 border rounded">
                    </div>

                    <div>
                        <label class="block font-semibold mb-1">Stok</label>
                        <input type="number" name="stock" class="w-full px-3 py-2 border rounded">
                    </div>
                </div>

                <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Tambah Varian
                </button>
            </form>
        </div>

    </div>
</div>
@endsection
