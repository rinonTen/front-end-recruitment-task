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
  listOfCategories: string[]
  handleImpersonateInput: () => {}
  impersonateInputValue: ''
  downloadTxtFile: () => {}
  changeNumberOfJokes: () => {}
  numberOfJokes: number
  incrementJokeNumbers: () => {}
  decrementJokeNumbers: () => {}
}

export const MainScreen = () => {
  const {
    isLoading,
    randomJokeData,
    fetchJoke,
    changeJoke,
    listOfCategories,
    handleImpersonateInput,
    impersonateInputValue,
    downloadTxtFile,
    changeNumberOfJokes,
    numberOfJokes,
    incrementJokeNumbers,
    decrementJokeNumbers,
  } = useContext(GlobalContext)

  return (
    <div>
      {isLoading && (
        <MainScreenComponent
          randomJoke={randomJokeData}
          fetchRandomJoke={fetchJoke}
          changeJoke={changeJoke}
          handleImpersonateInput={handleImpersonateInput}
          impersonateInputValue={impersonateInputValue}
          categoriesList={listOfCategories}
          changeNumberOfJokes={changeNumberOfJokes}
          numberOfJokes={numberOfJokes}
          incrementJokeNumbers={incrementJokeNumbers}
          decrementJokeNumbers={decrementJokeNumbers}
          downloadTxtFile={downloadTxtFile}
        />
      )}
    </div>
  )
}
