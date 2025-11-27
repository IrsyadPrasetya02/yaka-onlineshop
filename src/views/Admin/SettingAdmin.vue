<template>
  <div class="flex h-screen bg-gray-100">
    <!-- SIDEBAR -->
    <aside class="w-64 bg-white border-r p-4 flex flex-col">
      <!-- Logo -->
      <img
        src="@/assets/Images/YAKA.png"
        alt="YAKA Logo"
        class="h-10 w-auto mb-6"
      />

      <!-- Menu -->
      <nav class="space-y-3">
        <router-link
          to="/dashboard-admin"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/dashboard-admin' ? 'bg-black text-white' : ''"
        >
          <i class="fas fa-home"></i> Dashboard
        </router-link>

        <router-link
          to="/produk-admin"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/produk-admin' ? 'bg-black text-white' : ''"
        >
          <i class="fas fa-box"></i> Produk
        </router-link>

        <router-link
          to="/kategori-admin"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/kategori-admin' ? 'bg-black text-white' : ''"
        >
          <i class="fas fa-tags"></i> Kategori
        </router-link>

        <router-link
          to="#"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
        >
          <i class="fas fa-shopping-cart"></i> Pesanan
        </router-link>

        <router-link
          to="/setting-admin"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/setting-admin' ? 'bg-black text-white' : ''"
        >
          <i class="fas fa-cog"></i> Settings
        </router-link>
      </nav>

      <div class="mt-auto pt-10">
        <button class="flex items-center gap-3 text-gray-600 hover:text-black">
          <i class="fas fa-question-circle"></i> Help
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex flex-col">
      <!-- TOP BAR -->
      <header class="border-b bg-white px-6 py-4 flex items-center justify-between">
        <p class="text-center w-full font-semibold tracking-wide">
          Elevate Your Style with Us
        </p>
        <i class="fas fa-user text-xl"></i>
      </header>

      <!-- CONTENT -->
      <div class="p-8 overflow-y-auto">
        <h1 class="text-2xl font-bold mb-1">Pengaturan Toko</h1>
        <p class="text-gray-600 mb-6">Kelola Informasi dasar Toko Anda</p>

        <div class="bg-white rounded-xl shadow p-8 border max-w-3xl">
          <!-- SECTION: PROFIL TOKO -->
          <h2 class="font-semibold text-lg mb-1">Profil Toko</h2>
          <p class="text-gray-500 text-sm mb-4">
            Informasi ini akan ditampilkan pada halaman toko dan invoice
          </p>

          <!-- Nama Toko -->
          <label class="block text-sm font-medium mb-1">Nama Toko*</label>
          <input
            v-model="storeName"
            type="text"
            class="w-full border rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Yaka Online Shop"
          />
          <p class="text-gray-500 text-sm mt-1 mb-4">
            Nama ini akan muncul di header dan invoice
          </p>

          <hr class="my-6" />

          <!-- SECTION: INFORMASI KONTAK -->
          <h2 class="font-semibold text-lg mb-1">Informasi Kontak</h2>

          <!-- Email & HP -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                v-model="email"
                type="email"
                class="w-full border rounded-lg px-4 py-2 bg-gray-100"
                placeholder="fadhil@gmail.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">
                No Hp/WhatsApp
              </label>
              <input
                v-model="phone"
                type="text"
                class="w-full border rounded-lg px-4 py-2 bg-gray-100"
                placeholder="+62 895-2902-1230"
              />
            </div>
          </div>

          <!-- Alamat Toko -->
          <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Alamat Toko</label>
            <input
              v-model="address"
              type="text"
              class="w-full border rounded-lg px-4 py-2 bg-gray-100"
              placeholder="Mesem UNS"
            />
            <p class="text-gray-500 text-sm mt-1">
              Alamat ini akan digunakan untuk pengiriman dan kontak pelanggan
            </p>
          </div>

          <!-- Save -->
          <button
            @click="save"
            class="mt-6 bg-black text-white px-6 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeName: "Yaka Online Shop",
      email: "fadhil@gmail.com",
      phone: "+62 895-2902-1230",
      address: "Mesem UNS",
    };
  },
  methods: {
    save() {
      alert("Pengaturan berhasil disimpan!");
    },
  },
};
</script>

<style scoped></style>
