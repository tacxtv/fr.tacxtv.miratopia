<template>
  <div class="layout">
    <div class="text-center flex flex-col items-center gap-4">
      <img src="/wip.png" alt="logo" class="w-1/3 bouncing-image" :class="{ 'bounce': isBouncing }">
      <h1 class="text-white text-6xl font-medium">Site en construction</h1>
      <p class="text-white text-2xl font-medium">Il sera disponible très bientôt ! Soyez attentifs ! 💗</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isBouncing = ref(false)
let bounceInterval

const startRandomBounce = () => {
  const randomDelay = Math.floor(Math.random() * 7000) // Random delay between 0 and 7000ms
  bounceInterval = setTimeout(() => {
    isBouncing.value = true
    setTimeout(() => {
      isBouncing.value = false
      startRandomBounce() // Start next random bounce
    }, 1000) // Duration of the bounce animation
  }, randomDelay)
}

onMounted(() => {
  startRandomBounce()
})

onUnmounted(() => {
  if (bounceInterval) {
    clearTimeout(bounceInterval)
  }
})
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bounce {
  animation: bounce 1s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
