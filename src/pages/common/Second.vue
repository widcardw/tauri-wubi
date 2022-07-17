<script setup lang="ts">
import KeyBoard from '../../components/KeyBoard.vue'
import { showKbd } from '../../composables/showKbd'
</script>

<template>
  <KeyBoard p-2 />
  <div text="center" icon-btn cursor-pointer @click="showKbd">
    点击打开浮动键盘
  </div>
</template>
