<script setup lang="ts">
import type { Citizen } from '~/services/city/Citizen';

defineProps<{
  expanded: boolean;
  government?: {
    mayor?: Citizen;
    deputy?: Citizen;
    sheriff?: Citizen;
    senators?: Citizen[];
  };
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} à ${hours}h${minutes}`;
};

const redirectToMaire = () => {
  window.open('https://mirashop.tacxtv.fr/democracy/vote', '_blank')
}
</script>

<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
      <div class="relative z-20 card-header p-4 flex justify-between items-center cursor-pointer" @click="$emit('toggle')">
        <h2 class="text-white text-2xl font-semibold">Gouvernement</h2>
        <button class="text-white hover:text-white/80 transition-colors cursor-pointer">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': !expanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    
    <div v-show="expanded" class="p-4">
      <div>
        <!-- Section Maire -->
        <div class="mb-6">
          <h3 class="text-white text-lg font-medium mb-2">Maire</h3>
          <div class="flex items-center gap-3">
            <img :src="government?.mayor?._minecraftHead || 'https://images.minecraft-heads.com/render2d/head/ac/ac2ef5fbf0cad1978ce572cee85410c9.webp'" class="w-10 h-10 rounded-full" alt="Avatar du Maire">
            <span class="text-white">{{ government?.mayor?.name || 'Pas de maire pour le moment' }}</span>
          </div>
        </div>

        <!-- Section Adjoint -->
        <div class="mb-6">
          <h3 class="text-white text-lg font-medium mb-2">Adjoint</h3>
          <div class="flex items-center gap-3">
            <img :src="government?.deputy?._minecraftHead || 'https://images.minecraft-heads.com/render2d/head/ac/ac2ef5fbf0cad1978ce572cee85410c9.webp'" class="w-10 h-10 rounded-full" alt="Avatar de l'Adjoint">
            <span class="text-white">{{ government?.deputy?.name || 'Pas d\'adjoint pour le moment' }}</span>
          </div>
        </div>

        <!-- Section Shérif -->
        <div class="mb-6">
          <h3 class="text-white text-lg font-medium mb-2">Shérif</h3>
          <div class="flex items-center gap-3">
            <img :src="government?.sheriff?._minecraftHead || 'https://images.minecraft-heads.com/render2d/head/ac/ac2ef5fbf0cad1978ce572cee85410c9.webp'" class="w-10 h-10 rounded-full" alt="Avatar du Shérif">
            <span class="text-white">{{ government?.sheriff?.name || 'Pas de shérif pour le moment' }}</span>
          </div>
        </div>

        <hr class="my-4 border-white/20">

        <!-- Section Sénateurs -->
        <div class="mb-6">
          <h3 class="text-white text-lg font-medium mb-2">Sénateurs</h3>
          <div v-if="government?.senators && government?.senators?.length > 0">
            <div v-for="senator in government.senators" :key="senator.name" class="flex items-center gap-3 mb-2">
              <img :src="senator._minecraftHead" class="w-10 h-10 rounded-full" alt="Avatar du sénateur">
              <span class="text-white">{{ senator.name }}</span>
            </div>
          </div>
          <div v-else class="flex items-center gap-3">
            <img src="https://images.minecraft-heads.com/render2d/head/ac/ac2ef5fbf0cad1978ce572cee85410c9.webp" class="w-10 h-10 rounded-full" alt="Avatar du sénateur">
            <span class="text-white">Pas de sénateurs pour le moment</span>
          </div>
        </div>
      </div>

      <div class="text-white bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 flex flex-col justify-between items-center ring-2 ring-[var(--primary-60)] ring-opacity-30">
        <div>
          <div class="font-semibold">Élections en cours</div>
          <div class="text-sm text-gray-300 mt-1">Fin des élections : {{ formatDate('2025-05-04T20:00:00') }}</div>
        </div>
        <button class="btn btn-secondary w-full px-2 py-1 mt-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer" @click="redirectToMaire">
          <span class="flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            Voter le prochain maire
          </span>
        </button>
      </div>
    </div>
  </div>
</template> 