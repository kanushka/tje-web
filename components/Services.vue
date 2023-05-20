<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need for your project</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We provide innovative solutions for construction projects. We design, fabricate, and install various types of steel structures with quality and safety.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div> -->
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Steel Fabricating',
      description:
        'Steel fabrication is used to create different kinds of steel components for various applications such as buildings, bridges, machinery, equipment, and more. Steel fabrication requires specialized skills and tools to ensure quality and accuracy.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Pipe Line Construction',
      description:
        'Pipeline construction requires specialized equipment and skilled workers to ensure safety and quality. Pipeline construction can be done for different purposes such as water supply, oil and gas transportation, sewage disposal or irrigation.',
      icon: LockClosedIcon,
    },
  ]
  </script>
