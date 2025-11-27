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

        <router-link
          to="/kategori-admin"
          class="w-full block p-2 rounded hover:bg-gray-200"
          :class="$route.path === '/kategori-admin' ? 'bg-black text-white' : ''"
        >
          Kategori
        </router-link>

        <router-link
          to="#"
          class="w-full block p-2 rounded hover:bg-gray-200"
        >
          Pesanan
        </router-link>

        <router-link
          to="#"
          class="w-full block p-2 rounded hover:bg-gray-200"
        >
          Settings
        </router-link>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 p-8 overflow-y-auto">
      <!-- TOP TITLE -->
      <h1 class="text-2xl font-bold mb-6">Manajemen Kategori</h1>

      <!-- SEARCH & BUTTON -->
      <div class="flex items-center justify-between mb-6">
        <input
          v-model="search"
          type="text"
          placeholder="Cari Produk.."
          class="w-2/5 border rounded-lg px-4 py-2 bg-gray-100"
        />

        <button
          class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
        >
          <span class="text-xl font-bold">＋</span> Tambah Kategori
        </button>
      </div>

      <!-- SUBTITLE -->
      <div class="bg-gray-100 border px-6 py-3 rounded mb-4">
        <h2 class="text-xl font-bold">Kategori Produk</h2>
        <p class="text-gray-600 text-sm">
          Atur Kategori Produk untuk Organisasi yang lebih baik
        </p>
      </div>

      <!-- TABLE -->
      <div class="bg-white rounded shadow p-0 overflow-hidden">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="py-3 px-4">Kategori</th>
              <th class="py-3 px-4 w-32">Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in filteredCategories"
              :key="index"
              class="border-b"
            >
              <td class="py-3 px-4">{{ item }}</td>

              <td class="py-3 px-4 flex items-center gap-4">
                <!-- Edit -->
                <button class="text-blue-600 text-lg">
                  <i class="fas fa-edit"></i>
                </button>

                <!-- Delete -->
                <button class="text-red-600 text-lg">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      categories: ["T-shirt", "Jaket"]
    };
  },

  computed: {
    filteredCategories() {
      return this.categories.filter(cat =>
        cat.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped></style>
