<script setup lang="ts">
import type { Citizen } from '~/services/city/Citizen';

defineProps<{
  expanded: boolean;
  citizens: Citizen[];
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();
</script>

<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
      <div class="relative z-20 card-header p-4 flex justify-between items-center cursor-pointer" @click="$emit('toggle')">
        <h2 class="text-white text-2xl font-semibold">Habitants ({{ citizens.length }})</h2>
        <button class="text-white hover:text-white/80 transition-colors">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': !expanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="expanded" class="p-4 space-y-2">
      <div v-for="citizen in citizens" :key="citizen.name" class="flex items-center gap-3">
        <img :src="citizen._minecraftHead" class="w-10 h-10 rounded-full" :alt="'Avatar de ' + citizen.name">
        <span class="text-white font-semibold">{{ citizen.name }}</span>
      </div>
    </div>
  </div>
</template> 