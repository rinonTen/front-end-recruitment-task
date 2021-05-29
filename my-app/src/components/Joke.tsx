import React from 'react'
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
    <section>
      <div className='ImageConatainer'>
        <img className='Image' src={`./assets/${imageFile}`} alt='' />
      </div>
      <article className='JokeContainer'>
        <p className='JokeText'>{randomJoke.joke}</p>
      </article>
    </section>
  )
}

export default Joke
