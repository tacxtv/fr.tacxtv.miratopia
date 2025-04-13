<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  expanded: boolean;
  elections: {
    current: {
      type: string;
      endDate: string;
      candidates: Array<{
        name: string;
        avatar: string;
        program: string[];
      }>;
    };
  };
}>();

const emit = defineEmits<{
  (e: 'toggle'): void;
}>();

const expandedCandidate = ref<string | null>(null);
const selectedCandidate = ref<string | null>(null);

const toggleCandidate = (name: string) => {
  expandedCandidate.value = expandedCandidate.value === name ? null : name;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} à ${hours}h${minutes}`;
};

const handleVote = () => {
  if (!selectedCandidate.value) {
    alert('Veuillez sélectionner un candidat avant de voter');
    return;
  }
  // TODO: Implémenter la logique de vote
  alert(`Votre vote pour ${selectedCandidate.value} a été enregistré !`);
};
</script>

<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
      <div class="relative z-20 card-header p-4 flex justify-between items-center cursor-pointer" @click="emit('toggle')">
        <h2 class="text-white text-2xl font-semibold">Élections en cours</h2>
        <button class="text-white hover:text-white/80 transition-colors">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': !expanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="expanded" class="p-4">
      <div class="text-white bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 flex justify-between items-center ring-2 ring-[var(--primary-0)] ring-opacity-30">
        <div>
          <div class="font-semibold">{{ elections.current.type }}</div>
          <div class="text-sm text-gray-300 mt-1">Fin des élections : {{ formatDate(elections.current.endDate) }}</div>
        </div>
        <button class="btn btn-secondary px-4 py-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer">
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            Voter pour le prochain maire
          </span>
        </button>
      </div>

      <h3 class="text-white text-xl font-semibold mb-4">Programme des candidats</h3>

      <div class="space-y-4">
        <div v-for="candidate in elections.current.candidates" 
             :key="candidate.name"
             class="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
          <button 
            @click="toggleCandidate(candidate.name)"
            class="w-full px-4 py-2 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div class="flex items-center gap-4 flex-1">
              <img :src="candidate.avatar" class="w-10 h-10 rounded-full" :alt="'Avatar de ' + candidate.name">
              <span class="text-white text-lg font-medium">{{ candidate.name }}</span>
            </div>
            <div class="flex items-center gap-4">
              <svg 
                class="w-6 h-6 text-white transition-transform duration-300"
                :class="{ 'rotate-180': expandedCandidate === candidate.name }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="expandedCandidate === candidate.name" class="p-4 border-t border-white/10">
              <h3 class="text-white font-medium mb-3">Programme électoral</h3>
              <ul class="space-y-2">
                <li v-for="(point, index) in candidate.program" 
                    :key="index"
                    class="text-white/80 flex items-start gap-2">
                  <svg class="w-5 h-5 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ point }}
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template> 