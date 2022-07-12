import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

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
        [/^zb(-.)?$/, m => `border${m[1] ?? ''}-1 border${m[1] ?? ''}-zinc-200 dark:border${m[1] ?? ''}-zinc-700`],
        ['inp', 'leading-loose p-4 m-0 outline-none resize-none font-sans bg-transparent'],
        ['z4', 'border-1 border-zinc-400 dark:border-zinc-600 border-rounded'],
        ['mkey', 'z4 w-5rem h-6rem p-2 m-1 flex flex-col select-none'],
        ['on-refreshing', 'rotate--360 transition duration-2s infinite'],
      ],
      rules: [
        [/^animate-rotating(-)?(.*)?$/, (matches) => {
          const [,,duration] = matches
          return `
          @keyframes rotating {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          @-webkit-keyframes rotating {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-rotating {
            -webkit-animation: rotating ${duration ?? '1s'} linear infinite;
            animation: rotating ${duration ?? '1s'} linear infinite;
          }
          `
        }],
      ],
    }),
  ],
})
