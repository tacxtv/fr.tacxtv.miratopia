<script lang="ts" setup>

// const localStorageFeatureFlag = useLocalStorage('feature-flag', 'false')
// const layoutName = computed(() => localStorageFeatureFlag.value === 'true' ? 'default' : 'wip')

</script>

<template>
  <div class="dark">
    <div class="min-h-screen">
      <NuxtLayout name="default">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>