import { proxy } from 'valtio'

const state = proxy({
  open: true,
})

export function openModal() {
  state.open = true
}

export function closeModal() {
  state.open = false
}

export default state
