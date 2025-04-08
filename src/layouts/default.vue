<script lang="ts" setup>
import MiraNavbar from '~/components/common/MiraNavbar.vue'
</script>

<template>
  <div class="layout">
    <header class="layout-header">
      <MiraNavbar />
      <slot name="header" />
    </header>
    
    <div class="layout-content">
      <main class="layout-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-header {
    height: 70px;
  }
}
</style>
