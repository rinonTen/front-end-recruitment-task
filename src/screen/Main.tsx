import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {
  Main,
  ContentContainer,
  LoadingContainer,
  LoadingText,
} from '../styleComponents/Main'
import { JokeContainer } from '../containers/Joke'
import { JokeControlContainer } from '../containers/JokeForm'
import { SaveJokesContainer } from '../containers/SaveJokes'

export const MainScreen = () => {
  const { isLoading } = useContext(GlobalContext)

  return (
    <Main>
      {!isLoading ? (
        <ContentContainer>
          <JokeContainer />
          <JokeControlContainer />
          <SaveJokesContainer />
        </ContentContainer>
      ) : (
        <ContentContainer>
          <LoadingContainer>
            <LoadingText>... The app is still loading</LoadingText>
          </LoadingContainer>
        </ContentContainer>
      )}
    </Main>
  )
}
