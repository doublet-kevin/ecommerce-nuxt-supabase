<script setup lang="ts">

const mainImage = ref('https://picsum.photos/800');

const images = [
  { src: 'https://picsum.photos/800', alt: 'Image 1' },
  { src: 'https://picsum.photos/900', alt: 'Image 2' },
  { src: 'https://picsum.photos/700', alt: 'Image 3' },
  { src: 'https://picsum.photos/600', alt: 'Image 4' },
  { src: 'https://picsum.photos/850', alt: 'Image 5' },
  { src: 'https://picsum.photos/840', alt: 'Image 6' },
];

const changeMainImage = (src: string) => {
  mainImage.value = src;
};

</script>
<template>
  <section class="max-w-custom">
    <div class="flex">
      <div class="flex flex-col gap-2 p-8">
        <img
            v-for="image in images"
            :src="image.src"
            :alt="image.alt"
            @mouseover="changeMainImage(image.src)"
            class="w-[38px] h-[50px] rounded-md cursor-pointer"
        />
      </div>
      <div class="max-w-80">
        <img :src="mainImage" :alt="mainImageAlt" class="w-full"/>
      </div>
    </div>
  </section>
</template>