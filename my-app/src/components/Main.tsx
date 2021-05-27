import React from 'react'
type Props = {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  fetchRandomJoke: () => {}
  handleSelectField: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: string
}

const MainScreenComponent: React.FC<Props> = ({
  randomJoke,
  fetchRandomJoke,
  handleSelectField,
  handleImpersonateInput,
  impersonateInputValue,
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
          onChange={handleSelectField}
          className='SelectCategories'
          name='Categories'
          id='joke_categories'>
          <option value='nerdy'>Nerdy</option>
          <option value='explicit'>Explicit</option>
        </select>
        <input
          type='text'
          value={impersonateInputValue}
          onChange={handleImpersonateInput}
          placeholder='Impersonate Chuck Norris'
        />
        <button
          type='button'
          className='DrawJokeButton'
          onClick={fetchRandomJoke}>
          {`Draw a random ${
            impersonateInputValue === ''
              ? 'Chuck Norris'
              : impersonateInputValue
          } Joke`}
        </button>
      </form>
    </main>
  )
}

export default MainScreenComponent
