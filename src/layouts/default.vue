<script lang="ts" setup>

</script>

<template>
  <div class="layout">
    <header class="layout-header">
      <slot name="header" />
    </header>
    
    <div class="layout-content">
      <main class="layout-main">
        <slot />
      </main>
    </div>
    
    <footer class="layout-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>

</style>
