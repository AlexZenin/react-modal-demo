import React from 'react'
import Button from './components/Button/Button'

export function App() {
  return (
    <main>
      <Button size="sm" onClick={() => alert('hello')} variant={'solid'}>
        <h2>Hello</h2>
      </Button>
      <Button size="sm" onClick={() => alert('hello')} variant={'text'}>
        <h2>Hello</h2>
      </Button>
    </main>
  )
}
