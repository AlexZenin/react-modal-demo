import { useContext } from 'react'
import { useSnapshot } from 'valtio'
import modalState, { closeModal, openModal } from '../modal/modalStore'
import { ThemeContext } from '../themeContext'

export default function DeeplyNestedComponent() {
  const state = useSnapshot(modalState)
  const theme = useContext(ThemeContext)
  return (
    <>
      <h3>{`Modal is currently: ${state.open ? 'open' : 'closed'}`}</h3>
      <h4>Theme is currently: {theme.theme}</h4>
      <button onClick={() => openModal()}>open modal</button>
      <button onClick={() => closeModal()}>close modal</button>
    </>
  )
}
