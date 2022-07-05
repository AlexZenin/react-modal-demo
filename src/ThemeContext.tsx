import React from 'react'

interface Theme {
  theme: 'dark' | 'light'
}

export const ThemeContext = React.createContext<Theme>(null!)

interface Props {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}
