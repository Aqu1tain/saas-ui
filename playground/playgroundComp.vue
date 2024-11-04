<template>
  <UVerticalNavigation :links="fakeLinks" />
</template>

<script setup lang="ts">
const fakeLinks = [{
  icon : "i-heroicons-home",
  label : "First link",
  to : "#",
  trailingIcon: "i-heroicons-chevron-right"
}, {
  icon : "i-heroicons-home",
  label : "Second Link",
  to : "#",
  external : true
}]
</script>

<style scoped></style>
