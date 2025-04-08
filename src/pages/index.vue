<template>
  <div class="container">
    <h1 class="text-3xl font-bold">
    Hello world!
  </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style>
