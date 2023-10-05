<template>
  <nav class="bg-nav">
    <div class="flex items-center text-white text-xs p-2.5 h-[60px]">
      <div class="flex items-center nav-item">
        <img src="/nuxt-icon.svg" alt="Nuxt Icon" class="w-12">
        <h1 class="text-xl font-bold">eNuxt</h1>
      </div>
      <div class="flex nav-item">
        <div class="flex py-1.5 h-full items-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 24" stroke-width="1.5" stroke="currentColor"
               class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
        </div>
        <div class="flex flex-col px-2">
          <span>Bonjour</span>
          <span class="font-bold">Entrez votre adresse</span>
        </div>
      </div>
      <div
          class="flex flex-grow w-full gap-[3px] h-full items-center mx-4 bg-white rounded-md focus-within:ring-[3px] focus-within:ring-orange">
        <div class="flex h-full">
          <select class="h-full bg-light-grey text-black rounded-l-md p-2 focus:ring-[3px] focus:ring-orange">
            <option selected>Toutes nos catégories</option>
            <option>Categorie 1</option>
            <option>Categorie 2</option>
            <option>Categorie 3</option>
            <option>Categorie 4</option>
          </select>
        </div>
        <input type="text" placeholder="Rechercher eNuxt"
               class="h-full mx-2 flex-grow text-base text-black px-2 focus:outline-none rounded-md">
        <button class="flex items-center bg-orange bg-opacity-60 hover:bg-opacity-80 h-full rounded-r-md px-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </button>
      </div>
      <div class="flex nav-item">
        <div class="flex flex-col px-2">
          <span>Bonjour, identifiez-vous</span>
          <span class="font-bold">Compte et listes</span>
        </div>
      </div>
      <div class="flex nav-item">
        <div class="flex flex-col px-2">
          <span>Retour</span>
          <span class="font-bold">et commandes</span>
        </div>
      </div>
      <div class="flex nav-item">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               class="w-9 h-9">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
          </svg>
          <span class="flex items-center justify-center absolute inset-0 left-0 top-1.5 font-bold text-xl text-orange">{{cart_count}}</span>
        </div>
        <span class="font-bold">Panier</span>
      </div>
    </div>
  </nav>
  <div class="flex items-center justify-between bg-banner h-[40px] w-full">
    <ul class="flex text-white font-light px-2 items-center text-sm h-full overflow-hidden">
      <li class="flex items-center nav-item font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
        <span>Toutes</span>
      </li>
      <li class="flex items-center nav-item px-2">Meilleures ventes</li>
      <li class="flex items-center nav-item px-2">Primes</li>
      <li class="flex items-center nav-item px-2">eNuxt Basics</li>
      <li class="flex items-center nav-item px-2">Musique</li>
      <li class="flex items-center nav-item px-2">Vente Flash</li>
      <li class="flex items-center nav-item px-2">Dernières nouveautés</li>
      <li class="flex items-center nav-item px-2">Audible</li>
      <li class="flex items-center nav-item px-2">Livres</li>
      <li class="flex items-center nav-item px-2">Cuisine et Maison</li>
      <li class="flex items-center nav-item px-2">High-Tech</li>
      <li class="flex items-center nav-item px-2">Informatique</li>
      <li class="flex items-center nav-item px-2">Mode</li>
      <li class="flex items-center nav-item px-2">Jeux et Jouets</li>
      <nuxt-link to="/jeux-video-console" class="flex items-center nav-item px-2">Jeux vidéo</nuxt-link>
    </ul>
    <span class="flex text-white font-bold text-sm nav-item m-0 flex-grow justify-end pr-2">Les jours Flash eNuxt 10-11 octobre</span>
  </div>
  <slot />
</template>
<script setup lang="ts">
const cart_count = 0
</script>