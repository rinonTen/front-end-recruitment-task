import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Main, ContentContainer } from '../styleComponents/Main'
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
          <p>... Loading</p>
        </ContentContainer>
      )}
    </Main>
  )
}
