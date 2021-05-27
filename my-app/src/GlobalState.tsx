import { createContext, useEffect, useState } from 'react'

interface StateNames {
  isLoading: boolean
  randomJokeData: {
    id: number
    joke: string
    categories: string[]
  }
  fetchJoke: () => {}
}

const initialStateValues: StateNames = {
  isLoading: false,
  randomJokeData: {
    id: 2,
    joke: '',
    categories: [],
  },
  fetchJoke: async () => {},
}

const GlobalContext = createContext(initialStateValues)

const GlobalProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(initialStateValues.isLoading)
  const [randomJokeData, setRandomJokeData] = useState(
    initialStateValues.randomJokeData
  )

  const randomJokeEndpoint = 'http://api.icndb.com/jokes/random'

  const fetchRandomJoke = async () => {
    const res = await fetch(randomJokeEndpoint)
    const randomJokeData = await res.json()
    setIsLoading(true)
    setRandomJokeData(randomJokeData.value)
  }

  useEffect(() => {
    fetchRandomJoke()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoading: isLoading,
        randomJokeData: randomJokeData,
        fetchJoke: fetchRandomJoke,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, initialStateValues, GlobalProvider }
