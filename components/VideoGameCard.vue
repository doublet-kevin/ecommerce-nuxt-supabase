<script setup>
import {usePreviewStore} from "~/stores/previewCard.js";

const store = usePreviewStore()
const props = defineProps({
    id: Number,
    name: String,
    price: Number
})

const splitPrice = computed(() => {
  const priceAsString = String(props.price);
  return priceAsString.split('.');
});

</script>

<template>
  <div class="relative flex flex-col [&_button]:hover:block">
    <div class="flex flex-col items-center justify-end bg-light-grey">
      <img src="https://picsum.photos/300" alt="Game Logo"
           class="w-[180px] h-[230px] bg-light-grey p-4 px-6 object-cover">
      <button @click="store.togglePreview(name)" class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
        Aperçu rapide
      </button>
    </div>
    <div class="flex flex-col p-4 bg-light-grey-02">
      <span class="text-2xl h-full">{{ splitPrice[0] }}<span class="text-sm align-top">{{ splitPrice[1] }}€</span></span>
      <span class="w-full py-4 text-sm">{{ name }}</span>
    </div>
  </div>
</template>