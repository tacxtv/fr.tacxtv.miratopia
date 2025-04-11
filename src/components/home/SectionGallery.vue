<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cards = [
  {
    image: '/carroussel/image1.png',
    title: 'Débarquez pour une nouvelle aventure en survie !',
  },
  {
    image: '/carroussel/paysage1.png',
    title: 'Découvrez une nouvelle carte aux biomes variés où vous installer',
  },
  {
    image: '/carroussel/image2.png',
    title: 'Partez à la rencontre des habitants et aidez-les dans leurs quêtes',
  },
  {
    image: '/carroussel/paysage2.png',
    title: 'Installez-vous dans des endroits fantastiques',
  },
  {
    image: '/carroussel/image3.png',
    title: 'Participez à des événements spéciaux et gagnez de belles récompenses !',
  },
  {
    image: '/carroussel/paysage3.png',
    title: 'Faites face aux dangers qui se dresseront devant vous',
  },
  {
    image: '/carroussel/image4.png',
    title: 'Redécouvrez des mods déjà présents ainsi que de tout nouveaux prêts à être testés ! ',
  },
  {
    image: '/carroussel/paysage4.png',
    title: 'Parcourez des champs fleuris et des terres fertiles',
  },
  {
    image: '/carroussel/paysage5.png',
    title: 'Gravissez les montagnes et les vallées',
  },
  {
    image: '/carroussel/image5.png',
    title: 'Mais le plus important... Amusez-vous avec vos amis !',
  },
]

const currentIndex = ref(0)
let intervalId: number | null = null

const resetInterval = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
  intervalId = window.setInterval(nextSlide, 15000)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length
  resetInterval()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
  resetInterval()
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 15000)
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
          v-for="card in cards" 
          :key="card.title"
          class="carousel-card"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }">
            <div class="card-content">
              <p class="text-white text-2xl font-bold">{{ card.title }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Ajout des boutons de navigation -->
      <button class="nav-button prev" @click="prevSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="nav-button next" @click="nextSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
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
  height: 700px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .carousel {
    height: 400px;
  }
  
  .nav-button {
    display: none;
  }

  .carousel-indicators {
    display: none;
  }

  .indicator {
    display: none;
  }
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
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 2;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button svg {
  width: 24px;
  height: 24px;
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
  bottom: 1.6rem;
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
