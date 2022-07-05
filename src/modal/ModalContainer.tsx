import React from 'react'
import * as ReactDOM from 'react-dom'
import { Modal } from './Modal'

const modalRoot = document.getElementById('modal-root')

export function ModalContainer() {
  return ReactDOM.createPortal(<Modal />, modalRoot)
}
