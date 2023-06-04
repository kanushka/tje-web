<template>
  <div class="grid gap-4 grid-cols-3">
    <span v-for="image in images" :key="image.id">
        <img :src="image.url" class="h-[28rem]" :alt="image.id" />
    </span>
  </div>
</template>

<script setup>
const imgUrl = computed(() => {
    return new URL(`assets/img/projects/other-1.jpg`, import.meta.url).href;
  });

const getImageUrl = (path) => {
  return new URL(`/assets/img/${path}`, import.meta.url).href
}

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/256112/pexels-photo-256112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/257727/pexels-photo-257727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]
</script>

