<script lang="ts" setup>
import { navigateTo } from 'nuxt/app';

const incomingEvent = ref<{
  name: string,
  description: string,
  startAt: string,
}>()

const currentChallenge = ref<{
  name: string,
  image: string,
  endAt: string,
}>()

const fetchEvent = async () => {
  fetch('https://mirashop.tacxtv.fr/api/core/rendez-vous/incoming')
    .then(response => response.json())
    .then(data => {
      incomingEvent.value = data.data
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error)
    })
}

const fetchChallenge = async () => {
  fetch('https://mirashop.tacxtv.fr/api/core/defi/current')
    .then(response => response.json())
    .then(data => {
      currentChallenge.value = data.data
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error)
    })
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} à ${hours}h${minutes}`;
};

onMounted(async () => {
  await fetchEvent()
  await fetchChallenge()
})

const openGuide = () => {
  window.open('https://tacx.notion.site/Wikitopia-1de153ee963f80d29df1cdeeb85779e5', '_blank')
}

const redirectToShop = () => {
  window.open('https://mirashop.tacxtv.fr/bank/upload', '_blank')
}
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
            <button class="btn btn-primary px-4 py-2 rounded-md font-medium transition-all bg-[var(--primary-0)] text-[var(--surface-0)] hover:bg-[var(--primary-10)] cursor-pointer" @click="redirectToShop">
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
      <div class="w-full md:w-1/2 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-lg h-[500px] relative overflow-hidden group cursor-pointer" @click="openGuide">
        <img src="/features/guide.png" class="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[520px] object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center w-full gap-4 px-4 pt-4">
      <div class="w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-100 rounded-lg lg:h-[500px]">
        <div class="flex flex-col items-center justify-center h-full p-3 md:p-10 text-center gap-4">
          <div class="flex items-center gap-2">
            <img src="/version.png" alt="logo" class="w-46 h-20">
          </div>
          <div class="text-white text-4xl md:text-3xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Evénement à venir
          </div>
          <div class="w-full max-w-2xl bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 flex md:flex-row flex-col gap-4 items-center md:h-[200px] h-[250px]">
            <div class="w-20 h-20 flex-shrink-0">
              <img src="/logo.png" alt="Event" class="w-full h-full object-cover rounded-lg">
            </div>
            <div v-if="incomingEvent" class="flex-1 text-left">
              <h3 class="text-white text-2xl font-bold mb-0.5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ incomingEvent.name }}</h3>
              <p class="text-white/90 mb-1 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ incomingEvent.description }}</p>
              <div class="flex items-center gap-2 text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span class="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Commence le {{ formatDate(incomingEvent.startAt) }}</span>
              </div>
            </div>
            <div v-else>
              <div class="flex items-center justify-center h-full">
                <div class="text-white text-2xl font-bold mb-0.5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Prochain événement bientôt annoncé ! 
                </div>
              </div>
            </div>
          </div>

          <div class="text-white text-4xl md:text-3xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Défi en cours
          </div>
          <div class="w-full max-w-2xl bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 flex md:flex-row flex-col gap-4 items-center md:h-[200px] h-[270px]">
            <div class="w-20 h-20 flex-shrink-0">
              <img src="/logo.png" alt="Event" class="w-full h-full object-cover rounded-lg">
            </div>
            <div v-if="currentChallenge" class="flex-1 text-left">
              <h3 class="text-white text-2xl font-bold mb-0.5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ currentChallenge.name }}</h3>
              <p class="text-white/90 mb-1 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Enregistre le plus de points possible sur le Mirashop pour gagner des récompenses !</p>
              <div class="flex items-center gap-2 text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span class="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Se termine le {{ formatDate(currentChallenge.endAt) }}</span>
              </div>
            </div>
            <div v-else>
              <div class="flex items-center justify-center h-full">
                <div class="text-white text-2xl font-bold mb-0.5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Prochain défi bientôt annoncé ! 
                </div>
              </div>
            </div>
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
            Construisez un village communautaire où les joueurs pourront se réunir et partager des expériences et <b>participez à son évolution</b>.
          </div>
          <div class="flex xl:flex-row flex-col items-center justify-center gap-2">
            <button 
              class="btn btn-primary px-4 py-2 rounded-md font-medium transition-all bg-[var(--primary-0)] text-[var(--surface-0)] hover:bg-[var(--primary-10)] cursor-pointer"
              @click="navigateTo('/city')"
            >
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
