import { createContext, useEffect, useState } from 'react'

interface StateNames {
  isLoading: boolean
  randomJokeData: {
    id: number
    joke: string
    categories: string[]
  }
  fetchJoke: () => {}
  listOfCategories: string[]
  changeJoke: any
  impersonateInputValue: string
  handleImpersonateInput: any
  incrementJokeNumbers: any
  changeNumberOfJokes: any
  numberOfJokes: number
  decrementJokeNumbers: any
  downloadTxtFile: any
}

const initialStateValues: StateNames = {
  isLoading: false,
  randomJokeData: {
    id: 2,
    joke: '',
    categories: [],
  },
  fetchJoke: async () => {},
  listOfCategories: [],
  changeJoke: () => {},
  impersonateInputValue: '',
  handleImpersonateInput: () => {},
  numberOfJokes: 0,
  changeNumberOfJokes: () => {},
  incrementJokeNumbers: () => {},
  decrementJokeNumbers: () => {},
  downloadTxtFile: () => {},
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

  const [listOfCategories, setListOfCategories] = useState([])

  const [numberOfJokes, setnumberOfJokes] = useState(
    initialStateValues.numberOfJokes
  )

  const [multipleJokes, setMultipleJokes] = useState([])

  let randomJokeEndpoint: string = 'http://api.icndb.com/jokes/random'
  let jokeCategoriesEndpoint: string = 'http://api.icndb.com/categories'
  let multipleJokesEndpoint: string = 'http://api.icndb.com/jokes/random/'
  if (categoryName !== '') {
    randomJokeEndpoint = `http://api.icndb.com/jokes/random?limitTo=[${categoryName}]`
  } else if (impersonateInputValue !== '') {
    const namesFromInput = impersonateInputValue.split(' ')
    const firstNameQuery = namesFromInput[0]
    const lastNameQuery = namesFromInput.slice(1).join(' ')
    randomJokeEndpoint = `http://api.icndb.com/jokes/random?firstName=${firstNameQuery}&lastName=${lastNameQuery}`
  }

  const downloadTxtFile = () => {
    const element = document.createElement('a')
    const arrayOfJokes: string[] = []
    // Store jokes in one array
    multipleJokes.map((jokeObj: { id: number; joke: string }) =>
      arrayOfJokes.push(jokeObj.joke)
    )

    const file = new Blob(arrayOfJokes, {
      type: 'text/plain',
    })
    element.href = URL.createObjectURL(file)
    element.download = 'myJokes.txt'
    // Required for this to work in FireFox
    document.body.appendChild(element)
    element.click()
  }

  const fetchMultipleJokes = async () => {
    if (numberOfJokes > 0 || numberOfJokes <= 100) {
      const jokeEndpoint = `${multipleJokesEndpoint + numberOfJokes.toString()}`
      const response = await fetch(jokeEndpoint)
      const multipleJokes = await response.json()
      setIsLoading(true)
      setMultipleJokes(multipleJokes.value)
      console.log(multipleJokes.value)
    }
  }

  const fetchJokeCategory = async () => {
    const response = await fetch(jokeCategoriesEndpoint)
    const jokeCategories = await response.json()
    setIsLoading(true)
    setListOfCategories(jokeCategories.value)
  }

  const fetchRandomJoke = async () => {
    const response = await fetch(randomJokeEndpoint)
    const randomJokeData = await response.json()
    setIsLoading(true)
    setRandomJokeData(randomJokeData.value)
  }

  const changeJoke = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      categories: { value: string }
      impersonate: { value: string }
    }
    const chosenCategory = target.categories.value
    setCategoryName(chosenCategory)
    const impersonateInputValue = target.impersonate.value
    setImpersonateInputValue(impersonateInputValue)
  }

  const handleImpersonateInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImpersonateInputValue(event.target.value)
  }

  const changeNumberOfJokes = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Number(event.target.value))
    setnumberOfJokes(Number(event.target.value))
  }

  const incrementJokeNumbers = () => {
    const currentNumOfJokes = numberOfJokes + 1
    setnumberOfJokes(currentNumOfJokes)
  }

  const decrementJokeNumbers = () => {
    const currentNumOfJokes = numberOfJokes - 1
    setnumberOfJokes(currentNumOfJokes)
  }

  useEffect(() => {
    fetchMultipleJokes()
  }, [numberOfJokes])

  useEffect(() => {
    fetchRandomJoke()
    fetchJokeCategory()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        randomJokeData,
        fetchJoke: fetchRandomJoke,
        listOfCategories,
        changeJoke,
        handleImpersonateInput,
        impersonateInputValue,
        changeNumberOfJokes,
        incrementJokeNumbers,
        decrementJokeNumbers,
        numberOfJokes,
        downloadTxtFile,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, initialStateValues, GlobalProvider }
