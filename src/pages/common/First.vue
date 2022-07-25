<script setup lang="ts">
import { useSessionStorage, useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import * as Diff from 'diff'
import { DEFAULT_FONT_SIZE } from '../../composables/types'
import type { topLvCharType } from '../../data/kbd'
import { topLvChar, topLvCharDict } from '../../data/kbd'
import InputArea from '../../components/InputArea.vue'
import dict from '../../data/wubi86.dict.json'
import fetchOnePoem from '../../composables/fetchOnePoem'
import fetchLunYu from '../../composables/fetchLunYi'
import FontResizer from '../../components/FontResizer.vue'
import LayoutSetter from '../../components/LayoutSetter.vue'
import EditSwitcher from '../../components/EditSwitcher.vue'
import FetcherIcon from '../../components/FetcherIcon.vue'

const inputValue = useSessionStorage('inputValue', '')

const fontSize = useStorage('fontSize', DEFAULT_FONT_SIZE)

const widgetLayout = useStorage('widgetLayout', 'col')
const leftAreaDisabled = ref(true)
const sampleText = useStorage('sampleText', '')
const infoShow = ref(true)
const errMsg = ref('')

const diff = computed(() => Diff.diffChars(sampleText.value, inputValue.value))

const nextChar = computed((): { char: string; code: string }[] => {
  // 关闭提示
  if (!infoShow.value)
    return []
  // 输入长度大于原本长度
  if (inputValue.value.length > sampleText.value.length)
    return []
  // 全部匹配
  if (diff.value.length === 1
  && diff.value[0].count === sampleText.value.length
  && diff.value[0].removed === undefined)
    return []
  const sentence = diff.value.find(it => it.removed) ?? diff.value[0]
  const char1 = sentence.value.charAt(0)
  if ((char1.charCodeAt(0) < 0x4E00 && char1.charCodeAt(0) > 0x9FA5)
  || ['，', '。', '？', '！', '「', '」'].includes(char1))
    return []

  const char2 = sentence.value.slice(0, 2)
  const char3 = sentence.value.slice(0, 3)
  const char4 = sentence.value.slice(0, 4)
  // @ts-expect-error-error
  // eslint-disable-next-line prefer-const
  let [code1, code2, code3, code4] = [dict[char1], dict[char2], dict[char3], dict[char4]]
  const res = []
  if (code1) {
    if (topLvChar.includes(char1))
      code1 = `${topLvCharDict[char1 as topLvCharType]}/${code1}`

    res.push({ char: char1, code: code1 })
  }
  if (char1 !== char2 && code2)
    res.push({ char: char2, code: code2 })
  if (char2 !== char3 && code3)
    res.push({ char: char3, code: code3 })
  if (char3 !== char4 && code4)
    res.push({ char: char4, code: code4 })
  return res.reverse()
})

const isRefreshing = ref(false)
const poemFetching = ref(false)
const getOnePoem = async () => {
  errMsg.value = ''
  if (isRefreshing.value)
    return
  isRefreshing.value = poemFetching.value = true
  try {
    sampleText.value = await fetchOnePoem()
  }
  catch (e) {
    console.error(e)
    errMsg.value = String(e)
  }
  finally {
    isRefreshing.value = poemFetching.value = false
  }
  inputValue.value = ''
}

const lunyuFetching = ref(false)
const getLunYu = async () => {
  errMsg.value = ''
  if (isRefreshing.value)
    return
  isRefreshing.value = lunyuFetching.value = true
  try {
    sampleText.value = await fetchLunYu()
  }
  catch (e) {
    errMsg.value = String(e)
    console.error(e)
  }
  finally {
    isRefreshing.value = lunyuFetching.value = false
  }
  inputValue.value = ''
}
</script>

<template>
  <div flex flex-col h-100vh>
    <!-- 标题栏 -->
    <div p-4 text-xl flex space-x-2 zb-b>
      <FetcherIcon :animate-condition="isRefreshing && poemFetching" label="诗词" self-center @click="getOnePoem" />
      <FetcherIcon :animate-condition="isRefreshing && lunyuFetching" label="古文" self-center @click="getLunYu" />
      <div flex-1 />
      <FontResizer v-model="fontSize" self-center />
      <LayoutSetter v-model="widgetLayout" self-center />
      <EditSwitcher v-model="leftAreaDisabled" self-center />
    </div>
    <!-- 主体 -->
    <div
      grid
      w-full
      flex-grow
      of-y-auto
      :class="{
        'grid-cols-2': widgetLayout === 'col',
        'flex flex-col': widgetLayout === 'row',
      }"
    >
      <!-- 样例文本 -->
      <div
        :class="{
          'flex-1 zb-b': widgetLayout === 'row',
          'zb-r': widgetLayout === 'col',
        }"
        :style="{ fontSize: `${fontSize}rem` }"
        flex of-y-auto
      >
        <!-- 用于更改 -->
        <InputArea
          v-if="!leftAreaDisabled"
          v-model="sampleText"
          border-none flex-1
          placeholder="在此处输入范例"
          :style="{ fontSize: `${fontSize}rem` }"
          :disabled="leftAreaDisabled"
        />
        <!-- 用于样板 -->
        <div v-else inp select-none ws-pre-line>
          <span
            v-for="(item, i) in diff" :key="i"
            :class="{
              'bg-teal-600 bg-opacity-30': item.removed === undefined && item.added === undefined,
              'bg-red-600 bg-opacity-30': item.added,
            }"
          >
            {{ item.value }}
          </span>
        </div>
      </div>
      <!-- 输入区域 -->
      <InputArea
        v-model="inputValue"
        :style="{ fontSize: `${fontSize}rem` }"
        :class="{ 'flex-1': widgetLayout === 'row' }"
        disabled:opacity-50
        border-none
        :placeholder="leftAreaDisabled ? '在此处练习输入' : '在左侧输入范本'"
        :disabled="!leftAreaDisabled"
      />
    </div>
    <!-- 页脚提示 -->
    <div flex zb-t font-mono select-none>
      <div p-4 zb-r icon-btn self-center @click="infoShow = !infoShow">
        <div v-if="infoShow" i-carbon-idea />
        <div v-else i-carbon-ai-status-rejected />
      </div>
      <div v-for="it in nextChar" :key="it.char" p-4 zb-r>
        {{ it.char }} {{ it.code }}
      </div>
      <div flex-1 p-4 of-x-hidden text-red>
        {{ errMsg }}
      </div>
      <div p-4 zb-l>
        {{ inputValue.length }}/{{ sampleText.length }}
      </div>
    </div>
  </div>
</template>
