<script setup lang="ts">
defineProps<{
  expanded: boolean;
  laws: Array<{ title: string; votes: { for: number; against: number } }>;
  villageLevel: {
    current: number;
    progress: number;
    nextLevel: number;
    objectives: Array<{ name: string; completed: boolean }>;
  };
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
        <h2 class="text-white text-2xl font-semibold">Informations du Village</h2>
        <button class="text-white hover:text-white/80 transition-colors cursor-pointer">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': !expanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="expanded" class="p-4">
      <!-- Section Niveau du Village -->
      <div class="mb-6">
        <h3 class="text-white text-lg font-medium mb-2">Niveau du Village</h3>
        <div class="text-white">
          <div class="flex items-center justify-between mb-2">
            <span>Niveau {{ villageLevel.current }}</span>
            <span>Prochain niveau : {{ villageLevel.nextLevel }}</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                 :style="{ width: villageLevel.progress + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Section Objectifs -->
      <div>
        <h3 class="text-white text-lg font-medium mb-2">Objectifs pour le prochain niveau</h3>
        <div class="text-white space-y-2">
          <div v-for="objective in villageLevel.objectives" 
               :key="objective.name" 
               class="flex items-center gap-2">
            <input type="checkbox" 
                   :checked="objective.completed" 
                   class="rounded text-blue-600"
                   disabled>
            <span :class="{ 'line-through text-gray-400': objective.completed }">
              {{ objective.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 