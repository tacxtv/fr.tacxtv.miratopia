<script setup lang="ts">
useHead({
  title: 'Map'
})
</script>

<template>
  <div class="map-container">
    <iframe
      src="https://mcmeddon.github.io/edoximos/#20240601_edoximos:2794:0:4433:3375:0:0:0:1:flat"
      frameborder="0"
      class="map-iframe"
    />
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.map-iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
