<script setup lang="ts">
import SideBar from './SideBar.vue'
</script>

<template>
  <div flex>
    <SideBar fixed />
    <div class="ml-2.5rem" flex-1>
      <RouterView />
    </div>
  </div>
</template>
