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
  return (
    <Section>
      <SaveJokeContainer>
        <CountContainer>
          <DecrementButton type='button' onClick={decrementJokeNumbers}>
            <img src={MinusIcon} alt='Minus icon for incrementing the number' />
          </DecrementButton>
          <NumberOfJokesInput
            type='text'
            value={numberOfJokes}
            name='numberOfJoke'
            onChange={changeNumberOfJokes}
          />
          <IncrementButton type='button' onClick={incrementJokeNumbers}>
            <img src={PlusIcon} alt='Plus icon for incrementing the number' />
          </IncrementButton>
        </CountContainer>
        <SaveJokeButtonContainer onClick={downloadTxtFile}>
          <SaveButton type='button'>Save</SaveButton>
        </SaveJokeButtonContainer>
        {numberOfJokes < 0 || numberOfJokes > 100 ? (
          <p className='ErrorMessage'>You can pick a number from 1 to 100.</p>
        ) : null}
      </SaveJokeContainer>
    </Section>
  )
}

export default SaveJokes
