import React from 'react'
type Props = {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  fetchRandomJoke: () => {}
}

const MainScreenComponent: React.FC<Props> = ({
  randomJoke,
  fetchRandomJoke,
}) => {
  return (
    <main>
      <div className='ImageConatainer'>
        <img className='Image' src='' alt='' />
      </div>
      <article className='JokeContainer'>
        <p className='JokeText'>{randomJoke.joke}</p>
      </article>
      <form className='Form'>
        <select
          className='SelectCategories'
          name='Categories'
          id='joke_categories'>
          <option value='Nerdy'>Nerdy</option>
          <option value='Explicit'>Explicit</option>
        </select>
        <input type='text' value='' placeholder='Impersonate Chuck Norris' />
        <button
          type='button'
          className='DrawJokeButton'
          onClick={fetchRandomJoke}>
          Draw a random Chuck Norris Joke
        </button>
      </form>
    </main>
  )
}

export default MainScreenComponent
