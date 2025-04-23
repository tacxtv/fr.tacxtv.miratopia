<script setup lang="ts">
import type { Law } from '~/services/city/Law';

defineProps<{
  expanded: boolean;
  laws: Law[];
}>()

const getLawTitle = (law: Law) => {
  return law.lawnum.split('-')[1] + '-' + law.lawnum.split('-')[2]
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

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

const toggle = () => {
  emit('toggle')
}
</script>

<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <div 
      class="card-header p-4 cursor-pointer flex justify-between items-center"
      @click="toggle"
    >
      <h2 class="text-white text-2xl font-semibold">Lois en vigueur</h2>
      <button class="text-white cursor-pointer">
        <svg 
          class="w-6 h-6 transform transition-transform duration-200" 
          :class="{ 'rotate-180': !expanded }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <div class="p-4" :class="{ 'hidden': !expanded }">
      <div class="text-gray-300 space-y-4 max-h-[500px] overflow-y-auto pr-2">
        <div v-for="(law, index) in laws" :key="index" class="bg-gray-700 p-4 rounded-lg flex md:flex-row flex-col gap-2 md:gap-6 items-center md:items-start">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-12 h-12 rounded-full" />
          </div>
          <div class="w-full">
            <div class="flex md:flex-row flex-col justify-between items-center gap-2 md:gap-4">
              <h3 class="text-lg font-semibold text-white mb-2">Loi "{{ law.title }}" ({{ getLawTitle(law) }})</h3>
              <div class="text-gray-300 text-sm pb-1.5">Appliquée le <b>{{ formatDate(law.appliedAt) }}</b> par <b>{{ law.proposedBy }}</b></div>
            </div>
            <hr class="mb-4 mt-2 border-white/20">
            <p class="text-gray-300 text-sm" v-html="law.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 