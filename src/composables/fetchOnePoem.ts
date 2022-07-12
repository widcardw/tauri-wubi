import { useFetch } from '@vueuse/core'
import type { Ref } from 'vue'
import type { OnePoem } from './types'

const url = 'https://v1.jinrishici.com/all.json'

const fetchPnePoem = async () => {
  const { data }: { data: Ref<OnePoem | null> } = await useFetch(url, {
    timeout: 5000,
  }).json()
  if (!data.value)
    throw new Error('Failed to fetch poem')
  const { content, origin, author, category } = data.value
  return `${content}\n${origin} ${author}\n${category}`
}

export default fetchPnePoem
