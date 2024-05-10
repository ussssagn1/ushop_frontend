<script setup>
  import {useHeadphoneStore} from "../store/headphones.js";
  import {onMounted} from "vue";

  const headphonesStore = useHeadphoneStore()

  onMounted(() => {
    headphonesStore.fetchItems()
  })
</script>

<template>
  <div class="w-[1248px] mx-auto grid grid-cols-3 gap-[16px] gap-y-[16px]">
    <div v-for="headphone in headphonesStore.headphones" :key="headphone._id">
      <router-link :to="{ path: `/headphone/${headphone._id}`, query: {
        name: headphone.name,
        company: headphone.company,
        price: headphone.price,
        type: headphone.type,
        color: headphone.color,
        img_path: headphone.img_path,
      }}">
        <div class="w-[380px] h-[472px]">
          <img :src='headphone.img_path' class="w-[372px] h-[380px]"  :alt="headphone.img_path">
          <p class="text-[#000] text-[20px] font-medium mt-[24px]">{{headphone.name}}</p>
          <p class="text-[#503E0F] text-[20px] font-medium">₴ {{headphone.price}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>