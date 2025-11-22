<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5]">
    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-6 py-10 flex gap-10">
      <!-- Left Image -->
      <div class="w-1/2">
        <img
          src="@/assets/Images/Wito1.jpg"
          alt="About YAKA"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <!-- Right Text -->
      <div class="w-1/2">
        <h2 class="text-sm tracking-widest text-gray-500 mb-2">ABOUT</h2>

        <h1 class="text-3xl font-bold mb-5 leading-tight">
          Effortless. Bold. Refined.
        </h1>

        <p class="text-gray-700 leading-relaxed mb-4">
          YAKA adalah brand fashion pria yang lahir dari semangat untuk tampil
          berbeda tanpa harus berlebihan. Kami menghadirkan konsep effortless
          luxury — gaya yang berbicara lewat potongan rapi, detail tenang, dan
          kualitas yang berbicara sendiri.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          Di YAKA, pakaian bukan sekadar tren, tapi representasi dari kepercayaan
          diri dan arah hidup. Setiap koleksi YAKA dirancang dengan pendekatan
          clean design yang mengutamakan pilihan yang sederhana namun berkesan
          tanpa kompromi. Semua detailnya dirancang untuk tetap relevan, halus,
          dan menunjukkan ketegasan tanpa “memaksa”.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          Kami tidak bermain dengan produksi massal. Setiap item YAKA dikerjakan
          dalam skala terbatas yang menghadirkan nilai di balik setiap helai,
          bukan sekadar kuantitas.
        </p>

        <p class="text-gray-700 leading-relaxed">
          YAKA hadir untuk pria modern yang ingin tampil tanpa segi tegas, elegan
          tapi nyata. Karena gaya yang kuat bukan banyak bicara — cukup
          dikenakan, dan biarkan kesederhanaan bekerja.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-auto bg-black text-white py-10">
      <div class="text-center text-3xl font-semibold mb-3">YAKA</div>
      <div class="text-center text-sm">
        © 2025 YAKA Online Shop All rights reserved
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
