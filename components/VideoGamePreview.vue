<script setup>
import {usePreviewStore} from "~/stores/previewCard.js";

const store = usePreviewStore()
</script>

<template>
  <div v-show="store.isPreview === true" class="fixed inset-0 flex items-center justify-center max-w-4xl m-auto">
    <div @click="store.togglePreview()" class="fixed inset-0 bg-black bg-opacity-50"></div>
    <div class="flex justify-between bg-white p-8 z-10 rounded-sm w-full">
      <img src="https://picsum.photos/300" alt="Game Logo" class="object-cover">
      <span>{{ store.platform }}</span>
      <div class="text-2xl font-bold mb-4">{{ store.title }}</div>
      <p class="text-sm font-bold">{{ store.price }}</p>
    </div>
  </div>
</template>