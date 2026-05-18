<script setup lang="ts">
import AboutSection from '~/components/About.vue';

const title = "About TJ Engineering | Steel Fabrication Experts";
const description = "Learn about TJ Engineering's track record of delivering high-quality and cost-effective solutions in civil, mechanical, electrical, and environmental engineering sectors.";

useSeoMeta({
  title: title,
  description: description,
});
</script>

<template>
  <section>
    <AboutSection />
  </section>
  <!-- <section>
    <Contact />
  </section> -->
</template>
