<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
      <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <div class="text-gray-500 text-xs">{{ product.date }}</div>
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="text-gray-900 font-bold">{{ product.price }}</p>
        <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore} from "../store/cart.js";

const cartStore = useCartStore()

const products = [
  { id: 1, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Sony WH-1000XM4', description: 'Exceptional noise-canceling capabilities and outstanding sound quality.', price: 350 },
  { id: 2, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Marshall Major IV', description: 'Vintage design with modern features and long battery life.', price: 150 },
  { id: 3, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Apple AirPods Pro', description: 'Active noise cancellation and seamless integration with Apple devices.', price: 250 },
  { id: 4, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Bose QuietComfort 35 II', description: 'Superior comfort and rich sound quality.', price: 300 },
  { id: 5, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Sennheiser HD 660 S', description: 'High-performance headphones for audiophiles.', price: 500 },
  { id: 6, image: 'https://via.placeholder.com/300', date: 'May 27, 2024', title: 'Beats by Dre Solo Pro', description: 'Powerful sound and active noise cancellation.', price: 200 },
]

const addToCart = (product) => {
  cartStore.addItem(product)
}

</script>

<style scoped>

</style>
