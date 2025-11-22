<template>
  <div class="w-full min-h-screen bg-white">
    <!-- NAVBAR -->
    <Navbar />

    <!-- CONTAINER CONTENT -->
    <div class="container mx-auto px-4 lg:px-10 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- LEFT: MAIN IMAGE + THUMBNAILS -->
        <div>
          <img :src="mainImage" alt="Produk" class="w-full rounded-xl shadow" />

          <!-- Thumbnail Row -->
          <div class="flex gap-3 mt-5">
            <img
              v-for="(img, index) in thumbnails"
              :key="index"
              :src="img"
              class="w-24 h-24 object-cover rounded-lg cursor-pointer border hover:scale-105 transition"
              :class="mainImage === img ? 'border-black' : 'border-gray-300'"
              @click="mainImage = img"
            />
          </div>
        </div>

        <!-- RIGHT: DETAIL PRODUK -->
        <div>
          <h2 class="font-semibold text-gray-700">YAKA</h2>
          <h1 class="text-2xl font-bold mt-1">Yaka T-Shirt WIP wo</h1>

          <p class="text-red-600 text-xl font-semibold mt-3">Rp 120.000,-</p>

          <!-- Deskripsi -->
          <div class="mt-5">
            <h3 class="font-semibold mb-1">Deskripsi</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Kaos hitam dengan bahan cotton combed 30s, yang lembut, adem, dan
              tidak mudah melar. Cocok digunakan untuk kegiatan sehari-hari,
              nongkrong, atau outfit casual. Desain simple tanpa logo, mudah
              dipadukan dengan berbagai gaya fashion.
            </p>
          </div>

          <!-- Rincian -->
          <div class="mt-6">
            <h3 class="font-semibold mb-2">Rincian</h3>
            <ul class="text-sm text-gray-600 list-disc ml-5 leading-6">
              <li>Bahan: Cotton Combed 30s</li>
              <li>Warna: Hitam</li>
              <li>Lengan: Pendek</li>
              <li>Ukuran Tersedia:</li>
              <ul class="ml-5 list-disc">
                <li>S (Lebar 47 cm x Panjang 65 cm)</li>
                <li>M (Lebar 50 cm x Panjang 68 cm)</li>
                <li>L (Lebar 53 cm x Panjang 71 cm)</li>
                <li>XL (Lebar 56 cm x Panjang 74 cm)</li>
              </ul>
            </ul>
          </div>

          <!-- VARIAN PILIHAN -->
          <div class="flex items-center gap-5 mt-7">
            <div>
              <p class="text-sm text-gray-600 mb-1">Ukuran :</p>
              <select
                v-model="selectedSize"
                class="border px-3 py-2 rounded-lg"
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div>
              <p class="text-sm text-gray-600 mb-1">Warna :</p>
              <select
                v-model="selectedColor"
                class="border px-3 py-2 rounded-lg"
              >
                <option>Hitam</option>
                <option>Putih</option>
              </select>
            </div>

            <div>
              <p class="text-sm text-gray-600 mb-1">Jumlah :</p>
              <div class="flex items-center border rounded-lg px-3 py-2">
                <button @click="decreaseQty">-</button>
                <span class="px-3">{{ qty }}</span>
                <button @click="qty++">+</button>
              </div>
            </div>
          </div>

          <!-- BUTTON -->
          <button
            class="bg-black text-white w-full py-3 rounded-lg mt-8 hover:bg-gray-900 transition"
            @click="goToCart"
          >
            Masukkan Tas
          </button>
        </div>
      </div>

      <!-- REVIEW SECTION -->
      <div class="mt-16">
        <h2 class="text-xl font-bold">Penilaian & Ulasan</h2>

        <div class="flex items-center mt-3">
          <p class="text-2xl font-semibold mr-2">4/5</p>
          <div class="flex text-yellow-500 text-lg">★★★★☆</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <!-- Review Card -->
          <div v-for="(review, index) in reviews" :key="index">
            <p class="font-semibold">{{ review.name }}</p>
            <p class="text-yellow-500 text-sm mb-1">{{ review.stars }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ review.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue"; // sesuaikan path navbar
import { useRouter } from "vue-router";

const router = useRouter();

const goToCart = () => {
  router.push("/cart"); // pastikan route /cart sudah ada
};

// images
const mainImage = ref("/src/assets/Images/Wito1.jpg");

const thumbnails = [
  "/src/assets/Images/Wito1.jpg",
  "/src/assets/Images/Wito1.jpg",
  "/src/assets/Images/Wito1.jpg",
  "/src/assets/Images/Wito1.jpg",
];

const selectedSize = ref("M");
const selectedColor = ref("Hitam");
const qty = ref(1);

const decreaseQty = () => {
  if (qty.value > 1) qty.value--;
};

const reviews = ref([
  {
    name: "Andi P.",
    stars: "★★★★★",
    text: "Bahannya lembut dan adem banget, cocok dipakai harian. Warna hitamnya pekat dan tidak mudah pudar meskipun sudah dicuci beberapa kali.",
  },
  {
    name: "Rina S.",
    stars: "★★★★★",
    text: "Kuasanya nyaman, bahan cotton combed-nya terasa premium dan tidak mudah kusut. Sudah beli 2 kali.",
  },
  {
    name: "Dimas R.",
    stars: "★★★★☆",
    text: "Overall bagus, cuma agak longgar sedikit di bahu. Tapi nyaman dan sesuai foto.",
  },
]);
</script>
