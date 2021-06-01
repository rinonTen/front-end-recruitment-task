import React, { useState } from 'react'
import { Section } from '../styleComponents/Joke'
import IconsInterfaceCaretDown from '../assets/IconsInterfaceCaretDown.svg'
import arrowDownSign from '../assets/arrowdownSignDark.svg'
import arrowDownSignGray from '../assets/arrowdownSignGray.svg'

import {
  Form,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Category,
  InputContainer,
  InputImpersonate,
  DrawJokeButton,
} from '../styleComponents/JokeControl'

type Props = {
  categoriesList: string[]
  changeJoke: () => {}
  selectCategory: () => {}
  handleImpersonateInput: () => {}
  impersonateInputValue: string
}

const JokeControl: React.FC<Props> = ({
  categoriesList,
  changeJoke,
  selectCategory,
  handleImpersonateInput,
  impersonateInputValue,
}) => {
  const [isSelectOptionOpen, setIsSelectOptionOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isSelectDefaultValue, setIsDefaultSelectValue] =
    useState<boolean>(true)

  const toggling = () => setIsSelectOptionOpen(!isSelectOptionOpen)
  const onOptionClicked = (category: string) => () => {
    setSelectedOption(category)
    setIsSelectOptionOpen(false)
  }
  // Capitalize the first letter in category name
  const categoryNameCapitalized = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  // This is for the options in dropdown select
  const categoriesListElements = categoriesList.map((category) => (
    <ListItem key={Math.random()} onClick={onOptionClicked(category)}>
      <Category id={category} onClick={selectCategory}>
        {categoryNameCapitalized(category)}
      </Category>
    </ListItem>
  ))

  return (
    <Section>
      <Form>
        <DropDownContainer
          onClick={() => setIsDefaultSelectValue(false)}
          className={
            isSelectOptionOpen || selectedOption !== ''
              ? 'selectOutlined'
              : 'select'
          }>
          <DropDownHeader
            onClick={toggling}
            className={isSelectOptionOpen ? 'dropdownOpen' : 'dropdownClosed'}>
            <span className={selectedOption === '' ? 'selectText' : 'category'}>
              {isSelectDefaultValue
                ? 'Categories'
                : isSelectOptionOpen
                ? 'Select a category'
                : categoryNameCapitalized(selectedOption) || 'Categories'}
            </span>
            <img
              className={isSelectOptionOpen ? 'arrowUpIcon' : 'dropdownIcon'}
              src={
                isSelectOptionOpen
                  ? arrowDownSignGray
                  : selectedOption !== ''
                  ? arrowDownSign
                  : IconsInterfaceCaretDown
              }
              alt='dropdown icon'
            />
          </DropDownHeader>
          {isSelectOptionOpen && (
            <DropDownListContainer>
              <DropDownList>{categoriesListElements}</DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

        <InputContainer>
          <InputImpersonate
            className='inputText'
            autoComplete='off'
            name='impersonate'
            type='text'
            value={impersonateInputValue}
            onChange={handleImpersonateInput}
            required
          />
          <span className='floating-label'> Impersonate Chuck Norris</span>
        </InputContainer>
        <DrawJokeButton
          type='button'
          onClick={changeJoke}
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
