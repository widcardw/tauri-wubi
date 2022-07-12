<script setup lang="ts">
import { useVModel } from '@vueuse/core'
const props = defineProps<{ modelValue: string }>()

const emits = defineEmits(['update:modelValue'])
const widgetLayout = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div icon-btn title="切换布局">
    <div v-if="widgetLayout === 'col'" i-carbon-column @click="widgetLayout = 'row'" />
    <div v-else i-carbon-row @click="widgetLayout = 'col'" />
  </div>
</template>
