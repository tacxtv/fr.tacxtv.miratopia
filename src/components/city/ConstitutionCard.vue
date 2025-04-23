<script setup lang="ts">
import type { ConstitutionArticle } from '~/services/city/ConstitutionArticle';

defineProps<{
  expanded: boolean;
  constitutionArticles: ConstitutionArticle[];
}>()

const getConstitutionArticleTitle = (article: ConstitutionArticle) => {
  return article.artnum.split('-')[1] + '-' + article.artnum.split('-')[2]
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
      <div class="text-gray-300 space-y-4 max-h-[500px] overflow-y-auto pr-2">
        <div v-for="article in constitutionArticles" :key="article.artnum" class="bg-gray-700 p-4 rounded-lg flex md:flex-row flex-col gap-2 md:gap-6 items-center md:items-start">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-12 h-12 rounded-full" />
          </div>
          <div class="w-full">
            <div class="flex md:flex-row flex-col justify-between items-center gap-2 md:gap-4">
              <h3 class="text-lg font-semibold text-white mb-2">Article "{{ article.title }}" ({{ getConstitutionArticleTitle(article) }})</h3>
              <div class="text-gray-300 text-sm pb-1.5 text-left md:text-right">
                <div>Proposé le <b>{{ formatDate(article.metadata.onProposalAt) }}</b> par <b>{{ article.metadata.onProposalBy }}</b></div>
                <div>Appliqué le <b>{{ formatDate(article.appliedAt) }}</b></div>
              </div>
            </div>
            <hr class="mb-4 mt-2 border-white/20">
            <p class="text-gray-300 text-sm" v-html="article.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 