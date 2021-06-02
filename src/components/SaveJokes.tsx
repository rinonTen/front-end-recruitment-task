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
  const shouldCountButtonStylesChange =
    numberOfJokes > 0 && numberOfJokes <= 100

  return (
    <Section>
      <SaveJokeContainer>
        <CountContainer className={showError ? 'error' : 'countContainer'}>
          <DecrementButton
            className={
              shouldCountButtonStylesChange
                ? 'shouldCountButtonStylesChange btnChanged'
                : 'countButton'
            }
            type='button'
            onClick={decrementJokeNumbers}>
            <span className='minisIcon'>-</span>
          </DecrementButton>
          <NumberOfJokesInput
            type='number'
            value={numberOfJokes}
            name='numberOfJoke'
            onChange={changeNumberOfJokes}
          />
          <IncrementButton
            className={
              shouldCountButtonStylesChange
                ? 'shouldCountButtonStylesChange btnChanged'
                : 'countButton'
            }
            type='button'
            onClick={incrementJokeNumbers}>
            <span className='plusIcon'>+</span>
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
