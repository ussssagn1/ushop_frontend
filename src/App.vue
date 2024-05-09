<script setup>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header></Header>
    <div class="flex-1 bg-red-50">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>

</template>

<style scoped>

</style>
