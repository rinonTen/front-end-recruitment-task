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
}

export const MainScreen = () => {
  const { isLoading, randomJokeData, fetchJoke } = useContext(GlobalContext)

  return (
    <div>
      {isLoading && (
        <MainScreenComponent
          randomJoke={randomJokeData}
          fetchRandomJoke={fetchJoke}
        />
      )}
    </div>
  )
}
