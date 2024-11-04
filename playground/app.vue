<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard class="flex-1" :ui="{ background: 'bg-gray-50 dark:bg-gray-800/50', ring: 'ring-1 ring-gray-300 dark:ring-gray-700', divide: 'divide-y divide-gray-300 dark:divide-gray-700', header: { base: 'font-bold' } }">
      <template #header>
        Welcome to the playground!
      </template>

      <p class="text-gray-500 dark:text-gray-400">
        <playground-comp />
      </p>
    </UCard>
  </UContainer>
</template>

<script setup>
import PlaygroundComp from "~/playgroundComp.vue";
</script>

<style>
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
