<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './layouts/SideBar.vue'
</script>

<template>
  <div flex>
    <SideBar fixed />
    <div class="ml-2.5rem">
      <RouterView />
    </div>
  </div>
</template>

<style>
html.dark {
  background: #121212;
  color: grey;
}
html, body {
  margin: 0;
  padding: 0;
}
</style>
