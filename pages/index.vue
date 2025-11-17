<script setup lang="ts">
const title = "TJ Engineering | Steel Fabrication & Construction Solutions";
const description = "Premium steel fabricating and construction services in Sri Lanka. We deliver innovative solutions for civil, mechanical, electrical, and environmental engineering projects.";

useSeoMeta({
  title: title,
  description: description,
});
</script>

<template>
  <section>
    <Hero />
  </section>
  <section class="hidden lg:block">
    <Portfolio />
  </section>
  <section id="services">
    <Services />
  </section>
  <section>
    <Clients />
  </section>
</template>