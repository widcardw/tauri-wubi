<script setup lang="ts">
defineProps<{
  name: string
  code: number
  char: string
  strokes: Array<string>
  indicator: string
}>()
</script>

<template>
  <div mkey>
    <div flex-1 grid :class="{ 'grid-cols-4': name !== 'n', 'grid-cols-6': name === 'n' }">
      <span v-for="s in strokes" :key="s" text-center class="root-font">
        {{ s }}
      </span>
    </div>
    <div grid grid-cols-3 text-center>
      <div text-teal-600 class="root-font">
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

<style scoped>
@import url(../styles/root-font.css);
.root-font {
  font-family: HanZiRootFont;
}
</style>
