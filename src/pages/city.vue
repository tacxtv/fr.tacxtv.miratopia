<script setup lang="ts">
import MiraWorkInProgress from '~/components/common/MiraWorkInProgress.vue';
import GovernmentCard from '~/components/city/GovernmentCard.vue';
import CitizensCard from '~/components/city/CitizensCard.vue';
import VillageInfoCard from '~/components/city/VillageInfoCard.vue';
import ConstitutionCard from '~/components/city/ConstitutionCard.vue';
import LawsCard from '~/components/city/LawsCard.vue';
import type { Citizen } from '~/services/city/Citizen';
import { UserRole } from '~/services/city/UserRole';

useHead({
  title: 'Le Village'
})

const localStorageFeatureFlag = useLocalStorage('feature-flag', 'false')
const displayWip = computed(() => localStorageFeatureFlag.value !== 'true')

const governmentCitizens = ref<{
  mayor?: Citizen;
  deputy?: Citizen;
  sheriff?: Citizen;
  senators?: Citizen[];
}>()
 
const citizens = ref<Citizen[]>([])

// État des cartes dépliées
const expandedCards = ref({
  government: true,
  citizens: true,
  constitution: true,
  laws: true,
  elections: true,
  villageInfo: true
})

// Fonction pour basculer l'état d'une carte
const toggleCard = (cardName: string) => {
  expandedCards.value[cardName] = !expandedCards.value[cardName]
}

// Données de test
const villageData = {
  laws: [
    { title: 'Interdiction de construire en diamant', description: 'Interdiction de construire en diamant', votes: { for: 12, against: 3 } },
    { title: 'Nouvelle zone résidentielle', description: 'Nouvelle zone résidentielle', votes: { for: 8, against: 7 } },
    { title: 'Nouvelle zone résidentielle', description: 'Nouvelle zone résidentielle', votes: { for: 8, against: 7 } },
    { title: 'Nouvelle zone résidentielle', description: 'Nouvelle zone résidentielle', votes: { for: 8, against: 7 } },
    { title: 'Nouvelle zone résidentielle', description: 'Nouvelle zone résidentielle', votes: { for: 8, against: 7 } }
  ],
  villageLevel: {
    current: 3,
    progress: 75,
    nextLevel: 4,
    objectives: [
      { name: 'Construire une mairie', completed: true },
      { name: 'Atteindre 20 habitants', completed: true },
      { name: 'Créer une zone commerciale', completed: false },
      { name: 'Installer un système de transport', completed: false }
    ]
  }
}

const fetchCitizens = async () => {
  fetch('https://mirashop.tacxtv.fr/api/core/users')
    .then(response => response.json())
    .then(data => {
      citizens.value = data.data
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error)
    })
}

const fetchGovernment = async () => {
   const responseMayor = await fetch('https://mirashop.tacxtv.fr/api/core/users?roles=maire,sherif,adjoint,senateurs')
   const dataMayor = await responseMayor.json()
   governmentCitizens.value = {
    mayor: dataMayor.data?.find(citizen => citizen.roles?.includes(UserRole.MAIRE)),
    deputy: dataMayor.data?.find(citizen => citizen.roles?.includes(UserRole.ADJOINT)),
    sheriff: dataMayor.data?.find(citizen => citizen.roles?.includes(UserRole.SHERIF)),
    senators: dataMayor.data?.filter(citizen => citizen.roles?.includes(UserRole.SENATEURS))
   }
}

onMounted(async () => {
  await fetchCitizens()
  await fetchGovernment()
})
</script>

<template>
  <div>
  <div v-if="displayWip" class="layout">
    <MiraWorkInProgress />
  </div>
  <div v-else class="layout">
    <!-- Header amélioré -->
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-b to-transparent z-10"></div>
      <div class="relative z-20">
        <div class="mt-10 flex flex-col items-center gap-8 px-4 md:px-0">
          <div class="text-white text-4xl md:text-6xl font-bold tracking-tight">Le Village</div>
          <div class="text-white text-xl  w-full md:w-2/3 text-center">
            Une ville communautaire gérée entièrement par les joueurs en semi-RP
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-12">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Colonne de gauche (w-1/4) -->
        <div class="w-full md:w-1/4 space-y-6">
          <GovernmentCard 
            :expanded="expandedCards.government"
            :government="governmentCitizens"
            @toggle="toggleCard('government')"
          />
          <CitizensCard 
            :expanded="expandedCards.citizens"
            :citizens="citizens"
            @toggle="toggleCard('citizens')"
          />
        </div>

        <!-- Colonne de droite (w-3/4) -->
        <div class="w-full md:w-3/4 space-y-6">
          <VillageInfoCard 
            :expanded="expandedCards.villageInfo"
            :laws="villageData.laws"
            :village-level="villageData.villageLevel"
            @toggle="toggleCard('villageInfo')"
          />
          <ConstitutionCard 
            :expanded="expandedCards.constitution"
            @toggle="toggleCard('constitution')"
          />
          <LawsCard 
            :expanded="expandedCards.laws"
            :laws="villageData.laws"
            @toggle="toggleCard('laws')"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  margin-bottom: 2rem;
}

.card-header {
  background: linear-gradient(90deg, 
    rgba(40, 120, 60, 0.4),  /* Vert foncé plus doux avec moins d'opacité */
    rgba(60, 150, 80, 0.6)   /* Vert plus clair avec plus d'opacité */
  );
  backdrop-filter: blur(8px);
}

.card-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.card-header:hover::before {
  animation: shimmer 1.5s infinite;
}

/* Transitions pour les sections dépliables */
.p-4 {
  transition: all 0.3s ease-in-out;
  max-height: 1000px;
  overflow: hidden;
}

.hidden {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
</style>
