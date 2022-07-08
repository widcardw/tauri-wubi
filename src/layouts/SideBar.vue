<script setup lang="ts">
import { useRouter } from 'vue-router'
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
  icon: 'i-carbon-keyboard',
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
  <div h-100vh bg="zinc-100 dark:zinc-800" class="w-2.5rem">
    <div
      v-for="it in sideItems" :key="it.name"
      cursor-pointer select-none
      transition duration-200 ease-in-out
      p-2
      icon-btn
      :title="it.name"
      @click="router.push(it.route)"
    >
      <div :class="it.icon" mr-2 text-xl />
    </div>
    <div
      class="!outline-none"
      absolute bottom-0
      icon-btn
      p-2
      text-xl
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </div>
  </div>
</template>

