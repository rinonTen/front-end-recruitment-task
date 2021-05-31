interface ProviderNames {
  isLoading: boolean
  randomJokeData: {
    id: number
    joke: string
    categories: string[]
  }
  fetchJoke: () => {}
  listOfCategories: string[]
  shouldJokeImageChange: boolean
  changeJoke: any
  impersonateInputValue: string
  handleImpersonateInput: any
  changeNumberOfJokes: any
  numberOfJokes: number
  incrementJokeNumbers: any
  decrementJokeNumbers: any
  downloadTxtFile: any
}

export const initialValues: ProviderNames = {
  isLoading: true,
  randomJokeData: {
    id: 2,
    joke: '',
    categories: [],
  },
  fetchJoke: async () => {},
  listOfCategories: [],
  shouldJokeImageChange: false,
  changeJoke: () => {},
  impersonateInputValue: '',
  handleImpersonateInput: () => {},
  numberOfJokes: 0,
  changeNumberOfJokes: () => {},
  incrementJokeNumbers: () => {},
  decrementJokeNumbers: () => {},
  downloadTxtFile: () => {},
}
