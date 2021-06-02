import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import SaveJokes from '../components/SaveJokes'

export const SaveJokesContainer = () => {
  const {
    downloadTxtFile,
    changeNumberOfJokes,
    numberOfJokes,
    incrementJokeNumbers,
    decrementJokeNumbers,
  } = useContext(GlobalContext)

  return (
    <SaveJokes
      changeNumberOfJokes={changeNumberOfJokes}
      numberOfJokes={numberOfJokes}
      incrementJokeNumbers={incrementJokeNumbers}
      decrementJokeNumbers={decrementJokeNumbers}
      downloadTxtFile={downloadTxtFile}
    />
  )
}
