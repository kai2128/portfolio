import { setTimeout } from 'timers'
import { useStore } from '@nanostores/react'
import { map } from 'nanostores'

interface ToastState {
  message: string
  isActive: boolean
  timeoutId?: ReturnType<typeof setTimeout>
  triggerEnter: boolean
  triggerExit: boolean
}

const toast = map<ToastState>({
  isActive: false,
  message: '',
  triggerEnter: false,
  triggerExit: false,
})

export function useToastStore() {
  return {
    toast: useStore(toast),
    notify(message: string, timeout = 3000) {
      clearTimeout(toast.get().timeoutId)
      toast.setKey('message', message)
      toast.setKey('isActive', true)
      toast.setKey('timeoutId', setTimeout(() => {
        toast.setKey('isActive', false)
      }, timeout))
    },
  }
}
