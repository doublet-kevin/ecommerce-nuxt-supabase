<script setup lang="ts">

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
    <aside class="w-[215px] border-r-2 border-light-grey">
      <div>
        <span class="text-sm font-medium">À découvrir</span>
        <ul class="text-xs px-2.5 leading-5">
          <li>eNuxt Gaming</li>
          <li>Exclusivités eNuxt</li>
          <li>Jeux incontournables d'après la presse</li>
          <li>Contenu Téléchargeable</li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col gap-2 pl-3">
      <h1 class="text-2xl">Jeux Vidéo, Consoles et Accessoires</h1>
      <p class="text-sm">
        Découvrez notre sélection : Top ventes, Précommandes, Promotions, Xbox Series X et S, Xbox One,Nintendo Switch,
        PlayStation 5, PlayStation 4, PC, Réalité Virtuelle, Contenu téléchargeable , Prime Gaming, Gaming Store,
        Exclusivités Amazon, Geek Store, Jeux incontournables d'après la presse et bien plus
      </p>
      <img src="@/assets/images/banner-img.jpg" alt="Banner" class="max-h-[360px] object-cover my-10">

      <h1 class="font-bold text-2xl">Catégories à l'honneur</h1>
      <!-- Category Card -->
      <div class="flex w-full flex-wrap gap-8">
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
        <div class="flex flex-col items-center">
          <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
               class="w-[180px] h-[180px] p-11 bg-light-grey object-cover rounded-full">
          <h2 class="font-bold text-lg">Xbox Series X et S</h2>
        </div>
      </div>

      <div class="flex items-end gap-2">
        <h1 class="font-bold text-2xl">Les plus demandées</h1><span><a href="">Voir plus</a></span>
      </div>
      <div class="flex gap-1 overflow-x-hidden">
        <!-- Product Game Card -->
        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

        <div class="relative flex flex-col flex-shrink-0 [&_button]:hover:block">
          <div class="flex flex-col items-center justify-end p-4 px-7 bg-light-grey">
            <img src="@/assets/images/game-logo.jpg" alt="Game Logo"
                 class="w-[180px] h-[230px] bg-light-grey object-cover">
            <button class="hidden rounded-md absolute px-8 bg-white text-sm p-1 shadow-md">
              Aperçu rapide
            </button>
          </div>
          <div class="flex flex-col p-4 bg-light-grey-02">
            <span class="text-2xl h-full">449<span class="text-sm align-top">45€</span></span>
            <span class="py-4 text-sm">Un super jeu excellent</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>