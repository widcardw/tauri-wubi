<script setup lang="ts">
defineProps<{
  animateCondition: boolean
  label: string
}>()
</script>

<template>
  <div icon-btn flex>
    <div
      i-carbon-renew self-center mr-1
      :class="{ 'animate-rotating': animateCondition }"
    />{{ label }}
  </div>
</template>
