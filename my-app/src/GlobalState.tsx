import { createContext, useEffect, useState } from 'react'

interface StateNames {
  isLoading: boolean
  randomJokeData: {
    id: number
    joke: string
    categories: string[]
  }
  fetchJoke: () => {}
  handleSelectField: any
  impersonateInputValue: string
  handleImpersonateInput: any
}

const initialStateValues: StateNames = {
  isLoading: false,
  randomJokeData: {
    id: 2,
    joke: '',
    categories: [],
  },
  fetchJoke: async () => {},
  handleSelectField: () => {},
  impersonateInputValue: '',
  handleImpersonateInput: () => {},
}

const GlobalContext = createContext(initialStateValues)

const GlobalProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(initialStateValues.isLoading)

  const [randomJokeData, setRandomJokeData] = useState(
    initialStateValues.randomJokeData
  )

  const [categoryName, setCategoryName] = useState<string>('')

  const [impersonateInputValue, setImpersonateInputValue] = useState(
    initialStateValues.impersonateInputValue
  )

  let randomJokeEndpoint = 'http://api.icndb.com/jokes/random'
  if (categoryName !== '') {
    randomJokeEndpoint = `http://api.icndb.com/jokes/random?limitTo=[${categoryName}]`
  }

  const fetchRandomJoke = async () => {
    const response = await fetch(randomJokeEndpoint)
    const randomJokeData = await response.json()
    setIsLoading(true)
    setRandomJokeData(randomJokeData.value)
  }

  const handleSelectField = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setCategoryName(event.target.value)
  }

  const handleImpersonateInput = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault()
    setImpersonateInputValue(event.target.value)
  }

  useEffect(() => {
    fetchRandomJoke()
  }, [categoryName])

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        randomJokeData,
        fetchJoke: fetchRandomJoke,
        handleSelectField,
        handleImpersonateInput,
        impersonateInputValue,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, initialStateValues, GlobalProvider }
