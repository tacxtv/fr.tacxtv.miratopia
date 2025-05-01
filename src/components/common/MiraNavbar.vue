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

const openDiscord = () => {
  window.open('https://discord.gg/yrUDUtBGxR', '_blank')
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
          to="https://discord.gg/yrUDUtBGxR"
        >
          <span class="flex items-center gap-2 justify-center">
            <svg class="mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Rejoindre le Discord
          </span>
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
      <button class="btn btn-secondary px-4 py-2 rounded-md font-medium transition-all border border-[var(--primary-0)] text-[var(--primary-0)] hover:bg-[var(--surface-20)] cursor-pointer" @click="openDiscord">
        <span class="flex items-center gap-2">
          <svg class="mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          Rejoindre le Discord
        </span>
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