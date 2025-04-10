<script setup lang="ts">
import MiraContainer from '~/components/common/MiraContainer.vue';
import SectionHeader from '~/components/home/SectionHeader.vue';
import SectionGallery from '~/components/home/SectionGallery.vue';
import SectionFeatures from '~/components/home/SectionFeatures.vue';

useHead({
  title: 'Accueil'
})
</script>

<template>
  <SectionHeader />

  <MiraContainer class="flex flex-col items-center justify-center md:pb-24 pb-12">
    <div class="font-bold text-center text-gradient home__title">
      Un nouveau départ
    </div>
    <div class="font-semibold text-center text-gradient home__subtitle">
      Vis une nouvelle aventure, sur de nouvelles terres
    </div>
  </MiraContainer>

  <SectionGallery />


  <SectionFeatures />

</template>

<style scoped>
.home__title {
  font-size: 3rem;
}

.home__subtitle {
  font-size: 1.5rem;
}
</style>
