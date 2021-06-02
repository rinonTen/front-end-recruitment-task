import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import { MainScreen } from './page/MainScreen'
import { GlobalStyle } from './styleComponents/GlobalStyles'

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
