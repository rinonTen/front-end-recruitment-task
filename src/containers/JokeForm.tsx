import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import JokeControl from '../components/JokeForm'

export const JokeControlContainer = () => {
  const {
    changeJoke,
    listOfCategories,
    selectCategory,
    handleImpersonateInput,
    impersonateInputValue,
  } = useContext(GlobalContext)

  return (
    <JokeControl
      selectCategory={selectCategory}
      categoriesList={listOfCategories}
      changeJoke={changeJoke}
      handleImpersonateInput={handleImpersonateInput}
      impersonateInputValue={impersonateInputValue}
    />
  )
}
