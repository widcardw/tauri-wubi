<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{ modelValue: boolean }>()
const emits = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div icon-btn title="编辑左侧" @click="value = !value">
    <div v-if="value" i-carbon-locked />
    <div v-else i-carbon-unlocked />
  </div>
</template>
