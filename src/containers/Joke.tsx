import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Joke from '../components/Joke'

export const JokeContainer = () => {
  const { randomJokeData, shouldJokeImageChange } = useContext(GlobalContext)

  return (
    <Joke
      randomJoke={randomJokeData}
      shouldJokeImageChange={shouldJokeImageChange}
    />
  )
}
