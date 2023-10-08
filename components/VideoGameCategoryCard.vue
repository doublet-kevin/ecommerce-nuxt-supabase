<script setup lang="ts">
const props = defineProps({
  name: String,
})

</script>
<template>
  <div class="flex flex-col gap-8 items-center">
    <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
         class="w-[200px] h-[200px] p-11 bg-light-grey-03 object-cover rounded-full">
    <h2 class="font-bold text-lg">{{ name }}</h2>
  </div>
</template>