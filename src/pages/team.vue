<script setup lang="ts">
import TeamMemberCard from '~/components/team/TeamMemberCard.vue';
import MiraWorkInProgress from '~/components/common/MiraWorkInProgress.vue';

useHead({
  title: 'L\'Équipe'
})

const localStorageFeatureFlag = useLocalStorage('feature-flag', 'false')
const displayWip = computed(() => localStorageFeatureFlag.value !== 'true')

const teamMembers = [
  {
    avatar: 'https://mc-heads.net/avatar/Steve/100',
    pseudo: 'Steve',
    role: 'Développeur Principal'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Alex/100',
    pseudo: 'Alex',
    role: 'Designer'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  },
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
  ,
  {
    avatar: 'https://mc-heads.net/avatar/Notch/100',
    pseudo: 'Notch',
    role: 'Game Designer'
  }
]
</script>

<template>
  <div v-if="displayWip" class="layout">
    <MiraWorkInProgress />
  </div>
  <div v-else class="layout">
    <div class="mt-10 flex flex-col items-center gap-8 px-4 md:px-0">
      <div class="text-white text-3xl md:text-5xl font-medium">L'Équipe Miratopia</div>
      <div class="text-white text-xl  w-full md:w-1/3 text-center">
        L'équipe de Mira est composée de passionnés qui travaillent ensemble pour vous créer une expérience Miratopia unique, fun et immersive
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 mt-12 px-4 max-w-6xl mx-auto">
      <TeamMemberCard
        v-for="member in teamMembers"
        :key="member.pseudo"
        :avatar="member.avatar"
        :pseudo="member.pseudo"
        :role="member.role"
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
