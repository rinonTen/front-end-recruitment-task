import React, { useState } from 'react'
import { Section } from '../styleComponents/Joke'
import {
  Form,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  InputContainer,
  InputImpersonate,
  DrawJokeButton,
} from '../styleComponents/JokeControl'

type Props = {
  categoriesList: string[]
  changeJoke: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: string
}

const JokeControl: React.FC<Props> = ({
  categoriesList,
  changeJoke,
  handleImpersonateInput,
  impersonateInputValue,
}) => {
  const [isSelectOptionOpen, setIsSelectOptionOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState('')
  const toggling = () => setIsSelectOptionOpen(!isSelectOptionOpen)
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsSelectOptionOpen(false)
  }

  return (
    <Section>
      <Form onSubmit={changeJoke}>
        <DropDownContainer>
          <DropDownHeader
            onClick={toggling}
            className={isSelectOptionOpen ? 'dropdownOpen' : 'dropdownClosed'}>
            {isSelectOptionOpen
              ? 'Select a category'
              : selectedOption || 'Select a category'}
          </DropDownHeader>
          {isSelectOptionOpen && (
            <DropDownListContainer>
              <DropDownList>
                {categoriesList.map((category) => (
                  <ListItem
                    data-name='categories'
                    onClick={onOptionClicked(category)}
                    key={Math.random()}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

        <InputContainer>
          <InputImpersonate
            name='impersonate'
            type='text'
            value={impersonateInputValue}
            onChange={handleImpersonateInput}
            // placeholder='Impersonate Chuck Norris'
          />
          <span>Impersonate Chuck Norris</span>
        </InputContainer>
        <DrawJokeButton
          className={isSelectOptionOpen ? 'drawBtnMoved' : 'drawBtn'}>
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
