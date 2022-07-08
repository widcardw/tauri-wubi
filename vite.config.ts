import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify({}),
        presetUno({}),
        presetIcons({
          scale: 1.2,
        }),
      ],
      shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] cursor-pointer select-none duration-200 hover:text-teal-600 !outline-none'],
        [/^zb(-.)?$/, m => `border${m[1]}-1 border${m[1]}-zinc-200 dark:border${m[1]}-zinc-700`],
      ],
    }),
    Pages(),
  ],
})
