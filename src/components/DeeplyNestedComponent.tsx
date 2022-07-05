import { useSnapshot } from 'valtio'
import modalState, { closeModal, openModal } from '../modal/modalStore'

export default function DeeplyNestedComponent() {
  const state = useSnapshot(modalState)
  return (
    <>
      <h3>{`Modal is currently: ${state.open ? 'open' : 'closed'}`}</h3>
      <button onClick={() => openModal()}>open modal</button>
      <button onClick={() => closeModal()}>close modal</button>
    </>
  )
}
