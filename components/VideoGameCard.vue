<script setup lang="ts">
import {usePreviewStore} from "~/stores/previewCard.js";
import Product from "~/types/product";
import {PropType} from "vue";

const store = usePreviewStore()
const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const splitPrice = computed(() => {
  const priceAsString = String(props.product.price);
  return priceAsString.split('.');
});

</script>

<template>
  <div class="relative flex flex-col [&_button]:hover:block">
    <NuxtLink :to="`/products/${product.id}`"  >
    <div class="flex flex-col items-center justify-end bg-light-grey">
      <img src="https://picsum.photos/300" alt="Game Logo"
           class="w-[180px] h-[230px] bg-light-grey p-4 px-6 object-cover">
      <button @click="store.togglePreview(product.title)" class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
        Aperçu rapide
      </button>
    </div>
    <div class="flex flex-col p-4 bg-light-grey-02">
      <span class="text-2xl h-full">{{ splitPrice[0] }}<span class="text-sm align-top">{{ splitPrice[1] }}€</span></span>
      <span class="w-full py-4 text-sm">{{ product.title }}</span>
    </div>
    </NuxtLink>
  </div>
</template>