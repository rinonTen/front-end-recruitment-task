import React from 'react'
import { Section } from '../styleComponents/Joke'
import {
  Form,
  SelectCategories,
  InputImpersonate,
  DrawJokeButton,
} from '../styleComponents/JokeControl'

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
    <Section>
      <Form onSubmit={changeJoke}>
        <SelectCategories
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
        </SelectCategories>
        <InputImpersonate
          name='impersonate'
          type='text'
          value={impersonateInputValue}
          onChange={handleImpersonateInput}
          placeholder='Impersonate Chuck Norris'
        />
        <DrawJokeButton>
          {`Draw a random ${
            impersonateInputValue === ''
              ? 'Chuck Norris'
              : impersonateInputValue
          } Joke`}
        </DrawJokeButton>
      </Form>
    </Section>
  )
}

export default JokeControl
