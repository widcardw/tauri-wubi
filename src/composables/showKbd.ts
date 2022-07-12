import { WebviewWindow } from '@tauri-apps/api/window'
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
const kbdWindow = WebviewWindow.getByLabel('kbd') as WebviewWindow
export const isPinned = ref(true)
const togglePin = useToggle(isPinned)

export const showKbd = async () => {
  const isVisible = await kbdWindow.isVisible()
  if (!isVisible)
    await kbdWindow.show()

  else
    await kbdWindow.hide()
}

export const pinKbd = async () => {
  // eslint-disable-next-line no-console
  console.log('pin')
  if (!isPinned.value)
    await kbdWindow.setAlwaysOnTop(true)
  else
    await kbdWindow.setAlwaysOnTop(false)
  togglePin()
}
