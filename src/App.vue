<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <RouterView font-sans />
</template>

<style>
html.dark {
  background: #121212;
  color: grey;
}

html,
body {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.375);
}

::-webkit-scrollbar-track {
  background: rgba(128, 128, 128, 0.125);
}
</style>
