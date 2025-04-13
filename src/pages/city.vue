<script setup lang="ts">
import MiraWorkInProgress from '~/components/common/MiraWorkInProgress.vue';
import GovernmentCard from '~/components/city/GovernmentCard.vue';
import CitizensCard from '~/components/city/CitizensCard.vue';
import ElectionsCard from '~/components/city/ElectionsCard.vue';
import VillageInfoCard from '~/components/city/VillageInfoCard.vue';

useHead({
  title: 'Le Village'
})

const localStorageFeatureFlag = useLocalStorage('feature-flag', 'false')
const displayWip = computed(() => localStorageFeatureFlag.value !== 'true')

// État des cartes dépliées
const expandedCards = ref({
  government: true,
  citizens: true,
  elections: true,
  villageInfo: true
})

// Fonction pour basculer l'état d'une carte
const toggleCard = (cardName: string) => {
  expandedCards.value[cardName] = !expandedCards.value[cardName]
}

// Données de test
const villageData = {
  government: {
    mayor: {
      name: 'TacxTV',
      avatar: 'https://crafatar.com/avatars/12345678-1234-1234-1234-123456789012'
    },
    deputy: {
      name: 'Mira',
      avatar: 'https://crafatar.com/avatars/87654321-4321-4321-4321-210987654321'
    },
    sheriff: {
      name: 'Bob',
      avatar: 'https://crafatar.com/avatars/11111111-2222-3333-4444-555555555555'
    }
  },
  citizens: [
    { name: 'Alice', avatar: 'https://crafatar.com/avatars/66666666-7777-8888-9999-000000000000' },
    { name: 'Charlie', avatar: 'https://crafatar.com/avatars/22222222-3333-4444-5555-666666666666' },
    { name: 'David', avatar: 'https://crafatar.com/avatars/33333333-4444-5555-6666-777777777777' },
    { name: 'Eve', avatar: 'https://crafatar.com/avatars/44444444-5555-6666-7777-888888888888' }
  ],
  elections: {
    current: {
      type: 'Élection du Maire',
      endDate: '2024-03-15T20:00:00',
      candidates: [
        {
          name: 'TacxTV',
          avatar: 'https://crafatar.com/avatars/12345678-1234-1234-1234-123456789012',
          program: [
            'Construction d\'une nouvelle mairie',
            'Création d\'une zone commerciale',
            'Amélioration des transports',
            'Organisation d\'événements hebdomadaires'
          ]
        },
        {
          name: 'Mira',
          avatar: 'https://crafatar.com/avatars/87654321-4321-4321-4321-210987654321',
          program: [
            'Développement des infrastructures',
            'Création d\'un système de parrainage',
            'Mise en place d\'une banque communautaire',
            'Organisation de tournois PvP'
          ]
        },
        {
          name: 'Bob',
          avatar: 'https://crafatar.com/avatars/11111111-2222-3333-4444-555555555555',
          program: [
            'Renforcement de la sécurité',
            'Création d\'une zone agricole',
            'Mise en place d\'un système de récompenses',
            'Organisation de chasses au trésor'
          ]
        }
      ]
    }
  },
  laws: [
    { title: 'Interdiction de construire en diamant', votes: { for: 12, against: 3 } },
    { title: 'Nouvelle zone résidentielle', votes: { for: 8, against: 7 } }
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
</script>

<template>
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
          <div class="text-white/80 text-xl w-full md:w-1/3 text-center leading-relaxed">
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
            :government="villageData.government"
            @toggle="toggleCard('government')"
          />
          <CitizensCard 
            :expanded="expandedCards.citizens"
            :citizens="villageData.citizens"
            @toggle="toggleCard('citizens')"
          />
        </div>

        <!-- Colonne de droite (w-3/4) -->
        <div class="w-full md:w-3/4 space-y-6">
          <ElectionsCard 
            :expanded="expandedCards.elections"
            :elections="villageData.elections"
            @toggle="toggleCard('elections')"
          />
          <VillageInfoCard 
            :expanded="expandedCards.villageInfo"
            :laws="villageData.laws"
            :village-level="villageData.villageLevel"
            @toggle="toggleCard('villageInfo')"
          />
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
