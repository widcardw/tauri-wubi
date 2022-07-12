<script setup lang="ts">
import { useVModel } from '@vueuse/core'
const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <textarea
    v-model="data"
    inp
    dark:text-zinc
    max-length="600"
  />
</template>
