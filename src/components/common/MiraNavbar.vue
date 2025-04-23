<script lang="ts" setup>
const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Guide', path: 'https://tacx.notion.site/Wikitopia-1de153ee963f80d29df1cdeeb85779e5' },
  { name: "Map", path: '/map' },
  { name: 'Le Village', path: '/city' },
  { name: "L'Équipe", path: '/team' },
]

const isMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)
const hamburgerButtonRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (
    isMenuOpen.value && 
    mobileMenuRef.value && 
    !mobileMenuRef.value.contains(target) &&
    !hamburgerButtonRef.value?.contains(target)
  ) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  })

const redirectToLogin = () => {
  window.open('https://mirashop.tacxtv.fr/login', '_blank')
}

const downloadLauncher = () => {
  const isWindows = navigator.platform.toLowerCase().includes('win')
  const windowsUrl = 'https://github.com/tacxtv/miratopia-launcher/releases/download/v0.2.1/Miratopia-Launcher_0.2.1.exe'
  const otherUrl = 'https://github.com/tacxtv/miratopia-launcher/releases'
  
  window.open(isWindows ? windowsUrl : otherUrl, '_blank')
}
</script>

<template>
  <nav class="navbar fixed top-0 left-0 right-0 h-[70px] bg-[var(--surface-10)] flex items-center justify-between px-8 shadow-md z-50">
    <div class="navbar-brand text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2 cursor-pointer" @click="navigateTo('/')">
      <img src="/logo.png" alt="Miratopia" class="w-8 h-8 sm:w-12 sm:h-12">
      <img src="/title.png" alt="Miratopia" class="w-32 sm:w-46">
    </div>

    <!-- Bouton hamburger pour mobile -->
    <button 
      ref="hamburgerButtonRef"
      class="mobile-menu-button hidden md:hidden p-2 cursor-pointer"
      @click="toggleMenu"
      aria-label="Menu"
    >
      <div class="hamburger" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <!-- Menu de navigation -->
    <div 
      ref="mobileMenuRef"
      class="nav-content flex-1 flex justify-center items-center gap-8 md:static"
      :class="{ 'show': isMenuOpen }"
    >
      <div class="navbar-links flex gap-8 md:justify-center">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :target="link.name === 'Guide' ? '_blank' : '_self'"
          class="nav-link font-medium text-[var(--text-secondary)] hover:text-[var(--primary-0)] transition-colors"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink 
          class="btn btn-secondary md:hidden px-4 py-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer text-center"
          to="https://mirashop.tacxtv.fr/login"
        >
          Se connecter
        </NuxtLink>
      </div>
    </div>

    <div class="navbar-buttons hidden lg:flex gap-4">
      <button 
        class="btn btn-secondary px-4 py-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer"
        @click="redirectToLogin"
      >
        Se connecter
      </button>
      <button class="btn btn-primary px-4 py-2 rounded-md font-medium transition-all bg-[var(--primary-0)] text-[var(--surface-0)] hover:bg-[var(--primary-10)] cursor-pointer" @click="downloadLauncher">
        <span class="flex items-center gap-2">
          <svg class="mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Télécharger le launcher
        </span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.mobile-menu-button {
  @media (max-width: 768px) {
    display: block;
    
    .hamburger {
      width: 24px;
      height: 20px;
      position: relative;
      
      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: var(--text-primary);
        border-radius: 2px;
        
        &:nth-child(1) { top: 0; }
        &:nth-child(2) { top: 9px; }
        &:nth-child(3) { top: 18px; }
      }
      
      &.open {
        span {
          &:nth-child(1) {
            transform: rotate(45deg);
            top: 9px;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 9px;
          }
        }
      }
    }
  }
}

.nav-content {
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--surface-10);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &.show {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.navbar-links {
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.navbar-buttons {
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    
    .btn {
      width: 100%;
      text-align: center;
    }
  }
}
</style> 