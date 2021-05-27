import React, { useContext } from 'react'
import MainScreenComponent from '../components/Main'
import { GlobalContext } from '../GlobalState'
type Props = {
  randomJokeData: {
    id: number
    joke: string
    categories: string[]
  }
  fetchRandomJoke: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: ''
}

export const MainScreen = () => {
  const {
    isLoading,
    randomJokeData,
    fetchJoke,
    handleSelectField,
    handleImpersonateInput,
    impersonateInputValue,
  } = useContext(GlobalContext)

  return (
    <div>
      {isLoading && (
        <MainScreenComponent
          randomJoke={randomJokeData}
          fetchRandomJoke={fetchJoke}
          handleSelectField={handleSelectField}
          handleImpersonateInput={handleImpersonateInput}
          impersonateInputValue={impersonateInputValue}
        />
      )}
    </div>
  )
}
