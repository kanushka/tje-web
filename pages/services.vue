<template>
    <section>
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7bcce0] to-[#3387e7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>

            <div v-for="service in services" :key="service.id">
                <ServiceCard :service="service" />
            </div>

            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7bcce0] to-[#3387e7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

function useAsset(path: string): string {
    const assets = import.meta.glob('~/assets/**/*.{png,jpg,jpeg,gif,svg,webp,mp4}', {
        eager: true,
        import: 'default',
    })
    // @ts-expect-error: wrong type info
    return assets['/assets/' + path]
}

const services = [
    {
        id: 1,
        caption: "Services",
        title: "Steel Fabricating",
        description:
            "Steel fabrication is used to create different kinds of steel components for various applications such as buildings, bridges, machinery, equipment, and more. Steel fabrication requires specialized skills and tools to ensure quality and accuracy. At TJ Engineering, we provide high-quality welding services to ensure that our steel products are durable and long-lasting.",
        image: {
            src: useAsset("img/projects/4.jpeg"),
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [
            {
                name: "Steel Tank",
                description:
                    "is a container made of steel that is used to store liquids or gases. At TJ Engineering, we offer a wide range of steel tanks that are designed to meet your specific needs.",
            },
        ],
    },
    {
        id: 2,
        caption: "#",
        title: "Pipe Line Construction",
        description:
            "Pipeline construction is the process of building pipelines that transport fluids such as oil and gas. At TJ Engineering, we use high-quality welding techniques to ensure that our pipelines are strong and reliable.",
        image: {
            src: useAsset("img/projects/11.jpeg"),
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [
            {
                name: "Compress air line",
                description:
                    "are pipes that are used to transport compressed air from one location to another. At TJ Engineering, we offer a wide range of compressed air line pipes that are designed to meet your specific needs.",
            },
            {
                name: "Oil line",
                description:
                    "are pipes that are used to transport oil from one location to another. At TJ Engineering, we offer high-quality oil line pipes that are designed to withstand the toughest conditions.",
            },
            {
                name: "Steam line",
                description:
                    "are pipes that are used to transport steam from one location to another. At TJ Engineering, we offer custom-designed steam line pipes that are not only functional but also aesthetically pleasing.",
            },
        ],
    },
    {
        id: 3,
        caption: "#",
        title: "Steel Roofing",
        description:
            "Steel roofing is a type of roofing material that is made from steel. Steel roofing is durable and long-lasting and can be used in various applications such as residential homes and commercial buildings. At TJ Engineering, we provide high-quality welding services to ensure that our steel roofs are strong and reliable.",
        image: {
            src: useAsset("img/projects/3.jpeg"),
            alt: "Steel Roofing",
        },
        features: [],
    },
    {
        id: 4,
        caption: "#",
        title: "Steel Building Construction",
        description:
            "Steel building construction is the process of constructing buildings using steel as the primary structural material. Steel buildings are durable and can be used in various applications such as warehouses, factories, and office buildings. At TJ Engineering, we provide high-quality welding services to ensure that our steel buildings are strong and reliable.",
        image: {
            src: useAsset("img/projects/13.jpeg"),
            alt: "Steel Building Construction",
        },
        features: [],
    },
    {
        id: 5,
        caption: "#",
        title: "Spillway Gate",
        description:
            "TJ Engineering specializes in spillway gates designed to safely contain water, including water with chemicals, until it's deemed safe for disposal. Our spillway gates utilize materials like hot-dip galvanizing and rubber beading for durability. We offer both manual and automated (motorized) versions of our spillway gates, providing flexibility in operation and control over water flow. From design to installation and maintenance, our experienced team ensures tailored solutions for optimal performance and reliability in spillway gate projects. Choose TJ Engineering for secure water containment and controlled release, even with chemical-laden water.",
        image: {
            src: useAsset("img/projects/15.jpeg"),
            alt: "Spillway Gate",
        },
        features: [],
    },
    {
        id: 6,
        caption: "#",
        title: "Duct Installation",
        description:
            "Duct installation is the process of installing ducts that are used for heating, ventilation, and air conditioning (HVAC) systems. At TJ Engineering, we provide high-quality welding services to ensure that our ducts are strong and durable.",
        image: {
            src: useAsset("img/projects/17.jpg"),
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [],
    },
    {
        id: 7,
        caption: "#",
        title: "Steel Stairs",
        description:
            "Stairs are a series of steps that allow people to move from one level of a building to another. At TJ Engineering, we offer custom-designed stairs that are not only functional but also aesthetically pleasing.",
        image: {
            src: "https://images.pexels.com/photos/204264/pexels-photo-204264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [],
    },
    {
        id: 8,
        caption: "#",
        title: "Steel Grating Cover",
        description:
            "Steel grating covers are used for drainage and are made of steel grating plates and fixed frames. They are a good replacement for conventional cast iron materials.",
        image: {
            src: useAsset("img/projects/9.jpeg"),
            alt: "Steel Grating Cover",
        },
        features: [],
    },
    {
        id: 9,
        caption: "#",
        title: "Truck Loading and Unloading Conveyor",
        description:
            "TJ Engineering offers motorized auto-pulling and manual pulling conveyors for efficient truck loading and unloading. Our motorized conveyors provide automated handling, ideal for high-volume operations. For simpler tasks, our manual pulling conveyors offer reliability and flexibility. Both options are customizable to accommodate various truck and trailer sizes, ensuring streamlined logistics operations. Choose TJ Engineering for cost-effective solutions that optimize your truck loading and unloading processes",
        image:{},
        video: {
            src: useAsset("video/conveyors.mp4"),
            alt: "Truck Loading and Unloading Conveyor",
        },
        features: [],
    },
];
</script>

<style>
</style>
