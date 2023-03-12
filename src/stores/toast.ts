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

// function toggleActive(nextState: boolean) {
//   if (nextState === toast.get().isActive)
//     return
//   if (nextState === true) {
//     toast.setKey('triggerEnter', true)
//     toast.setKey('isActive', true)
//   }
//   else {
//     toast.setKey('triggerExit', true)
//     setTimeout(() => {
//       toast.setKey('triggerEnter', false)
//       toast.setKey('triggerExit', false)
//     }, 1000)
//     toast.setKey('isActive', false)
//   }
// }

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
