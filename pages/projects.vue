<template>
    <section>
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-0 -z-10 overflow-hidden">
                <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>

            <div class="my-20 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <p class="text-base font-semibold leading-7 text-blue-600">
                                Projects
                            </p>
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                A showcase of our engineering excellence and innovation
                            </h1>
                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                At TJ Engineering, we are proud of our track record of delivering high-quality and cost-effective solutions for a wide range of
                                engineering challenges. We have successfully completed projects in various sectors, such as civil, mechanical, electrical, and
                                environmental engineering. Here are some examples of our past projects that demonstrate our expertise and professionalism.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="grid gap-2 grid-cols-2 md:grid-cols-3 md:gap-4">
                <span v-for="image in images" :key="image.id">
                    <img :src="image.url" class="" :alt="image.id.toString()" />
                </span>
            </div>

            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7bcce0] to-[#3387e7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const title = "Our Projects | Steel Engineering Showcase";
const description = "View our portfolio of completed projects demonstrating our engineering excellence and innovation in civil, mechanical, electrical, and environmental engineering sectors.";

useSeoMeta({
  title: title,
  description: description,
});

function useAsset(path: string): string {
    const assets = import.meta.glob('~/assets/**/*.{png,jpg,jpeg,gif,svg,webp,mp4}', {
        eager: true,
        import: 'default',
    })
    // @ts-expect-error: wrong type info
    return assets['/assets/' + path]
}

const images = [
    {
        id: 2,
        url: useAsset("img/projects/2.jpeg")
    },
]

for (let index = 3; index <= 18; index++) {
    images.push({
        id: index,
        url: useAsset(`img/projects/${index}.jpeg`)
    })

}

</script>

<style>
</style>
