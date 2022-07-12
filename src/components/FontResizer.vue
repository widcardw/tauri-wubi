<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { DEFAULT_FONT_SIZE } from '../composables/types'

const props = defineProps<{ modelValue: number }>()
const emit = defineEmits(['update:modelValue'])

const fontSize = useVModel(props, 'modelValue', emit)

const enlargeFont = () => {
  if (!fontSize.value)
    fontSize.value = DEFAULT_FONT_SIZE

  if (fontSize && fontSize.value < 20)
    fontSize.value += 0.1
}
const shrinkFont = () => {
  if (!fontSize.value)
    fontSize.value = DEFAULT_FONT_SIZE

  if (fontSize.value > 0.9)
    fontSize.value -= 0.1
}
</script>

<template>
  <div grid grid-cols-2 title="修改字体大小">
    <div i-carbon-text-font icon-btn row-span-2 self-center @click="fontSize = DEFAULT_FONT_SIZE" />
    <div i-carbon-caret-up icon-btn class="text-0.75rem" @click="enlargeFont" />
    <div i-carbon-caret-down icon-btn class="text-0.75rem" self-end @click="shrinkFont" />
  </div>
</template>
