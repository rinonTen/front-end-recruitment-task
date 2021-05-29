import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import { MainScreen } from './page/MainScreen'
function App() {
  return (
    <GlobalProvider>
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
