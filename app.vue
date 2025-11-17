<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
let title = "TJ Engineering | Steel Fabrication & Construction Solutions";
let description =
  "TJ Engineering is a premium steel fabricating company in Bandaragama, Sri Lanka. We deliver innovative, high-quality solutions for civil, mechanical, electrical, and environmental engineering projects. Expert welding, construction, and fabrication services.";
let imgUrl = "https://tjengineering.lk/img/tje-logo.jpeg";
let phone = "+94 77 335 4353";
let email = "info@tjengineering.lk";
let address = "Bandaragama, Sri Lanka";
let latitude = "6.691806";
let longitude = "79.981333";

useHead({
  title: title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: "steel fabrication, welding, construction, engineering, Sri Lanka, steel structures, pipeline, roofing",
    },
    {
      name: "author",
      content: "TJ Engineering",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://tjengineering.lk",
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: imgUrl,
  ogUrl: "https://tjengineering.lk",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imgUrl,
});
</script>
