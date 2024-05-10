<script setup>

const props = defineProps({
  name: String,
  price: Number,
  company: String,
})

console.log(props.name, props.price, props.company);

</script>

<template>
  <div>
    <img :src="$route.query.img_path" alt="img_path">
    <p>Name: {{ $route.query.name }}</p>
    <p>Company: {{ $route.query.company }}</p>
    <p>Price: {{ $route.query.price }}</p>
    <p>Color: {{ $route.query.color }}</p>
    <p>Type: {{ $route.query.type }}</p>
  </div>
</template>

<style scoped>

</style>