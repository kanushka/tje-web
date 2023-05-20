<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
let title = "TJ Engineering | We Fabricate your Dreams";
let description =
  "TJ Engineering is a steel fabricating company in Bandaragama, Sri Lanka. We offer innovative and high-quality solutions for construction projects.";
let imgUrl = "http://tjengineering.lk/img/tje-logo.jpeg";

useHead({
  title: title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: imgUrl,
  twitterCard: "summary_large_image",
});
</script>
