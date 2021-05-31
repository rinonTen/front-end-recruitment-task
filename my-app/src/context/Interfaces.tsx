export interface ProviderNames {
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
