<script setup lang="ts">


const {data: mostWantedGamesData} = await useFetch('/api/video-games/get-most-wanted', {
  params: {
    order: 'requested',
    limit: 8
  }
})

const {data: bestSellersData} = await useFetch('/api/video-games/get-most-wanted', {
  params: {
    order: 'sold',
    limit: 8
  }
})

</script>

<template>
  <!-- Banner product -->
  <div class="flex items-center h-[30px] bg-light-grey-02 border-b-2">
    <ul class="flex text-xs px-2.5 g">
      <li class="nav-item-banner">Jeux vidéo</li>
      <li class="nav-item-banner">Top ventes</li>
      <li class="nav-item-banner">Précommandes</li>
      <li class="nav-item-banner">Promotions</li>
      <li class="nav-item-banner">Xbox Series X|S</li>
      <li class="nav-item-banner">Xbox GamePass</li>
      <li class="nav-item-banner">Xbox One</li>
      <li class="nav-item-banner">Nintendo Switch</li>
      <li class="nav-item-banner">PlayStation 5</li>
      <li class="nav-item-banner">PlayStation 4</li>
      <li class="nav-item-banner">PC</li>
      <li class="nav-item-banner">Réalité virtuelle</li>
      <li class="nav-item-banner">Console rétro et mini</li>
    </ul>
  </div>

  <!-- Layout product + filter -->
  <section class="flex p-5 max-w-full bg-white">
    <aside class=" border-r-2 border-light-grey">
      <div>
        <span class="text-sm font-medium">À découvrir</span>
        <ul class="text-sm px-2.5 leading-6">
          <li>eNuxt Gaming</li>
          <li>Exclusivités eNuxt</li>
          <li>Jeux incontournables d'après la presse</li>
          <li>Contenu Téléchargeable</li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col w-full gap-8 pl-3">
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl">Jeux Vidéo, Consoles et Accessoires</h1>
        <p class="text-sm">
          Découvrez notre sélection : Top ventes, Précommandes, Promotions, Xbox Series X et S, Xbox One,Nintendo
          Switch,
          PlayStation 5, PlayStation 4, PC, Réalité Virtuelle, Contenu téléchargeable , Prime Gaming, Gaming Store,
          Exclusivités Amazon, Geek Store, Jeux incontournables d'après la presse et bien plus
        </p>
        <img src="@/assets/images/banner-img.jpg" alt="Banner" class="max-h-[360px] object-cover my-10">
      </div>
      <!-- Category Card -->
      <div class="flex flex-col jus gap-8">
        <h1 class="font-bold text-3xl">Catégories à l'honneur</h1>
        <!--
        <div v-if="topCategory" class="flex flex-wrap gap-1 justify-between">
          <VideoGameCategoryCard v-for="category in topCategory" :key="category.id" :name="category.name"/>
        </div>
        -->
      </div>

      <!-- MostWanted Game Card -->
      <div class="flex flex-col gap-4">
        <div class="flex items-end gap-2">
          <h1 class="font-bold text-3xl">Les plus demandées</h1><span><a href="">Voir plus</a></span>
        </div>
        <div v-if="mostWantedGamesData" class="grid grid-cols-8 gap-2 min-w-[1100px] overflow-x-hidden">
          <VideoGameCard v-for="product in mostWantedGamesData" :key="product.id" :product="product"/>
        </div>
      </div>

      <!-- BestSellers Game Card -->
      <div class="flex flex-col gap-4">
        <div class="flex items-end gap-2">
          <h1 class="font-bold text-3xl">Les meilleures ventes</h1><span><a href="">Voir plus</a></span>
        </div>
        <div v-if="bestSellersData" class="grid grid-cols-8 gap-2 min-w-[1100px] overflow-x-hidden">
          <VideoGameCard v-for="product in bestSellersData" :key="product.id" :product="product"/>
        </div>
      </div>
      <VideoGamePreview/>
    </div>
  </section>
</template>