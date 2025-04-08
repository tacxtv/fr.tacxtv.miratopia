<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cards = [
  {
    id: 1,
    image: '/carroussel/image1.png',
    title: 'Titre 1',
    description: 'Description de la première carte'
  },
  {
    id: 2,
    image: '/carroussel/image2.png',
    title: 'Titre 2',
    description: 'Description de la deuxième carte'
  },
  {
    id: 3,
    image: '/carroussel/image3.png',
    title: 'Titre 3',
    description: 'Description de la troisième carte'
  },
  {
    id: 4,
    image: '/carroussel/image4.png',
    title: 'Titre 4',
    description: 'Description de la quatrième carte'
  },
  {
    id: 5,
    image: '/carroussel/image5.png',
    title: 'Titre 5',
    description: 'Description de la cinquième carte'
  },
  {
    id: 6,
    image: '/carroussel/image6.png',
    title: 'Titre 6',
    description: 'Description de la sixième carte'
  }
]

const currentIndex = ref(0)
let intervalId: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 10000) // 10 secondes
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="gallery-container">
    <div class="carousel">
      <div 
        class="carousel-inner"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(card, index) in cards" 
          :key="card.id"
          class="carousel-card"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }">
            <div class="card-content">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Ajout des boutons de navigation -->
      <button class="nav-button prev" @click="prevSlide">&lt;</button>
      <button class="nav-button next" @click="nextSlide">&gt;</button>
      
      <!-- Indicateurs de position -->
      <div class="carousel-indicators">
        <button 
          v-for="(_, index) in cards" 
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  width: 100%;
  margin: 0;
}

.carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-card {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

.card-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.card-content p {
  margin: 0;
  font-size: 1rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  z-index: 2;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s;
}

.indicator.active {
  background: white;
}
</style>
