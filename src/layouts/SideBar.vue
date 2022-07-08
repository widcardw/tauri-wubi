<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { toggleDark } from '../composables/dark'

const sideItems: Array<{
  icon: string
  name: string
  route: string
}> = [{
  icon: 'i-carbon-home',
  name: '主页',
  route: '/',
}, {
  icon: 'i-carbon-overlay',
  name: '第一页',
  route: '/first',
}, {
  icon: 'i-carbon-add-alt',
  name: '第二页',
  route: '/second',
}]
const router = useRouter()
</script>

<template>
  <div h-100vh border-r="~ zinc-200 dark:zinc-700" class="w-3.2rem">
    <div
      v-for="it in sideItems" :key="it.name"
      cursor-pointer select-none
      transition duration-200 ease-in-out
      p-4
      border-rounded
      overflow-hidden
      icon-btn
      :title="it.name"
      @click="router.push(it.route)"
    >
      <div :class="it.icon" mr-2 />
    </div>
    <div class="icon-btn p4 !outline-none" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </div>
  </div>
</template>

<style scoped>
</style>
