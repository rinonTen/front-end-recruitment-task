import React from 'react'
type Props = {
  shouldJokeImageChange: boolean
  changeNumberOfJokes: () => {}
  numberOfJokes: number
  incrementJokeNumbers: () => {}
  decrementJokeNumbers: () => {}
  downloadTxtFile: () => {}
}

const SaveJokes: React.FC<Props> = ({
  shouldJokeImageChange,
  changeNumberOfJokes,
  numberOfJokes,
  incrementJokeNumbers,
  decrementJokeNumbers,
  downloadTxtFile,
}) => {
  const imageFile: string = !shouldJokeImageChange
    ? 'ChuckNorrisPhoto.png'
    : 'RandomPhoto.png'

  return (
    <section>
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
    </section>
  )
}

export default SaveJokes
