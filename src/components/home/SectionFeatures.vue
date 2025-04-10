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
      <div class="w-full md:w-1/2 bg-blue-500 rounded-lg h-[500px]">
      </div>
      <div class="w-full md:w-1/2 bg-yellow-500 rounded-lg h-[500px]">
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
