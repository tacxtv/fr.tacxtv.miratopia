<script setup lang="ts">
defineProps<{
  expanded: boolean;
}>()

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
      <h2 class="text-white text-2xl font-semibold">La Constitution</h2>
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
      <div class="text-gray-300 space-y-4 max-h-[300px] overflow-y-auto pr-2">
        <div class="bg-gray-700 p-4 rounded-lg flex gap-4 items-center">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Article 1 - Principes Fondamentaux</h3>
            <p class="text-gray-300">Le village est une communauté démocratique où chaque citoyen a le droit de participer aux décisions collectives.</p>
          </div>
        </div>
        <div class="bg-gray-700 p-4 rounded-lg flex gap-4 items-center">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Article 1 - Principes Fondamentaux</h3>
            <p class="text-gray-300">Le village est une communauté démocratique où chaque citoyen a le droit de participer aux décisions collectives.</p>
          </div>
        </div>
        <div class="bg-gray-700 p-4 rounded-lg flex gap-4 items-center">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Article 1 - Principes Fondamentaux</h3>
            <p class="text-gray-300">Le village est une communauté démocratique où chaque citoyen a le droit de participer aux décisions collectives.</p>
          </div>
        </div>
        <div class="bg-gray-700 p-4 rounded-lg flex gap-4 items-center">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Article 1 - Principes Fondamentaux</h3>
            <p class="text-gray-300">Le village est une communauté démocratique où chaque citoyen a le droit de participer aux décisions collectives.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 