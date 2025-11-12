<template>
    <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-16">
            <h2 class="text-center text-3xl md:text-4xl font-bold mb-12 tracking-wider krona-one">
                NEW ARRIVALS
            </h2>

            <div class="relative pb-8">

                <div class="overflow-hidden p-4">
                    <div class="flex transition-transform duration-500 ease-in-out gap-6" :style="transformStyle">
                        <div v-for="produk in newArrivals" :key="produk.id" class="flex-shrink-0" :style="itemStyle">
                            <CardProduk :produk="produk" />
                        </div>
                    </div>
                </div>

                <button @click="prevSlide" :disabled="currentIndex === 0"
                    class="absolute -left-12 top-1/2 -translate-y-1/2 text-black hover:text-gray-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button @click="nextSlide" :disabled="currentIndex >= maxIndex"
                    class="absolute -right-12 top-1/2 -translate-y-1/2 text-black hover:text-gray-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div class="flex justify-center gap-2 mt-6">
                <button v-for="index in totalDots" :key="index" @click="goToSlide(index - 1)"
                    :class="currentIndex === index - 1 ? 'bg-black w-6' : 'bg-gray-300 w-2'"
                    class="h-2 rounded-full transition-all duration-300"></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CardProduk from '@/components/CardProduk.vue'
import { produkData } from '@/data/Produk.js'

// State
const currentIndex = ref(0) // Ini adalah indeks HALAMAN saat ini
const itemsPerView = ref(4) // Default 4 item per halaman
const gapPx = 24 // Tailwind 'gap-6' = 1.5rem = 24px

// Ambil 8 produk pertama sebagai new arrivals
const newArrivals = computed(() => produkData.slice(0, 8))

// [FIX 4] Buat style width item menjadi dinamis
const itemStyle = computed(() => {
    const n = itemsPerView.value
    if (n === 1) {
        return { width: '100%' }
    }
    // Rumus: (100% / N) - ((N-1) * gap / N)
    const percent = 100 / n
    const compensation = (n - 1) * gapPx / n
    return {
        width: `calc(${percent}% - ${compensation}px)`
    }
})

// [FIX 5] Buat style transform menjadi dinamis untuk paging
const transformStyle = computed(() => {
    // Geser sejauh N * 100% (untuk halaman)
    const offsetPercent = currentIndex.value * 100
    // Tambah geseran untuk gap antar halaman
    const offsetGap = currentIndex.value * gapPx

    return {
        transform: `translateX(calc(-${offsetPercent}% - ${offsetGap}px))`
    }
})

// Hitung jumlah slide/halaman maksimal (Logika ini sudah benar)
const maxIndex = computed(() => {
    return Math.max(0, Math.ceil(newArrivals.value.length / itemsPerView.value) - 1)
})

// Hitung total dots (Logika ini sudah benar)
const totalDots = computed(() => {
    return maxIndex.value + 1
})

// Navigation functions (Logika ini sudah benar)
const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) {
        currentIndex.value++
    }
}

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const goToSlide = (index) => {
    currentIndex.value = index
}

// Responsive: Update items per view based on screen size (Logika ini sudah benar)
const updateItemsPerView = () => {
    const width = window.innerWidth
    if (width < 640) {
        itemsPerView.value = 1 // Mobile
    } else if (width < 768) {
        itemsPerView.value = 2 // Small tablet
    } else if (width < 1024) {
        itemsPerView.value = 3 // Tablet
    } else {
        itemsPerView.value = 4 // Desktop
    }
    // Reset index jika melebihi max
    if (currentIndex.value > maxIndex.value) {
        currentIndex.value = maxIndex.value
    }
}

onMounted(() => {
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateItemsPerView)
})
</script>

<style scoped>
/* Import Google Font - Krona One */
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.krona-one {
    font-family: 'Krona One', sans-serif;
}

/* Smooth scrolling for touch devices */
@media (hover: none) {
    .overflow-hidden {
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
    }

    .overflow-hidden>div>div {
        scroll-snap-align: start;
    }
}
</style>