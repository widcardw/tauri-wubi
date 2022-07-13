<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { emit } from '@tauri-apps/api/event'
import { LogicalSize, WebviewWindow } from '@tauri-apps/api/window'
import KeyBoard from '../../components/KeyBoard.vue'
import { toggleDark } from '../../composables/dark'
import { isPinned, pinKbd, showKbd } from '../../composables/showKbd'

const kbdWindow = WebviewWindow.getByLabel('kbd') as WebviewWindow

const kbdRef = ref<HTMLElement>()
const kbdWidth = ref(1050)

const kbdFontSize = ref(1)
const zoomIn = () => {
  if (kbdFontSize.value < 3) {
    kbdFontSize.value += 0.125
    emit('zoom', kbdFontSize.value)
  }
}
const zoomOut = () => {
  if (kbdFontSize.value > 0.6) {
    kbdFontSize.value -= 0.125
    emit('zoom', kbdFontSize.value)
  }
}

watch(kbdFontSize, () => {
  nextTick(() => {
    const height = kbdRef.value?.clientHeight ?? 383
    const width = height * 2.8
    kbdWidth.value = width
    kbdWindow.setSize(new LogicalSize(width, height))
  })
})
</script>

<template>
  <div
    :style="{ fontSize: `${kbdFontSize}rem`, width: `${kbdWidth}px` }"
    absolute
    h-100vh
    data-tauri-drag-region
  />
  <div ref="kbdRef">
    <KeyBoard p-2 :style="{ fontSize: `${kbdFontSize}rem` }" />
  </div>
  <div absolute left-0 bottom-0 p-2 flex space-x-2>
    <div icon-btn i="carbon-zoom-in" @click="zoomIn" />
    <div icon-btn i="carbon-zoom-out" @click="zoomOut" />
  </div>
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
