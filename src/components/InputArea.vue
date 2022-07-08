<script setup lang="ts">
import { useVModel } from '@vueuse/core'
const props = withDefaults(defineProps<{
  modelValue: string
  fontSize?: number
}>(), {
  fontSize: 1,
})
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <textarea
    v-model="data"
    leading-loose
    p-4 m-0
    outline-none
    resize-none
    font-sans
    bg-transparent
    dark:text-zinc
    :style="{ fontSize: `${fontSize}rem` }"
  />
</template>
