<script setup lang="ts">
import { useOrganizationSchema } from '~/composables/useSEOData';

const organizationSchema = useOrganizationSchema();

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema),
      key: 'organization-schema'
    }
  ]
});
</script>

<template>
  <footer class="mt-24 bg-white">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <img src="~/assets/img/logo.png" class="h-8 mr-3" alt="TJE Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >TJ Engineering</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0"
        >
          <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
            <a href="https://www.freeprivacypolicy.com/live/2c369729-0109-46e4-bfdf-cb69407619a6" target="_blank" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="/about#contact" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span class="text-sm text-gray-500"
          >© 2023 <a href="/" class="hover:underline">TJ Engineering</a>. All
          Rights Reserved.</span
        >
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <a href="tel:+94773354353" class="hover:text-blue-600">+94 77 335 4353</a>
          <span>•</span>
          <a href="mailto:info@tjengineering.lk" class="hover:text-blue-600">info@tjengineering.lk</a>
        </div>
      </div>
    </div>
  </footer>
</template>

