import React from 'react'
import {
  Section,
  ImageContainer,
  Image,
  JokeContainer,
  JokeText,
} from '../styleComponents/Joke'
type Props = {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  shouldJokeImageChange: boolean
}

const Joke: React.FC<Props> = ({ randomJoke, shouldJokeImageChange }) => {
  const imageFile: string = !shouldJokeImageChange
    ? 'ChuckNorrisPhoto.png'
    : 'RandomPhoto.png'

  return (
    <Section>
      <ImageContainer>
        <Image src={`./assets/${imageFile}`} alt='' />
      </ImageContainer>
      <JokeContainer>
        <JokeText
          dangerouslySetInnerHTML={{ __html: randomJoke.joke }}></JokeText>
      </JokeContainer>
    </Section>
  )
}

export default Joke
