<script setup>
const {data} = await useFetch('/api/product')
</script>

<template>
  <section>
    <div class="relative">
      <div class="relative h-[600px]">
        <div class="relative h-[250px] ">
          <img src="@/assets/images/hero-img-2.jpg" alt="Image de sponsor"
               class="absolute top-0 h-[600px] z-4 w-full object-cover">
          <button class="flex items-center absolute h-full border-2 border-transparent focus:border-orange">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="black"
                 class="w-16 h-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button class="flex items-center absolute right-0 h-full border-2 border-transparent focus:border-orange">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="black"
                 class="w-16 h-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </button>
        </div>

        <!-- Row cards -->
        <div class="relative z-20">
          <div class="grid grid-cols-3 xl:grid-cols-4 gap-6 px-6">
            <div class="flex flex-col gap-4 bg-white p-5 h-[420px]">
              <h3 class="font-bold text-xl">Offres à moins de 20 €</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] max-w-[380px] object-cover">
              <a href="#" class="text-sm">Découvrir</a>
            </div>

            <div class="flex flex-col gap-4 bg-white p-5 h-[420px]">
              <h3 class="font-bold text-xl">Toute les Ventes Flash</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] max-w-[380px] object-cover">
              <a href="#" class="text-sm">Voir toutes les Ventes Flash</a>
            </div>

            <div class="flex flex-col gap-4 bg-white p-5 h-[420px]">
              <h3 class="font-bold text-xl">Les top catégories</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] max-w-[380px] object-cover">
              <a href="#" class="text-sm">Meilleurs ventes</a>
            </div>

            <div class="grid grid-rows-3 gap-6 order-3 xl:order-1 h-[420px]">
              <div class="flex flex-col gap-1 bg-white p-5">
                <h3 class="font-bold text-xl">Identifiez-vous pour une meilleure expérience</h3>
                <button class="bg-yellow bg-opacity-80 hover:bg-opacity-100 leading-7 text-sm rounded-md shadow">Se connecter en toute sécurité</button>
              </div>

              <div class="flex flex-col gap-2 row-span-2 bg-white">
                <img src="@/assets/images/product-img-1.jpg" alt="Product" class="h-[145px] object-cover">
                <div class="flex flex-col p-2">
                  <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque iure laborum!</span>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span class="text-sm">289</span>
                  </div>
                  <span class="text-2xl text-red-800 h-full">449<span class="text-sm align-top">45€</span></span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4 bg-white order-2 p-5 h-[420px]">
              <h3 class="font-bold text-xl">Offres à moins de 20 €</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] object-cover">
              <a href="#" class="text-sm">Découvrir</a>
            </div>

            <div class="flex flex-col gap-4 bg-white order-2 p-5 h-[420px]">
              <h3 class="font-bold text-xl">Offres à moins de 20 €</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] object-cover">
              <a href="#" class="text-sm">Découvrir</a>
            </div>

            <div class="flex flex-col gap-4 bg-white order-3 p-5 h-[420px]">
              <h3 class="font-bold text-xl">Offres à moins de 20 €</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] object-cover">
              <a href="#" class="text-sm">Découvrir</a>
            </div>

            <div class="flex flex-col gap-4 bg-white order-4 p-5 h-[420px]">
              <h3 class="font-bold text-xl">Offres à moins de 20 €</h3>
              <img src="@/assets/images/card-img-1.jpg" alt="Card Image" class="h-[300px] object-cover">
              <a href="#" class="text-sm">Découvrir</a>
            </div>

          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-main"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>