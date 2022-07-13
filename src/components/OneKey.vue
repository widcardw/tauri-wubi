<script setup lang="ts">
defineProps<{
  name: string
  code: number
  char: string
  strokes: Array<string>
  indicator?: string
}>()
</script>

<template>
  <div mkey>
    <div flex-1 grid grid-cols-4>
      <span v-for="s in strokes" :key="s" text-center>
        {{ s }}
      </span>
    </div>
    <div flex justify-center space-x-2>
      <div text-teal-600>
        {{ indicator }}
      </div>
      <div self-center font-bold>
        {{ name.toUpperCase() }}
      </div>
      <div self-center>
        {{ char }}
      </div>
    </div>
  </div>
</template>
