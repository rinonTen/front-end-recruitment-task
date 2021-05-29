import React from 'react'
type Props = {
  fetchRandomJoke: () => {}
  categoriesList: string[]
  changeJoke: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: string
}

const JokeControl: React.FC<Props> = ({
  fetchRandomJoke,
  categoriesList,
  changeJoke,
  handleImpersonateInput,
  impersonateInputValue,
}) => {
  return (
    <section>
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
    </section>
  )
}

export default JokeControl
