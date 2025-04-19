<script setup lang="ts">
defineProps<{
  avatar: string
  pseudo: string
  role: string
  link?: string
}>()

const openProfile = (link?: string) => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-64 flex flex-col items-center gap-4 cursor-pointer" @click="openProfile(link)">
    <img :src="avatar" :alt="pseudo" class="w-24 h-24 rounded-full object-cover" />
    <div class="text-white text-xl font-medium">{{ pseudo }}</div>
    <div class="text-white/80 text-center">{{ role }}</div>
  </div>
</template> 