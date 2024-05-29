<template>
  <div class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform" :class="{'translate-x-full': !isOpen, 'translate-x-0': isOpen}">
    <div class="p-4">
      <button @click="closeCart" class="text-gray-600 absolute top-4 right-4 pt-[3px]">Закрити</button>
      <h2 class="text-xl font-semibold mb-4">Корзина товарів</h2>
      <ul>
        <li v-for="item in items" :key="item._id" class="flex justify-between items-center mb-4">
          <img :src="item.img_path" alt="Product Image" class="w-24 h-24 object-cover">
          <div class="ml-4">
            <h3 class="text-md font-semibold">{{ item.name }}</h3>
            <p class="text-sm">₴ {{ item.price }}</p>
            <p class="text-sm">Qty: <input type="number" v-model.number="item.quantity" min="1" class="w-12 border rounded p-1"></p>
          </div>
          <button @click="removeItem(item._id)" class="text-red-600">x</button>
        </li>
      </ul>
      <div class="border-t pt-4">
        <p class="text-lg font-semibold">Загальна ціна: ₴{{ totalPrice }}</p>
        <button v-if="!isOrdered" @click="placeOrder" class="bg-gray-400 text-white px-4 py-2 rounded mt-4">Оформити заказ</button>
        <p v-else class="text-green-600 font-semibold mt-4">Готово!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart.js';
import { toRefs, ref } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  closeCart: {
    type: Function,
    required: true,
  },
});

const cartStore = useCartStore();
const { items, totalPrice } = toRefs(cartStore);
const isOrdered = ref(false);

const removeItem = (_id) => {
  cartStore.removeItem(_id);
};

const placeOrder = () => {
  isOrdered.value = true;
};
</script>

<style scoped>
</style>
