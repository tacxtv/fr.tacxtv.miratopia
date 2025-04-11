<script lang="ts" setup>
import MiraFooter from '~/components/common/MiraFooter.vue';
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

    <footer class="layout-footer">
      <MiraFooter />
    </footer>
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

  .layout-footer {
    margin-top: 16px;
  }
}
</style>
