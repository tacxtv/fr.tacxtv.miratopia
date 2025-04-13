<script setup lang="ts">
defineProps<{
  expanded: boolean;
  government: {
    mayor: { name: string; avatar: string };
    deputy: { name: string; avatar: string };
    sheriff: { name: string; avatar: string };
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
        <h2 class="text-white text-2xl font-semibold">Gouvernement</h2>
        <button class="text-white hover:text-white/80 transition-colors">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': !expanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    
    <div v-show="expanded" class="p-4">
      <!-- Section Maire -->
      <div class="mb-6">
        <h3 class="text-white text-lg font-medium mb-2">Maire</h3>
        <div class="flex items-center gap-3">
          <img :src="government.mayor.avatar" class="w-12 h-12 rounded-full" alt="Avatar du Maire">
          <span class="text-white">{{ government.mayor.name }}</span>
        </div>
      </div>

      <!-- Section Adjoint -->
      <div class="mb-6">
        <h3 class="text-white text-lg font-medium mb-2">Adjoint</h3>
        <div class="flex items-center gap-3">
          <img :src="government.deputy.avatar" class="w-12 h-12 rounded-full" alt="Avatar de l'Adjoint">
          <span class="text-white">{{ government.deputy.name }}</span>
        </div>
      </div>

      <!-- Section Shérif -->
      <div>
        <h3 class="text-white text-lg font-medium mb-2">Shérif</h3>
        <div class="flex items-center gap-3">
          <img :src="government.sheriff.avatar" class="w-12 h-12 rounded-full" alt="Avatar du Shérif">
          <span class="text-white">{{ government.sheriff.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template> 