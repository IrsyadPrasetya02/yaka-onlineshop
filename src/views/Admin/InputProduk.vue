<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-transparent z-50"
  >
    <div class="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl relative">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
      >
        ✕
      </button>

      <!-- Title -->
      <div class="flex items-center gap-3 mb-6">
        <i class="fas fa-box text-2xl"></i>
        <h2 class="text-xl font-semibold">Tambah Produk</h2>
      </div>

      <!-- Form -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Nama Produk -->
        <div>
          <label class="text-sm font-medium">Nama Produk *</label>
          <input
            v-model="nama"
            type="text"
            placeholder="Masukkan Nama Produk..."
            class="w-full mt-1 border rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <!-- Kategori -->
        <div>
          <label class="text-sm font-medium">Kategori *</label>
          <select
            v-model="kategori"
            class="w-full mt-1 border rounded-lg px-4 py-2 bg-gray-100"
          >
            <option value="">-- Pilih Kategori --</option>
            <option v-for="c in kategoriList" :key="c.id" :value="c.nama">
              {{ c.nama }}
            </option>
          </select>
        </div>
      </div>

      <!-- Deskripsi -->
      <div class="mt-4">
        <label class="text-sm font-medium">Deskripsi</label>
        <textarea
          v-model="deskripsi"
          placeholder="Masukkan Deskripsi Produk..."
          class="w-full border bg-gray-100 h-28 rounded-lg px-4 py-2"
        ></textarea>
      </div>

      <!-- Upload Gambar -->
      <div class="mt-4">
        <label class="text-sm font-medium">Gambar Produk</label>

        <label
          class="flex items-center justify-between border rounded-lg px-4 py-2 bg-gray-100 mt-1 cursor-pointer"
        >
          <span class="flex items-center gap-2">
            <i class="fas fa-download"></i>
            Pilih Gambar (JPG/PNG)
          </span>
          <input
            type="file"
            multiple
            accept="image/*"
            class="hidden"
            @change="handleFile"
          />
        </label>
        <p class="text-xs text-gray-500 mt-1">
          * Anda dapat memilih beberapa gambar sekaligus
        </p>

        <!-- List Gambar -->
        <div class="mt-2 flex gap-2 flex-wrap">
          <div
            v-for="(img, index) in preview"
            :key="index"
            class="w-20 h-20 rounded overflow-hidden border"
          >
            <img :src="img" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-end gap-3 mt-6">
        <button
          @click="$emit('close')"
          class="px-6 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300"
        >
          Batal
        </button>

        <button
          @click="submitForm"
          class="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-900"
        >
          Tambah Produk
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    kategoriList: Array,
  },
  data() {
    return {
      nama: "",
      kategori: "",
      deskripsi: "",
      gambar: [],
      preview: [],
    };
  },
  methods: {
    handleFile(e) {
      this.gambar = [...e.target.files];
      this.preview = this.gambar.map((file) => URL.createObjectURL(file));
    },

    submitForm() {
      const data = {
        nama: this.nama,
        kategori: this.kategori,
        deskripsi: this.deskripsi,
        gambar: this.gambar,
      };

      this.$emit("submit", data);
    },
  },
};
</script>

<style scoped></style>
