<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- NAVBAR -->
    <Navbar />

    <!-- CONTAINER (Diperkecil) -->
    <div class="max-w-4xl mx-auto px-4">
      <!-- Title -->
      <h1 class="text-xl font-semibold px-2 py-4 text-gray-600">Tas Belanja</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- ================= LEFT ================= -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Alamat Pengiriman -->
          <div class="border rounded-xl bg-white p-4">
            <h2 class="font-semibold mb-2">Alamat Pengiriman</h2>
            <div
              class="border border-red-400 text-red-500 rounded-lg p-3 text-sm"
            >
              <p class="font-medium">Alamat Pengiriman</p>
              <p>
                Sign Up/ Login untuk menambahkan alamat atau melihat alamat yang
                disimpan
              </p>
            </div>
          </div>

          <!-- Produk List -->
          <h2 class="font-semibold text-lg">Tas (2)</h2>

          <!-- ITEM 1 -->
          <div class="flex gap-4 bg-white border rounded-xl p-4">
            <img src="@/assets/Images/Wito1.jpg" class="w-32 rounded" />
            <div class="flex-1">
              <h3 class="font-semibold">YAKA</h3>
              <p>Yaka T-Shirt Rombongan Nyeni</p>

              <div class="flex gap-4 mt-3">
                <div>
                  <label class="text-sm">Ukuran:</label>
                  <select class="border rounded p-1 ml-1">
                    <option>M</option>
                  </select>
                </div>

                <div>
                  <label class="text-sm">Jumlah:</label>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    class="border w-14 rounded p-1 ml-1"
                  />
                </div>
              </div>

              <p class="text-red-600 font-bold mt-2">Rp 120.000,-</p>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="flex gap-4 bg-white border rounded-xl p-4">
            <img src="@/assets/Images/Wito1.jpg" class="w-32 rounded" />
            <div class="flex-1">
              <h3 class="font-semibold">YAKA</h3>
              <p>Yaka T-Shirt Kata kata Sam Pitak</p>

              <div class="flex gap-4 mt-3">
                <div>
                  <label class="text-sm">Ukuran:</label>
                  <select class="border rounded p-1 ml-1">
                    <option>L</option>
                  </select>
                </div>

                <div>
                  <label class="text-sm">Jumlah:</label>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    class="border w-14 rounded p-1 ml-1"
                  />
                </div>
              </div>

              <p class="text-red-600 font-bold mt-2">Rp 120.000,-</p>
            </div>
          </div>
        </div>

        <!-- ================= RIGHT ================= -->
        <div class="space-y-6">
          <!-- Voucher -->
          <div class="bg-white border rounded-xl p-4">
            <h2 class="font-semibold mb-3">Voucher Stackable & Cashback</h2>
            <div class="border rounded-lg p-3 text-gray-500 text-sm">
              Pilih atau masukkan kode
            </div>
          </div>

          <!-- Detail Pesanan -->
          <div class="bg-white border rounded-xl p-4 space-y-3">
            <h2 class="font-semibold text-lg">Detail Pesanan</h2>

            <div class="flex justify-between">
              <span>Subtotal (2 Produk)</span>
              <span>Rp 240.000,-</span>
            </div>

            <div>
              <p class="text-sm mb-1">Pengiriman</p>
              <div
                class="border border-red-400 text-red-500 p-3 rounded-lg text-sm"
              >
                Sign Up/ Login untuk menambahkan atau melihat alamat yang
                disimpan
              </div>
            </div>

            <div class="flex justify-between">
              <span>Biaya Layanan</span>
              <span>Rp 2.000,-</span>
            </div>

            <div class="flex justify-between font-bold text-lg pt-3 border-t">
              <span>Total</span>
              <span>Rp 242.000,-</span>
            </div>

            <router-link
              to="/checkout"
              class="bg-black text-white w-full py-3 rounded-lg mt-2 inline-block text-center">
              Checkout Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"; // ← IMPORT NAVBAR
</script>
