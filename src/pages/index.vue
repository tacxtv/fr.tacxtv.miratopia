<script setup lang="ts">
import MiraContainer from '~/components/common/MiraContainer.vue';
import SectionHeader from '~/components/home/SectionHeader.vue';
import SectionGallery from '~/components/home/SectionGallery.vue';

useHead({
  title: 'Accueil'
})
</script>

<template>
  <SectionHeader />

  <MiraContainer class="flex flex-col items-center justify-center pb-12 pt-0">
    <div class="font-bold text-center text-gradient home__title">
      L'aventure Miratopia reprend
    </div>
    <div class="font-semibold text-center text-gradient home__subtitle">
      Salut
    </div>
  </MiraContainer>

  <SectionGallery />

</template>

<style scoped>
.home__title {
  font-size: 3rem;
}

.home__subtitle {
  font-size: 1.5rem;
}
</style>
