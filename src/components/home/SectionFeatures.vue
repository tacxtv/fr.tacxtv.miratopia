<script lang="ts" setup>

</script>

<template>
  <section>
    <div class="flex flex-col md:flex-row items-center w-full gap-4 px-4 pt-4">
      <div 
        class="w-full md:w-1/2 bg-green-500 rounded-lg h-[500px] bg-cover bg-center bg-no-repeat relative overflow-hidden" 
        style="background-image: url('/features/image1.png')"
      >
        <div class="absolute inset-0 bg-black/40 backdrop-blur-xs">
          <div class="flex flex-col items-center justify-center h-full p-3 md:p-10 text-center gap-4">
            <div class="flex items-center gap-2">
              <img src="/logo.png" alt="logo" class="w-28 h-28">
            </div>
            <div class="text-white text-4xl md:text-5xl font-bold">
                Système d'économie
            </div>
            <div class="text-white text-lg md:text-xl">
              Profitez d'un <b>système d'économie in-game complet</b> et développez votre économie personnelle pour pouvoir acheter
              des biens et des services.
            </div>
            <button class="btn btn-primary px-4 py-2 rounded-md font-medium transition-all bg-[var(--primary-0)] text-[var(--surface-0)] hover:bg-[var(--primary-10)] cursor-pointer">
              <span class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Rejoindre le shop
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-lg h-[500px] relative overflow-hidden group cursor-pointer" @click="navigateTo('/guide')">
        <img src="/features/guide.png" class="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[520px] object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center w-full gap-4 px-4 pt-4">
      <div class="w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-100 rounded-lg h-[500px]">
        <div class="flex flex-col items-center justify-center h-full p-3 md:p-10 text-center gap-4">
            <div class="flex items-center gap-2">
              <img src="/version.png" alt="logo" class="w-46 h-20">
            </div>
            <div class="text-white text-4xl md:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                Prochain événement
            </div>
            <div class="text-white text-lg md:text-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            </div>
          </div>
      </div>

      <div class="w-full md:w-1/2 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg h-[500px] flex xl:flex-row flex-col items-center justify-center group p-2">
        <img src="/features/village.png" class="w-[130px] xl:w-[250px] object-cover group-hover:rotate-3 transition-transform duration-300">
        <div class="flex flex-col gap-4 text-center xl:mt-0 mt-3">
          <div class="text-white text-4xl md:text-5xl font-bold">
              Village communautaire
          </div>
          <div class="text-white text-lg xl:text-xl">
            Construis un village communautaire où les joueurs pourront se réunir et partager des expériences et <b>participe à son évolution</b>.
          </div>
          <div class="flex xl:flex-row flex-col items-center justify-center gap-2">
            <button class="btn btn-primary px-4 py-2 rounded-md font-medium transition-all bg-[var(--primary-0)] text-[var(--surface-0)] hover:bg-[var(--primary-10)] cursor-pointer">
              <span class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Voir l'évolution du village
              </span>
            </button>
            <button class="btn btn-secondary px-4 py-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer">
              <span class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Deviens maire du village
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 2rem;
}

.feature-square {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>
