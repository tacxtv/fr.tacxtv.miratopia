<script setup lang="ts">
import TeamMemberCard from '~/components/team/TeamMemberCard.vue';
import type { Citizen } from '~/services/city/Citizen';

useHead({
  title: 'L\'Équipe'
})

const teamMembers = ref<Citizen[]>([])

const getRoles = (roles: string[]) => {
  return roles.join(', ')
}

onMounted(() => {
  fetch('https://mirashop.tacxtv.fr/api/core/users?staff=1')
    .then(response => response.json())
    .then(data => {
      teamMembers.value = data.data
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error)
    })
})
</script>

<template>
  <div class="layout">
    <div class="mt-10 flex flex-col items-center gap-8 px-4 md:px-0">
      <div class="text-white text-3xl md:text-5xl font-medium">L'Équipe Miratopia</div>
      <div class="text-white text-xl  w-full md:w-2/3 text-center">
        L'équipe de Mira est composée de passionnés qui travaillent ensemble pour vous créer une expérience Miratopia unique, fun et immersive
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 mt-12 px-4 max-w-6xl mx-auto">
      <TeamMemberCard
        v-for="member in teamMembers"
        :key="member.name"
        :avatar="member._minecraftHead"
        :pseudo="member.name"
        :role="getRoles(member?.staffRoles || [])"
        :link="member?.publicLink"
      />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  margin-bottom: 2rem;
}
</style>
