import { useFetch } from '@vueuse/core'
import type { Ref } from 'vue'
import books from '../data/books.json'
import type { LunYu } from './types'

const baseUrl = 'https://api.ctext.org/gettext?if=zh&remap=gb&urn='

const fetchRandomLunYu = async () => {
  // select book
  const rand1 = Math.floor(Math.random() * books.books.length)
  const book = books.books[rand1]

  // select subsection
  const rand2 = Math.floor(Math.random() * book.subsections.length)
  const name = book.subsections[rand2]

  const url = `${baseUrl}${book.urn}/${name}`

  const { data }: { data: Ref<LunYu | null> } = await useFetch(url, { timeout: 5000 }).json()
  if (!data.value)
    throw new Error('Failed to fetch lunyu')
  const { fulltext, title } = data.value
  return `${title}\n${fulltext.join('\n')}`.slice(0, 600)
}

export default fetchRandomLunYu
