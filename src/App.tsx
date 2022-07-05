import { ModalContainer } from './modal/ModalContainer'
import DeeplyNestedComponent from './components/DeeplyNestedComponent'
import DeeplyNestedComponentNeedingContext from './components/DeeplyNestedComponentNeedingContext'
import { ThemeProvider } from './themeContext'

export function App() {
  return (
    <main>
      <ModalContainer />
      <DeeplyNestedComponent />
      <ThemeProvider>
        <DeeplyNestedComponentNeedingContext />
      </ThemeProvider>
    </main>
  )
}
