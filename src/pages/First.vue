<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'
import InputArea from '../components/InputArea.vue'
const inputValue = ref('')
const fontSize = useStorage('fontSize', 1)
const enlargeFont = () => {
  if (!fontSize.value)
    fontSize.value = 1

  if (fontSize && fontSize.value < 20)
    fontSize.value += 0.1
}
const shrinkFont = () => {
  if (!fontSize.value)
    fontSize.value = 1

  if (fontSize.value > 0.9)
    fontSize.value -= 0.1
}
const widgetLayout = useStorage('widgetLayout', 'col')
</script>

<template>
  <div flex flex-col h-100vh>
    <!-- 标题栏 -->
    <div p-4 text-xl font-sans flex space-x-2 zb-b>
      <div flex-1>
        长文本模式
      </div>
      <div grid grid-cols-2 self-center>
        <div i-carbon-text-font icon-btn row-span-2 self-center @click="fontSize = 1" />
        <div i-carbon-caret-up icon-btn class="text-0.75rem" @click="enlargeFont" />
        <div i-carbon-caret-down icon-btn class="text-0.75rem" self-end @click="shrinkFont" />
      </div>
      <div v-if="widgetLayout === 'col'" i-carbon-column self-center icon-btn @click="widgetLayout = 'row'" />
      <div v-else i-carbon-row self-center icon-btn @click="widgetLayout = 'col'" />
    </div>
    <!-- 主体 -->
    <div
      grid
      w-full
      flex-grow
      :class="{
        'grid-cols-2': widgetLayout === 'col',
        'grid-row-2': widgetLayout === 'row',
        'flex flex-col': widgetLayout === 'row',
      }"
    >
      <!-- 样例文本 -->
      <div
        p-4 font-sans leading-loose select-none
        :style="{ fontSize: `${fontSize}rem` }"
        overflow-y-auto
        :class="{
          'flex-1': widgetLayout === 'row',
          'zb-r': widgetLayout === 'col',
          'zb-b': widgetLayout === 'row',
        }"
      >
        春江潮水连海平，海上明月共潮生。
        滟滟随浪荡江流，潮汐澎湃绕船影。
        道是无穷处，吾将上下而求索。
        看来这岸柳絮翠绕，开道无人过。
        其间长亭远望，只是遥路难道。
        江畔何处辗轩，江上烟雨潇潇。
        烟雨潇潇，江上烟雨潇潇。
        江上烟雨潇潇，江畔何处辗轩。
        江畔何处辗轩，江上烟雨潇潇。
        江上烟雨潇潇，江畔何处辗轩。
        江畔何处辗轩，江上烟雨潇潇。
      </div>
      <!-- 输入区域 -->
      <InputArea
        v-model="inputValue"
        :font-size="fontSize"
        :class="{ 'flex-1': widgetLayout === 'row' }"
        border-none
      />
    </div>
    <!-- 页脚提示 -->
    <div flex p-4 zb-t>
      eeeemmm
    </div>
  </div>
</template>
