<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import { ref } from 'vue';

const isCartOpen = ref(false);

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="border-b-2 border-gray-200 pb-10">
      <div class="flex items-center justify-between w-[1248px] mx-auto pt-[64px] pb-[18px]">
        <router-link to="/">
          <img src="../public/Group%2057.svg" alt="">
        </router-link>
        <div class="flex items-center justify-center gap-[50px]">
          <nav>
            <ul class="flex items-center justify-between gap-[64px]">
              <li>
                <router-link
                    to="/shop"
                    class="hover:border-b-2 hover:border-black transition-all"
                >
                  Магазин
                </router-link>
              </li>
              <li>
                <router-link
                    to="/blog"
                    class="hover:border-b-2 hover:border-black transition-all"
                >
                  Блог
                </router-link>
              </li>
              <li>
                <router-link
                    to="/history"
                    class="hover:border-b-2 hover:border-black transition-all"
                >
                  Наша історія
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="flex items-center justify-center gap-[39px]">
            <a href="#">
              <img src="../public/headerLinks/Search.svg" alt="">
            </a>
            <a href="#" @click="toggleCart">
              <img src="../public/headerLinks/Bucket.svg" alt="">
            </a>
            <router-link to="/account">
              <img src="../public/headerLinks/Account.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <Footer></Footer>
    <ShoppingCart :isOpen="isCartOpen" :closeCart="toggleCart" />
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
