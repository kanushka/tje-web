<template>
  <div :id="componentId" class="overflow-hidden bg-transparent py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <NuxtLink :to="'/services#' + componentId">
              <h2 class="text-base font-semibold leading-7 text-blue-600">
                {{ service.caption }}
              </h2>
            </NuxtLink>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{ service.title }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ service.description }}
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in service.features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <!-- <component
                      :is="feature.icon"
                      class="absolute left-1 top-1 h-5 w-5 text-blue-600"
                      aria-hidden="true"
                  /> -->
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img v-if="hasImage" :src="service.image.src" :alt="service.image.alt"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432" height="1442" />
        <video v-if="hasVideo" controls>
          <source :src="service.video.src" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid';

const { service } = defineProps(['service']);

const hasImage = service.image?.src ? true : false;
const hasVideo = service.video?.src ? true : false;

const componentId = computed(() => {
  return service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
});
</script>
