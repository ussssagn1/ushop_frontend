<template>
  <div class="container mx-auto p-6">
    <div class="flex items-center mb-6">
      <img
          src="../../public/avatar.svg"
          alt="Avatar"
          class="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <h2 class="text-2xl font-semibold">Мій акаунт</h2>
        <p>
          Привіт Дмитро! (не Дмитро?
          <a href="#" class="text-blue-500 underline">Вийти</a>)
        </p>
      </div>
    </div>
    <div class="border-b mb-6">
      <nav class="flex space-x-4">
        <button
            class="pb-2"
            :class="'border-b-2' ? dashboardOpen === true : ordersOpen = false"
            @click="clickDashboard"
        >
          Панель інформації
        </button>
        <button
            @click="clickOrders"
            :class="'border-b-2' ? dashboardOpen === false : ordersOpen = true"
            class="pb-2"
        >
          Замовлення
        </button>
      </nav>
    </div>
    <div>
      <div v-if="dashboardOpen" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Панель інформації</h2>
        <div class="bg-white shadow-md rounded p-4">
          <h3 class="text-xl font-semibold mb-2">Інформація о користуваче</h3>
          <p><strong>Ім'я:</strong> Зайцев Дмитро</p>
          <p><strong>Email:</strong> zaytsevdima031107@gmail.com</p>
          <p><strong>Дата реєстрації:</strong> Листопад 7, 2003</p>
        </div>nit
      </div>
      <div v-if="ordersOpen" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Замовлення</h2>
        <div class="bg-white shadow-md rounded p-4 mb-4">
          <h3 class="text-xl font-semibold mb-2">Замовлення #12345</h3>
          <p><strong>Дата:</strong> Червень 1, 2023</p>
          <p><strong>Навушники:</strong> Apple AirPods Max</p>
          <p><strong>Ціна:</strong> ₴ 16 799</p>
        </div>
        <div class="bg-white shadow-md rounded p-4 mb-4">
          <h3 class="text-xl font-semibold mb-2">Замовлення #12346</h3>
          <p><strong>Дата:</strong> Березень 15, 2024</p>
          <p><strong>Навушники:</strong> Marshall Monitor II ANC</p>
          <p><strong>Ціна:</strong> ₴ 16 899</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref} from "vue";

const route = useRoute();
const dashboardOpen = ref(true)
const ordersOpen = ref(false)

const clickOrders = () => {
  dashboardOpen.value = false
  ordersOpen.value = true
}

const clickDashboard = () => {
  dashboardOpen.value = true
  ordersOpen.value = false
}


const isActive = (path) => {
  return route.path === path;
};


</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
