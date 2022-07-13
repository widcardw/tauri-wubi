<script setup lang="ts">
// import { ref } from 'vue'
import AppTitle from '../../components/AppTitle.vue'
</script>

<template>
  <div flex h-100vh>
    <div self-center mx-a mb-4xl space-y-4>
      <img block mx-a max-w-16rem src="/icon.png">
      <AppTitle />
      <div text="center zinc-500" space-x-2>
        <div text-lg>
          数据来源
        </div>
        <a text-zinc-500 icon-btn decoration-none href="https://jinrishici.com" target="_blank">今日诗词</a>
        <a text-zinc-500 icon-btn decoration-none htef="https://ctext.org/zhs" target="_blank">Chinese Text Project</a>
      </div>
      <a text-zinc-500 text-xl block href="https://github.com/widcardw/tauri-wubi" icon-btn target="_blank">
        <div ma i="carbon-logo-github" />
      </a>
    </div>
  </div>
</template>
