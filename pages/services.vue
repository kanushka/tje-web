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

<script setup>
const services = [
    {
        id: 1,
        caption: "Services",
        title: "Steel Fabricating",
        description:
            "Steel fabrication is used to create different kinds of steel components for various applications such as buildings, bridges, machinery, equipment, and more. Steel fabrication requires specialized skills and tools to ensure quality and accuracy. At TJ Engineering, we provide high-quality welding services to ensure that our steel products are durable and long-lasting.",
        image: {
            src: "https://images.unsplash.com/photo-1609627016501-b862497c7294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [
            {
                name: "Steel Tank",
                description:
                    "is a container made of steel that is used to store liquids or gases. At TJ Engineering, we offer a wide range of steel tanks that are designed to meet your specific needs.",
            },
            {
                name: "Steel Roofing",
                description:
                    "is a type of roofing material made of steel. It is durable and long-lasting. At TJ Engineering, we offer high-quality steel roofing solutions that are designed to withstand the toughest weather conditions.",
            },
            {
                name: "Stairs",
                description:
                    "are a series of steps that allow people to move from one level of a building to another. At TJ Engineering, we offer custom-designed stairs that are not only functional but also aesthetically pleasing.",
            },
        ],
    },
    {
        id: 2,
        caption: "Services",
        title: "Pipe Line Construction",
        description:
            "Pipeline construction is the process of building pipelines that transport fluids such as oil and gas. At TJ Engineering, we use high-quality welding techniques to ensure that our pipelines are strong and reliable.",
        image: {
            src: "https://plus.unsplash.com/premium_photo-1682144410110-d91b702a7dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=717&q=80",
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
            {
                name: "LPG pipe line",
                description:
                    "is a pipe that is used to transport liquefied petroleum gas (LPG) from one location to another. At TJ Engineering, we offer high-quality LPG pipes that are designed to meet your specific needs",
            },
        ],
    },
    {
        id: 3,
        caption: "Services",
        title: "Steel Roofing",
        description:
            "Steel roofing is a type of roofing material that is made from steel. Steel roofing is durable and long-lasting and can be used in various applications such as residential homes and commercial buildings. At TJ Engineering, we provide high-quality welding services to ensure that our steel roofs are strong and reliable.",
        image: {
            src: "https://images.pexels.com/photos/159475/latvia-irbene-radio-telescope-159475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Steel Roofing",
        },
        features: [],
    },
    {
        id: 4,
        caption: "Services",
        title: "Steel Building Construction",
        description:
            "Steel building construction is the process of constructing buildings using steel as the primary structural material. Steel buildings are durable and can be used in various applications such as warehouses, factories, and office buildings. At TJ Engineering, we provide high-quality welding services to ensure that our steel buildings are strong and reliable.",
        image: {
            src: "https://images.unsplash.com/photo-1507951040356-070c34d99269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            alt: "Steel Building Construction",
        },
        features: [],
    },
    {
        id: 5,
        caption: "Services",
        title: "Duct Installation",
        description:
            "Duct installation is the process of installing ducts that are used for heating, ventilation, and air conditioning (HVAC) systems. At TJ Engineering, we provide high-quality welding services to ensure that our ducts are strong and durable.",
        image: {
            src: "https://images.pexels.com/photos/7534234/pexels-photo-7534234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [],
    },
    {
        id: 6,
        caption: "Services",
        title: "Steel Stairs",
        description:
            "Stairs are a series of steps that allow people to move from one level of a building to another. At TJ Engineering, we offer custom-designed stairs that are not only functional but also aesthetically pleasing.",
        image: {
            src: "https://images.pexels.com/photos/204264/pexels-photo-204264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        features: [],
    },
];
</script>

<style>
</style>
