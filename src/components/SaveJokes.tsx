import React from 'react'
import { Section } from '../styleComponents/Joke'
import {
  SaveJokeContainer,
  CountContainer,
  DecrementButton,
  NumberOfJokesInput,
  IncrementButton,
  SaveJokeButtonContainer,
  SaveButton,
  ErrorMessage,
} from '../styleComponents/SaveJokes'
import PlusIcon from '../assets/plus.svg'
import MinusIcon from '../assets/minus.svg'

type Props = {
  changeNumberOfJokes: () => {}
  numberOfJokes: number
  incrementJokeNumbers: () => {}
  decrementJokeNumbers: () => {}
  downloadTxtFile: () => {}
}

const SaveJokes: React.FC<Props> = ({
  changeNumberOfJokes,
  numberOfJokes,
  incrementJokeNumbers,
  decrementJokeNumbers,
  downloadTxtFile,
}) => {
  const showError = numberOfJokes < 0 || numberOfJokes > 100
  return (
    <Section>
      <SaveJokeContainer>
        <CountContainer className={showError ? 'error' : 'countContainer'}>
          <DecrementButton type='button' onClick={decrementJokeNumbers}>
            <img src={MinusIcon} alt='Minus icon for incrementing the number' />
          </DecrementButton>
          <NumberOfJokesInput
            type='number'
            value={numberOfJokes}
            name='numberOfJoke'
            onChange={changeNumberOfJokes}
          />
          <IncrementButton type='button' onClick={incrementJokeNumbers}>
            <img src={PlusIcon} alt='Plus icon for incrementing the number' />
          </IncrementButton>
        </CountContainer>
        <SaveJokeButtonContainer onClick={downloadTxtFile}>
          <SaveButton
            type='button'
            className={
              numberOfJokes && !showError ? 'saveBtn dark' : 'saveBtn'
            }>
            Save Jokes
          </SaveButton>
        </SaveJokeButtonContainer>
        {showError ? (
          <ErrorMessage>You can pick a number from 1 to 100.</ErrorMessage>
        ) : null}
      </SaveJokeContainer>
    </Section>
  )
}

export default SaveJokes
