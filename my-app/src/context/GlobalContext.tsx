import { createContext, useEffect, useState } from 'react'
import { JOKE_CATEGORY_ENDPOINT, RANDOM_JOKE_ENDPOINT } from '../constants'
import { initialValues } from './InitialStatesValues'

const GlobalContext = createContext(initialValues)

const GlobalProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(initialValues.isLoading)
  const [randomJokeData, setRandomJokeData] = useState(
    initialValues.randomJokeData
  )
  const [categoryName, setCategoryName] = useState<string>('')
  const [impersonateInputValue, setImpersonateInputValue] = useState(
    initialValues.impersonateInputValue
  )
  const [listOfCategories, setListOfCategories] = useState(
    initialValues.listOfCategories
  )
  const [numberOfJokes, setnumberOfJokes] = useState(
    initialValues.numberOfJokes
  )
  const [multipleJokes, setMultipleJokes] = useState([])
  const [shouldJokeImageChange, setShouldJokeImageChange] = useState(
    initialValues.shouldJokeImageChange
  )
  const [inputValue, setInputValue] = useState('')

  // Joke endpoints
  const jokeCategoriesEndpoint: string = JOKE_CATEGORY_ENDPOINT
  let randomJokeEndpoint: string = ''

  const fetchJokeCategory = async () => {
    const response = await fetch(jokeCategoriesEndpoint)
    const jokeCategories = await response.json()
    setIsLoading(false)
    setListOfCategories(jokeCategories.value)
  }

  // Changing the joke endpoint conditionally
  const getJokeEndpoint = () => {
    // Parsing the names from the input
    const namesFromInput = inputValue.split(' ')
    const firstName = namesFromInput[0]
    const lastName = namesFromInput.slice(1).join(' ')

    // Changing the joke endpoint
    const jokeEndpoint = RANDOM_JOKE_ENDPOINT
    if (categoryName !== '') {
      randomJokeEndpoint = `${jokeEndpoint}?limitTo=[${categoryName}]`
      setShouldJokeImageChange(true)
    } else if (inputValue !== '') {
      randomJokeEndpoint = `${jokeEndpoint}?firstName=${firstName}&lastName=${lastName}`
      setShouldJokeImageChange(true)
    } else {
      randomJokeEndpoint = jokeEndpoint
      setShouldJokeImageChange(false)
    }
    // Combining category and names
    if (categoryName !== '' && inputValue !== '') {
      randomJokeEndpoint = `${jokeEndpoint}?limitTo=[${categoryName}]&firstName=${firstName}&lastName=${lastName}`
      setShouldJokeImageChange(true)
    }
    return randomJokeEndpoint
  }

  const fetchRandomJoke = async () => {
    const endpoint = getJokeEndpoint()
    const response = await fetch(endpoint)
    const randomJokeData = await response.json()
    setIsLoading(false)
    setRandomJokeData(randomJokeData.value)
  }

  useEffect(() => {
    fetchRandomJoke()
    fetchJokeCategory()
  }, [categoryName, inputValue])

  // Handling the select categories and impersonate jokes together
  const changeJoke = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      categories: { value: string }
      impersonate: { value: string }
    }
    const chosenCategory = target.categories.value
    setCategoryName(chosenCategory)
    const namesFromImpersonateInput = target.impersonate.value
    setInputValue(namesFromImpersonateInput)
    fetchRandomJoke()
  }

  // Allowing user to impersonate the joke through the input
  const handleImpersonateInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImpersonateInputValue(event.target.value)
  }

  //Changing numbers of jokes manually in the input
  const changeNumberOfJokes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnumberOfJokes(Number(event.target.value))
  }

  // Increment number of jokes to download
  const incrementJokeNumbers = () => {
    const currentNumOfJokes = numberOfJokes + 1
    setnumberOfJokes(currentNumOfJokes)
  }

  // Decrement number of jokes to download
  const decrementJokeNumbers = () => {
    const currentNumOfJokes = numberOfJokes - 1
    setnumberOfJokes(currentNumOfJokes)
  }

  // Fetch jokes to download
  const fetchMultipleJokes = async () => {
    if (numberOfJokes > 0 || numberOfJokes <= 100) {
      const jokeEndpoint = `${randomJokeEndpoint}/${numberOfJokes.toString()}`
      const response = await fetch(jokeEndpoint)
      const multipleJokes = await response.json()
      setIsLoading(false)
      setMultipleJokes(multipleJokes.value)
    }
  }

  useEffect(() => {
    fetchMultipleJokes()
  }, [numberOfJokes])

  // Download jokes with in txt file
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

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        randomJokeData,
        fetchJoke: fetchRandomJoke,
        listOfCategories,
        shouldJokeImageChange,
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
export { GlobalContext, initialValues, GlobalProvider }
