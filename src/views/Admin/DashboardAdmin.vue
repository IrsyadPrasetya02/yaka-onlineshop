<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r p-4 flex flex-col">
      <img
        src="@/assets/Images/YAKA.png"
        alt="YAKA Logo"
        class="h-10 w-auto mb-6"
      />

      <nav class="space-y-3">
        <a href="#" class="w-full block p-2 bg-black text-white rounded">Dashboard</a>
        <a href="#" class="w-full block p-2 hover:bg-gray-200 rounded">Produk</a>
        <a href="#" class="w-full block p-2 hover:bg-gray-200 rounded">Kategori</a>
        <a href="#" class="w-full block p-2 hover:bg-gray-200 rounded">Pesanan</a>
        <a href="#" class="w-full block p-2 hover:bg-gray-200 rounded">Settings</a>
      </nav>
    </aside>

    <!-- MAIN -->
    <main class="flex-1 p-6 overflow-y-auto">
      <!-- Top Bar -->
      <div class="flex justify-between items-center mb-6 relative">
        <h1 class="text-xl font-semibold">Dashboard</h1>

        <!-- USER ICON -->
        <div class="relative" ref="userMenuRef">
          <button @click="toggleUserMenu" class="hover:text-gray-600 transition mt-1">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <!-- DROPDOWN -->
          <div
            v-if="userMenuOpen"
            class="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-md border z-50 py-3 animate-fade"
          >
            <p class="px-4 py-1 font-semibold border-b">Admin Nyeni</p>

            <button
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
              @click="goToProfile"
            >
              Profile
            </button>

            <button
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-red-600"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-white p-5 rounded shadow">
          <p class="text-gray-600">Total Pesanan</p>
          <p class="text-3xl font-semibold">{{ filteredOrders.length }}</p>
        </div>

        <div class="bg-white p-5 rounded shadow">
          <p class="text-gray-600">Pemasukan</p>
          <p class="text-2xl font-semibold">Rp. 700.000.00</p>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white p-5 rounded shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold">Riwayat Pesanan</h2>

          <!-- Dropdown Status -->
          <select
            v-model="status"
            class="border px-3 py-2 rounded bg-white shadow-sm"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b text-left">
              <th class="py-2">Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="order in filteredOrders"
              :key="order.id"
              class="border-b"
            >
              <td class="py-2">{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.date }}</td>
              <td>
                <span
                  :class="statusBadge(order.status)"
                  class="px-2 py-1 rounded text-xs font-semibold"
                >
                  {{ order.status }}
                </span>
              </td>
              <td>Rp {{ order.total.toLocaleString() }}</td>
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
      userMenuOpen: false,
      status: "all",

      // DATA DUMMY PESANAN
      orders: [
        { id: "001", customer: "Budi", date: "2025-01-20", status: "completed", total: 150000 },
        { id: "002", customer: "Siti", date: "2025-01-21", status: "pending", total: 200000 },
        { id: "003", customer: "Rudi", date: "2025-01-22", status: "cancelled", total: 120000 },
        { id: "004", customer: "Alya", date: "2025-01-23", status: "completed", total: 320000 },
        { id: "005", customer: "Fajar", date: "2025-01-24", status: "pending", total: 90000 }
      ]
    };
  },

  computed: {
    // FILTER BERDASARKAN STATUS
    filteredOrders() {
      if (this.status === "all") return this.orders;
      return this.orders.filter(o => o.status === this.status);
    }
  },

  methods: {
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    logout() {
      this.$router.push("/logout");
    },

    // Badge Warna Status
    statusBadge(status) {
      return {
        completed: "bg-green-100 text-green-600",
        pending: "bg-yellow-100 text-yellow-600",
        cancelled: "bg-red-100 text-red-600"
      }[status];
    },

    // AUTO CLOSE DROPDOWN
    handleOutsideClick(e) {
      if (this.$refs.userMenuRef && !this.$refs.userMenuRef.contains(e.target)) {
        this.userMenuOpen = false;
      }
    }
  },

  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
};
</script>

<style scoped>
.animate-fade {
  animation: fadeIn 0.15s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
