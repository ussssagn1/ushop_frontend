<script setup>
  import {useHeadphoneStore} from "../store/headphones.js";
  import {onMounted} from "vue";

  const headphonesStore = useHeadphoneStore()


  onMounted(() => {
    headphonesStore.fetchItems()
  })
</script>

<template>
  <div class="w-[1248px] mx-auto grid grid-cols-3 gap-[16px]">
    <div v-for="headphone in headphonesStore.headphones" :key="headphone.id">
      <p>{{headphone.name}}</p>
      <p>{{headphone.company}}</p>
      <p>{{headphone.price}}</p>
      <p>{{headphone.type}}</p>
      <p>{{headphone.color}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>