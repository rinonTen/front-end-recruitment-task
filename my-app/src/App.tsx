import React from 'react'
import { GlobalProvider } from './GlobalState'
import { MainScreen } from './screen/MainScreen'
function App() {
  return (
    <GlobalProvider>
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
