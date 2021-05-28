import React from 'react'
type Props = {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  fetchRandomJoke: () => {}
  categoriesList: string[]
  changeJoke: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: string
  changeNumberOfJokes: () => {}
  numberOfJokes: number
  incrementJokeNumbers: () => {}
  decrementJokeNumbers: () => {}
  downloadTxtFile: () => {}
}

const MainScreenComponent: React.FC<Props> = ({
  randomJoke,
  fetchRandomJoke,
  categoriesList,
  changeJoke,
  handleImpersonateInput,
  impersonateInputValue,
  changeNumberOfJokes,
  numberOfJokes,
  incrementJokeNumbers,
  decrementJokeNumbers,
  downloadTxtFile,
}) => {
  return (
    <main>
      <div className='ImageConatainer'>
        <img className='Image' src='./assets/ChuckNorrisPhoto.png' alt='' />
      </div>
      <article className='JokeContainer'>
        <p className='JokeText'>{randomJoke.joke}</p>
      </article>
      <form className='Form' onSubmit={changeJoke}>
        <select
          className='SelectCategories'
          name='categories'
          id='joke_categories'>
          <option value=''>Select a category</option>
          {categoriesList.map((category) => {
            return (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            )
          })}
        </select>
        <input
          name='impersonate'
          type='text'
          value={impersonateInputValue}
          onChange={handleImpersonateInput}
          placeholder='Impersonate Chuck Norris'
        />
        <button className='DrawJokeButton' onClick={fetchRandomJoke}>
          {`Draw a random ${
            impersonateInputValue === ''
              ? 'Chuck Norris'
              : impersonateInputValue
          } Joke`}
        </button>
      </form>
      <div className='SaveJokeContainer'>
        <button type='button' onClick={decrementJokeNumbers}>
          -
        </button>
        <input
          type='text'
          value={numberOfJokes}
          name='numberOfJoke'
          onChange={changeNumberOfJokes}
        />
        <button type='button' onClick={incrementJokeNumbers}>
          +
        </button>
        <div className='SaveJokeButtonContainer' onClick={downloadTxtFile}>
          <button className='SaveButton' type='button'>
            Save
          </button>
        </div>
        {numberOfJokes < 0 || numberOfJokes > 100 ? (
          <p className='ErrorMessage'>You can pick a number from 1 to 100.</p>
        ) : null}
      </div>
    </main>
  )
}

export default MainScreenComponent
