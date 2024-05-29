<script setup>
  import {useHeadphoneStore} from "../store/headphones.js";
  import {onMounted, computed} from "vue";
  import {Swiper, SwiperSlide} from "swiper/vue";
  import {Autoplay} from "swiper/modules";
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const headphonesStore = useHeadphoneStore()
  const shuffleAndSlice = (array, size) => {
    // Копируем массив, чтобы не изменять оригинал
    let newArray = array.slice();
    // Алгоритм Фишера-Йетса для перемешивания
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    // Возвращаем обрезанный массив
    return newArray.slice(0, size);
  };

  const shuffledAndSlicedArray = computed(() => shuffleAndSlice(headphonesStore.headphones, 6));

  onMounted(() => {
    headphonesStore.fetchItems()
  })
</script>

<template>
  <div class="-z-50">
    <swiper :modules="[Autoplay]" :autoplay="{ delay: 2500, disableOnInteraction: false }" style="height: 643px">
      <swiper-slide class="-z-50" style="position: relative;">
        <img class="absolute top-0 w-[100%] right-0 -z-50" src="/public/BackGroundSonyXM5.png" alt="">
        <div class="z-50 pt-[228px] pl-[55px]">
          <div class="text-[33px] font-bold text-white">Sony WH-1000XM5</div>
          <div class="text-[26px] mb-[44px] text-white">₴ 14 799</div>
          <router-link to="/" class="text-[20px] font-bold border-2 rounded-lg py-[13px] px-[35px] text-white hover:bg-white hover:text-black transition-all duration-300">Дивитись продукт</router-link>
        </div>
      </swiper-slide>
      <swiper-slide class="-z-50" style="position: relative;">
        <img class="absolute top-0 w-[100%] right-0 -z-50" src="/public/MAJOR.webp" alt="">
        <div class="z-50 pt-[228px] pl-[55px]">
          <div class="text-[33px] font-bold text-white">Marshall Major 4</div>
          <div class="text-[26px] mb-[44px] text-white">₴ 6499</div>
          <router-link to="/" class="text-[20px] font-bold border-2 rounded-lg py-[13px] px-[35px] text-white hover:bg-white hover:text-black transition-all duration-300">Дивитись продукт</router-link>
        </div>
      </swiper-slide>
      <swiper-slide class="-z-50" style="position: relative;">
        <img class="absolute top-0 w-[100%] right-0 -z-50" src="/public/APPLE-BG.jpg" alt="">
        <div class="z-50 pt-[228px] pl-[55px]">
          <div class="text-[33px] font-bold text-white">Apple AirPods Max</div>
          <div class="text-[26px] mb-[44px] text-white">₴ 16 799</div>
          <router-link to="/" class="text-[20px] font-bold border-2 rounded-lg py-[13px] px-[35px] text-white hover:bg-white hover:text-black transition-all duration-300">Дивитись продукт</router-link>
        </div>
      </swiper-slide>
      <swiper-slide class="-z-50" style="position: relative;">
        <img class="absolute top-0 w-[100%] right-0 -z-50" src="/public/Marshall-BG.jpg" alt="">
        <div class="z-50 pt-[228px] pl-[55px]">
          <div class="text-[33px] font-bold text-white">Marshall Monitor II ANC</div>
          <div class="text-[26px] mb-[44px] text-white">₴ 16 899</div>
          <router-link to="/" class="text-[20px] font-bold border-2 rounded-lg py-[13px] px-[35px] text-white hover:bg-white hover:text-black transition-all duration-300">Дивитись продукт</router-link>
        </div>
      </swiper-slide>
      <swiper-slide class="-z-50" style="position: relative;">
        <img class="absolute top-0 w-[100%] right-0 -z-50" src="/public/AIRPRO.webp" alt="">
        <div class="z-50 pt-[228px] pl-[55px]">
          <div class="text-[33px] font-bold text-white">Apple AirPods Pro</div>
          <div class="text-[26px] mb-[44px] text-white">₴ 8 499</div>
          <router-link to="/" class="text-[20px] font-bold border-2 rounded-lg py-[13px] px-[35px] text-white hover:bg-white hover:text-black transition-all duration-300">Дивитись продукт</router-link>
        </div>
      </swiper-slide>
    </swiper>
    <div class="w-[1248px] pt-[140px] pb-[140px] mx-auto grid grid-cols-3 gap-[16px] gap-y-[16px]">
      <div class="" v-for="headphone in shuffledAndSlicedArray" :key="headphone._id">
        <router-link :to="{ path: `/headphone/${headphone._id}`, query: {
          name: headphone.name,
          company: headphone.company,
          price: headphone.price,
          type: headphone.type,
          color: headphone.color,
          img_path: headphone.img_path,
          desc: headphone.desc,
          _id: headphone._id
        }}">
          <div class="w-[380px] h-[472px] px-5 py-5 hover:bg-gray-700/30 transition-all duration-700 rounded-md">
            <img :src='headphone.img_path' class="w-[352px] h-[360px] relative -z-50"  :alt="headphone.img_path">
            <p class="text-[#000] text-[20px] font-medium mt-[24px]">{{headphone.name}}</p>
            <p class="text-[#503E0F] text-[20px] font-medium">₴ {{headphone.price}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>