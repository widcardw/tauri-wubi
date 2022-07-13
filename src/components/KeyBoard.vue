<script setup lang="ts">
import OneKey from '../components/OneKey.vue'
import type { letter } from '../data/kbd'
import kbd from '../data/kbd'

const line1: letter[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const line2: letter[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const line3: letter[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
</script>

<template>
  <div font-sans flex flex-col>
    <div flex>
      <OneKey
        v-for="c in line1" :key="c"
        :name="kbd[c].name"
        :char="kbd[c].char"
        :strokes="kbd[c].strokes"
        :code="kbd[c].code"
        :indicator="kbd[c].indicator"
      />
    </div>
    <div flex class="ml-3em">
      <OneKey
        v-for="c in line2" :key="c"
        :name="kbd[c].name"
        :char="kbd[c].char"
        :strokes="kbd[c].strokes"
        :code="kbd[c].code"
        :indicator="kbd[c].indicator"
      />
    </div>
    <div flex class="ml-6em">
      <OneKey
        v-for="c in line3" :key="c"
        :name="kbd[c].name"
        :char="kbd[c].char"
        :strokes="kbd[c].strokes"
        :code="kbd[c].code"
        :indicator="kbd[c].indicator"
      />
    </div>
  </div>
</template>
