import React, { useContext } from 'react'
import Joke from '../components/Joke'
import JokeControl from '../components/JokeControl'
import { GlobalContext } from '../context/GlobalState'
import SaveJokes from '../components/SaveJokes'

export const MainScreen = () => {
  const {
    isLoading,
    randomJokeData,
    fetchJoke,
    changeJoke,
    shouldJokeImageChange,
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
        <main>
          <Joke
            randomJoke={randomJokeData}
            shouldJokeImageChange={shouldJokeImageChange}
          />
          <JokeControl
            fetchRandomJoke={fetchJoke}
            categoriesList={listOfCategories}
            changeJoke={changeJoke}
            handleImpersonateInput={handleImpersonateInput}
            impersonateInputValue={impersonateInputValue}
          />
          <SaveJokes
            shouldJokeImageChange={shouldJokeImageChange}
            changeNumberOfJokes={changeNumberOfJokes}
            numberOfJokes={numberOfJokes}
            incrementJokeNumbers={incrementJokeNumbers}
            decrementJokeNumbers={decrementJokeNumbers}
            downloadTxtFile={downloadTxtFile}
          />
        </main>
      )}
    </div>
  )
}
