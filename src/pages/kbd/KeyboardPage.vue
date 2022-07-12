<script setup lang="ts">
import KeyBoard from '../../components/KeyBoard.vue'
import { toggleDark } from '../../composables/dark'
import { isPinned, pinKbd, showKbd } from '../../composables/showKbd'
</script>

<template>
  <div absolute w-1050px h-383px data-tauri-drag-region />
  <KeyBoard p-2 />
  <div absolute right-0 bottom-0 p-2 flex space-x-4>
    <div icon-btn @click="pinKbd">
      <div v-if="!isPinned" i="carbon-pin" />
      <div v-else i="carbon-pin-filled" />
    </div>
    <div icon-btn @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </div>
    <div icon-btn i-carbon-view-off @click="showKbd" />
  </div>
</template>
