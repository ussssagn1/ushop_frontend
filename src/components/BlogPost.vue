<script setup>
  defineProps({
    image: String,
    date: String,
    title: String,
    description: String,
  })
</script>

<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img :src="image" alt="Blog Image" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="text-gray-500 text-xs">{{ date }}</div>
      <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
      <p class="text-gray-700">{{ description }}</p>
      <a href="#" class="text-blue-500 hover:underline mt-4 block">Read More</a>
    </div>
  </div>
</template>

<style scoped>

</style>