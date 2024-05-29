<script setup>
import { useCartStore } from '../store/cart.js';
import { useRoute } from 'vue-router';
import {onMounted} from "vue";

const route = useRoute();
const cartStore = useCartStore();

console.log(route.query._id);

const addToCart = () => {

  const product = {
    name: route.query.name,
    price: route.query.price,
    img_path: route.query.img_path,
    desc: route.query.desc,
  };
  cartStore.addItem(product);
};
</script>

<template>
  <div class="mb-[100px]">
    <div class="w-[1247px] pt-10 mx-auto gap-[62px] flex">
      <img :src="$route.query.img_path" alt="img_path" class="w-[590px] h-[600px]" />
      <div>
        <div class="text-[26px] pb-[23px]">{{ $route.query.name }}</div>
        <div class="text-[#503E0F] text-[20px] pb-[34px]">₴ {{ route.query.price }}</div>
        <div class="flex items-center gap-[10px] pb-16">
          <img src="./../../public/star.svg" alt="">
          <img src="./../../public/star.svg" alt="">
          <img src="./../../public/star.svg" alt="">
          <img src="./../../public/star.svg" alt="">
          <img src="./../../public/star.svg" alt="">
        </div>
        <button @click="addToCart" class="px-[127px] py-[16px] border-2 mb-5 rounded-xl hover:bg-gray-400 hover:text-white transition-all duration-300">ДОДАТИ ДО КОРЗИНИ</button>
        <p class="text-[16px] text-gray-600 w-[484px] pb-10">{{ $route.query.desc }}</p>
        <div class="flex items-center pb-16 gap-[39px]">
          <img src="../../public/icons/like.svg" alt="" class="pr-[39px] border-r-2">
          <div class="flex gap-[24px]">
            <img src="../../public/icons/mail.svg" alt="">
            <img src="../../public/icons/facebook.svg" alt="">
            <img src="../../public/icons/instagram.svg" alt="">
            <img src="../../public/icons/twitter.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
