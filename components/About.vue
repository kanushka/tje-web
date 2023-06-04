<template>
  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-blue-600">
              About Us
            </p>
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Things to know before
            </h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              We offer a range of services for your construction needs,
              including steel fabrication, steel pipe line, and gas pipelines.
            </p>
          </div>
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <img
          class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="~/assets/img/projects/other-1.jpg"
          alt=""
        />
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
              <span class="font-semibold text-blue-600"
                >Tharanga Jayasinghe Engineering</span
              >
              is a trusted steel construction company that offers pipeline and
              steel fabrication services for various sectors. We have more than
              20 years of experience in delivering high-quality solutions for
              diverse industrial and commercial projects.
            </p>
            <p class="mt-8">
              We have a team of skilled professionals who can handle any
              challenge with efficiency and excellence. We use the latest
              technology and equipment to ensure the best results for our
              clients. Whether you need a custom-made pipeline, a structural
              steel frame, or any other steel fabrication service, we are ready
              to help you with your steel construction needs. Contact us today
              to get a free quote and consultation.
            </p>
            <h2 id="contact" class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Need more info?
            </h2>
            <ul role="list" class="mt-8 space-y-4 text-gray-600">
              <li class="flex gap-x-3">
                <PhoneIcon
                  class="mt-1 h-5 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>(+94) 77 335 4353</span>
              </li>
              <li class="flex gap-x-3">
                <EnvelopeIcon
                  class="mt-1 h-5 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>tjengineering133@gmail.com</span>
              </li>
              <li class="flex gap-x-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3962.63698374038!2d79.981333!3d6.691806!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDEnMzAuNSJOIDc5wrA1OCc1Mi44IkU!5e0!3m2!1sen!2sus!4v1684606714702!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { PhoneIcon, EnvelopeIcon } from "@heroicons/vue/20/solid";
</script>
