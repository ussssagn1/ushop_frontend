<script setup>

</script>

<template>
  <div class="border-b-2 border-gray-200 pb-10">
    <div class="flex items-center justify-between w-[1248px] mx-auto pt-[64px] pb-[18px]">
      <router-link to="/"><img src="../../public/Group%2057.svg" alt=""></router-link>
      <div class="flex items-center justify-center gap-[50px]">
        <nav>
          <ul class="flex items-center justify-between gap-[64px]">
            <li>
              <router-link to="/shop" class="hover:font-bold transition-all">Магазин</router-link>
            </li>
            <li>
              <router-link to="/blog" class="hover:font-bold transition-all">Блог</router-link>
            </li>
            <li>
              <router-link to="/history" class="hover:font-bold transition-all">Наша історія</router-link>
            </li>
          </ul>
        </nav>      |
        <div class="flex items-center justify-center gap-[39px]">
          <a href="#">
            <img src="../../public/headerLinks/Search.svg" alt="">
          </a>
          <a href="#">
            <img src="../../public/headerLinks/Bucket.svg" alt="">
          </a>
          <a href="#">
            <img src="../../public/headerLinks/Account.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>