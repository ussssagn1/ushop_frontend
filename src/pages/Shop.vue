<script setup>
import {useHeadphoneStore} from "../store/headphones.js";
import {onMounted} from "vue";
const headphonesStore = useHeadphoneStore()

const handleSortChange = (event) => {
  const selectedSort = event.target.value;
  let sortBy = 'name'; // По умолчанию сортируем по имени
  let sortOrder = 'asc'; // По умолчанию сортируем по возрастанию

  if (selectedSort === 'price') {
    sortBy = 'price';
    sortOrder = '1';
  } else if (selectedSort === '-price') {
    sortBy = 'price';
    sortOrder = '-1';
  }

  headphonesStore.filteredFetchItems(sortBy, sortOrder);
};

onMounted(() => {
  headphonesStore.fetchItems()
})
</script>

<template>
  <div>
    <div class="pt-[76px] w-[1248px] mx-auto text-[33px] text-black font-bold pb-[38px]">Магазин</div>
    <div class="w-[1248px] mx-auto">
      <div class="w-[261px] flex gap-10 items-center justify-between">
        <select @change="handleSortChange" id="select" class="border-2 w-[251px] h-[53px] py-3 px-3 rounded-md mb-5">
          <option value="name">Імені: A to Z</option>
          <option value="price">Ціна: від низької до високої</option>
          <option value="-price">Ціна: від високої до малої</option>
        </select>
      </div>
      <div class="w-[1248px] pb-[140px] mx-auto grid grid-cols-3 gap-[16px] gap-y-[16px]" v-auto-animate>
        <div class="" v-for="headphone in headphonesStore.headphones" :key="headphone._id">
          <router-link :to="{ path: `/headphone/${headphone._id}`, query: {
        name: headphone.name,
        company: headphone.company,
        price: headphone.price,
        type: headphone.type,
        color: headphone.color,
        img_path: headphone.img_path,
        desc: headphone.desc
      }}">
            <div class="w-[370px] h-[432px] px-5 py-5 hover:bg-gray-700/30 transition-all duration-700 rounded-md">
              <img :src='headphone.img_path' class="w-[320px] h-[310px] relative -z-50"  :alt="headphone.img_path">
              <p class="text-[#000] text-[20px] font-medium mt-[24px]">{{headphone.name}}</p>
              <p class="text-[#503E0F] text-[20px] font-medium">₴ {{headphone.price}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>