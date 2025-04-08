<script lang="ts" setup>

</script>

<template>
  <section class="relative w-full h-[700px] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="@/public/banner.png" 
        alt="Bannière" 
        class="w-full h-full object-cover"
      />
      <!-- Arc overlay -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="transparent" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z"
            fill="#020417"
          />
        </svg>
      </div>
    </div>
    
    <!-- Logo and Title overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center mb-20">
      <img 
        src="@/public/logo.png" 
        alt="Logo" 
        class="w-64 h-64 object-contain mb-4"
      />
      <img 
        src="@/public/title.png" 
        alt="Titre" 
        class="w-96 object-contain"
      />
    </div>
  </section>
</template>
