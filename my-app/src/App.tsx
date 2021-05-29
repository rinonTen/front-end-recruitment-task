import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import { MainScreen } from './page/MainScreen'
function App() {
  return (
    <GlobalProvider>
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
