<!-- src/views/Checkout.vue -->
<template>
  <div class="min-h-screen bg-gray-50 pb-20">

    <!-- NAVBAR -->
    <Navbar />

    <!-- CONTAINER -->
    <div class="max-w-5xl mx-auto px-4 py-10">

      <!-- Wrapper Card -->
      <div class="bg-white border rounded-2xl shadow-sm p-6">
        
        <!-- Title -->
        <h1 class="text-3xl font-bold mb-8">Checkout</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- ================= LEFT ================= -->
          <div class="lg:col-span-2 space-y-8">

            <!-- Alamat Pengiriman -->
            <div>
              <h2 class="font-semibold mb-2">Alamat Pengiriman</h2>
              <div class="border rounded-xl p-4 flex justify-between items-start">
                <div class="text-gray-700 text-sm leading-relaxed">
                  <p class="font-medium">Zaskiya Salsabila</p>
                  <p>Karanganyar, Jawa Tengah, Indonesia</p>
                  <p>081271561562</p>
                </div>
                <button class="bg-gray-800 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-gray-900">
                  Ganti
                </button>
              </div>
            </div>

            <!-- Metode Pengiriman -->
            <div>
              <h2 class="font-semibold mb-2">Metode Pengiriman</h2>
              <div class="border rounded-xl p-4 space-y-1">
                <p class="font-medium">Reguler</p>
                <p class="text-sm text-gray-600">JNE (Rp20.000)</p>
                <p class="text-sm text-gray-500">Estimasi 2 - 3 hari</p>
              </div>
            </div>

            <!-- Metode Pembayaran -->
            <div>
              <h2 class="font-semibold mb-2">Metode Pembayaran</h2>
              <div class="border rounded-xl p-4 flex items-center justify-between">
                <img src="@/assets/Images/Gambar1.jpeg" class="w-20" />
                <button class="border px-3 py-1.5 rounded-lg hover:bg-gray-100">
                  QRIS
                </button>
              </div>
            </div>

          </div>

          <!-- ================= RIGHT ================= -->
          <div class="space-y-6">

            <!-- CARD PRODUK -->
            <div class="border rounded-xl p-4">
              <div class="flex gap-4">
                <img src="@/assets/Images/Wito1.jpg" class="w-20 rounded-md" />
                <div class="flex-1 text-sm">
                  <h3 class="font-semibold text-gray-800">Yaka T-Shirt Rombongan Nyeni</h3>
                  <p>Jumlah: 2</p>
                  <p>Ukuran: M</p>
                  <p>Varieti: Black</p>
                </div>
                <p class="text-gray-800 font-semibold">Rp120.000,-</p>
              </div>

              <!-- catatan -->
              <div class="mt-4">
                <input
                  type="text"
                  placeholder="Beri Catatan"
                  class="w-full border rounded-lg p-2 text-sm"
                />
              </div>

              <!-- voucher -->
              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Voucher"
                  class="w-full border rounded-lg p-2 text-sm"
                />
              </div>
            </div>

            <!-- DETAIL HARGA -->
            <div class="border rounded-xl p-4 space-y-3 text-sm">

              <div class="flex justify-between">
                <span>Total Harga (2 Barang)</span>
                <span>Rp240.000</span>
              </div>

              <div class="flex justify-between">
                <span>Ongkos Kirim</span>
                <span>Rp20.000</span>
              </div>

              <div class="flex justify-between font-bold text-lg pt-3 border-t">
                <span>Total Tagihan</span>
                <span>Rp260.000,-</span>
              </div>

              <button
                @click="bayar"
                class="bg-black text-white py-3 rounded-lg w-full text-base hover:bg-gray-900 mt-3"
              >
                Bayar Sekarang
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

const bayar = () => {
  alert("Pembayaran diproses…");
};
</script>
