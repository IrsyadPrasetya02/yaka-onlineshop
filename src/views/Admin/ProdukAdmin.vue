<template>
  <div class="flex h-screen bg-gray-100">
    <!-- SIDEBAR -->
    <aside class="w-64 bg-white border-r p-4 flex flex-col">
      <img
        src="@/assets/Images/YAKA.png"
        alt="YAKA Logo"
        class="h-10 w-auto mb-6"
      />

      <nav class="space-y-3">
        <router-link
          to="/dashboard-admin"
          class="w-full block p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/dashboard-admin' ? 'bg-black text-white' : ''"
        >
          Dashboard
        </router-link>

        <router-link
          to="/produk-admin"
          class="w-full block p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/produk-admin' ? 'bg-black text-white' : ''"
        >
          Produk
        </router-link>

        <router-link to="#" class="w-full block p-2 rounded hover:bg-gray-200">
          Kategori
        </router-link>

        <router-link to="#" class="w-full block p-2 rounded hover:bg-gray-200">
          Pesanan
        </router-link>

        <router-link to="#" class="w-full block p-2 rounded hover:bg-gray-200">
          Settings
        </router-link>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <div class="flex-1 p-8 overflow-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Manajemen Produk</h1>

        <!-- USER ICON -->
        <div class="relative">
          <button @click="toggleUserMenu" class="hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <div
            v-if="userMenu"
            class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
          >
            <div class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile Admin
            </div>
            <div class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</div>
          </div>
        </div>
      </div>

      <!-- SEARCH -->
      <div class="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari Produk.."
          class="flex-1 px-4 py-3 bg-gray-100 rounded-lg"
        />
        <button class="px-6 py-3 bg-gray-200 rounded-lg">Semua Kategori</button>
      </div>

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-2xl font-bold">Produk</h2>
          <p class="text-gray-500">Kelola semua Produk anda</p>
        </div>

        <button
          @click="tambahProduk"
          class="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg"
        >
          ➕ Tambah Produk
        </button>
      </div>

      <!-- LIST PRODUK -->
      <div class="grid grid-cols-4 gap-6">
        <div
          v-for="item in products"
          :key="item.id"
          class="bg-white rounded-lg shadow p-3"
        >
          <img :src="item.image" class="rounded-lg w-full h-56 object-cover" />
          <h3 class="font-semibold mt-2">{{ item.name }}</h3>

          <div class="flex gap-2 mt-3">
            <button
              @click="bukaVarian(item.id)"
              class="flex items-center gap-1 border px-3 py-1 rounded text-sm"
            >
              ⚙️ Varian
            </button>
            <button
              class="flex items-center gap-1 border px-3 py-1 rounded text-sm"
            >
              ✏️ Edit
            </button>
          </div>

          <button class="w-full bg-black text-white py-1 mt-2 rounded text-sm">
            🗑 Hapus
          </button>
        </div>
      </div>
    </div>

    <!-- OVERLAY & POPUP TAMBAH PRODUK -->
    <div
      v-if="showModal"
      class="fixed inset-0 backdrop-blur-sm bg-white/10 z-40"
      @click="showModal = false"
    ></div>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <InputProduk
        :show="showModal"
        :kategori-list="kategoriDummy"
        @close="showModal = false"
        @submit="submitProduk"
      />
    </div>

    <!-- OVERLAY & POPUP VARIAN -->
    <div
      v-if="showVarianModal"
      class="fixed inset-0 backdrop-blur-sm bg-white/10 z-40"
      @click="tutupVarian"
    ></div>
    <div
      v-if="showVarianModal"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <InputVarian
        :produk-id="selectedProductId"
        @close="tutupVarian"
        @submit="submitVarian"
      />
    </div>
  </div>
</template>

<script>
import InputProduk from "@/views/Admin/InputProduk.vue";
import InputVarian from "@/views/Admin/InputVarian.vue";

export default {
  name: "ProdukAdmin",
  components: {
    InputProduk,
    InputVarian,
  },
  data() {
    return {
      userMenu: false,
      showModal: false,
      showVarianModal: false,
      selectedProductId: null,

      kategoriDummy: [
        { id: 1, nama: "T-shirt" },
        { id: 2, nama: "Hoodie" },
        { id: 3, nama: "Jaket" },
      ],

      products: [
        {
          id: 1,
          name: "Yaka T-Shirt Ojosk di denggol",
          image: "/src/assets/Images/p1.png",
        },
        {
          id: 2,
          name: "Yaka T-Shirt Lupa Bahagia",
          image: "/src/assets/Images/p2.png",
        },
        {
          id: 3,
          name: "Yaka T-Shirt Males Ribet",
          image: "/src/assets/Images/p3.png",
        },
        {
          id: 4,
          name: "Yaka T-Shirt Gaspol Terus",
          image: "/src/assets/Images/p4.png",
        },
        {
          id: 5,
          name: "Yaka T-Shirt Pede Aja Bro",
          image: "/src/assets/Images/p5.png",
        },
        {
          id: 6,
          name: "Yaka T-Shirt Kopi & Susu",
          image: "/src/assets/Images/p6.png",
        },
        {
          id: 7,
          name: "Yaka T-Shirt Ngalir Saja Lah",
          image: "/src/assets/Images/p7.png",
        },
        {
          id: 8,
          name: "Yaka T-Shirt Santuy Parah",
          image: "/src/assets/Images/p8.png",
        },
      ],
    };
  },
  methods: {
    toggleUserMenu() {
      this.userMenu = !this.userMenu;
    },

    tambahProduk() {
      this.showModal = true;
    },

    submitProduk(data) {
      console.log("Produk Baru:", data);
      this.showModal = false;
    },

    bukaVarian(productId) {
      this.selectedProductId = productId;
      this.showVarianModal = true;
    },

    tutupVarian() {
      this.showVarianModal = false;
      this.selectedProductId = null;
    },

    submitVarian(data) {
      console.log("Varian untuk produk ID:", this.selectedProductId, data);
      this.tutupVarian();
    },
  },

  mounted() {
    const handleClickOutside = (e) => {
      if (!this.$el.contains(e.target)) {
        this.userMenu = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    this._cleanup = () => document.removeEventListener("click", handleClickOutside);
  },

  beforeUnmount() {
    if (this._cleanup) this._cleanup();
  },
};
</script>

<style scoped></style>