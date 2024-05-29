<script setup>
import BlogPost from "../components/BlogPost.vue";

const posts = [
  {
    id: 1,
    image: '/public/blog/SONY WH-1000XM4.avif',
    date: 'May 27, 2024',
    title: 'Sony WH-1000XM4 Review',
    description: 'Sony WH-1000XM4 пропонує виняткові можливості шумозаглушення, виняткову якість звуку та тривалий комфорт. Ідеально підходять як для подорожей, так і для повсякденного використання, ці навушники є найкращим вибором як для аудіофілів, так і для звичайних слухачів.'
  },
  {
    id: 2,
    image: '/public/blog/MARSHALL MAJOR 4.webp',
    date: 'May 27, 2024',
    title: 'Marshall Major IV - Classic Design, Modern Features',
    description: 'Marshall Major IV поєднує фірмовий вінтажний дизайн бренду з сучасними функціями, такими як підключення Bluetooth, тривалий час автономної роботи та виняткова якість звуку. Ідеально підходить для тих, хто цінує стиль і зміст у своєму аудіообладнанні.'
  },
  {
    id: 3,
    image: '/public/blog/APPLE AIRPODS PRO.jpg',
    date: 'May 27, 2024',
    title: 'Apple AirPods Pro: The Ultimate Wireless Earbuds',
    description: 'Apple AirPods Pro мають активне шумозаглушення, зручну та надійну посадку та бездоганну інтеграцію з екосистемою Apple. Ці навушники ідеально підходять для користувачів, які шукають високоякісний звук і розширені функції в компактному дизайні.'
  },
  {
    id: 4,
    image: '/public/blog/BOSE.webp',
    date: 'May 27, 2024',
    title: 'Bose QuietComfort 35 II - Superior Comfort and Sound',
    description: 'Навушники Bose QuietComfort 35 II відомі своїм чудовим комфортом, вражаючим шумозаглушенням і високою якістю звуку. Ці навушники ідеально підходять для тривалого прослуховування вдома чи в дорозі.'
  },
  {
    id: 5,
    image: '/public/blog/SENNHEISER.jpg',
    date: 'May 27, 2024',
    title: 'Sennheiser HD 660 S - Audiophile\'s Dream',
    description: 'Sennheiser HD 660 S — це високопродуктивна пара навушників, розроблена для аудіофілів. Завдяки відкритому дизайну та винятковій чіткості звуку ці навушники створюють враження від прослуховування.'
  },
  {
    id: 6,
    image: '/public/blog/BEATS.jpg',
    date: 'May 27, 2024',
    title: 'Beats by Dre Solo Pro - Stylish and Powerful',
    description: 'Beats Solo Pro пропонує потужний звук, активне шумозаглушення та елегантний дизайн. Ці навушники ідеально підійдуть для тих, хто хоче поєднати стиль і високу якість виконання.'
  },
]
</script>

<template>
  <div class="container mx-auto p-4 mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BlogPost
          v-for="post in posts"
          :key="post.id"
          :image="post.image"
          :date="post.date"
          :title="post.title"
          :description="post.description"
      />
    </div>
  </div>
</template>

<style scoped>

</style>