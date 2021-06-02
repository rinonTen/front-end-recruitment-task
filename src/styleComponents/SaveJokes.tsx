import styled, { css } from 'styled-components'
const redError = '#f39a9a'
const gray = '#f5f6f8'
const dark = '#34394f'
const white = '#ffffff'

const buttonStyles = css`
  border-color: transparent;
  background-color: transparent;
`

const textStyles = css`
  font-family: Inter;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.52px;
  text-align: left;
  color: ${dark};
`

export const SaveJokeContainer = styled.div`
  display: grid;
  margin-top: 52px;

  .error,
  .error input {
    background-color: ${redError};
  }

  @media (min-width: 350px) {
    grid-template-columns: 45%;
    grid-template-columns: 45%;
    column-gap: 8px;
  }

  @media (min-width: 500px) {
    grid-template-columns: 33% 64%;
  }
`
export const CountContainer = styled.div`
  max-width: 100%;
  min-width: 120px;
  display: flex;
  grid-column: 1;
  border-radius: 6px;
  background-color: ${gray};
  padding-left: 8px;
  padding-right: 8px;
  justify-content: space-between;
`
export const DecrementButton = styled.button`
  ${buttonStyles}
`
export const NumberOfJokesInput = styled.input`
  ${textStyles}
  max-width: 25%;
  height: 58px;
  border: none;
  text-align: center;
  background-color: ${gray};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: none;
  }
`
export const IncrementButton = styled.button`
  ${buttonStyles}
`
export const SaveJokeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  align-items: flex-end;

  @media (min-width: 385px) {
    align-items: unset;
  }
  @media (min-width: 1114px) {
    width: 285px;
  }
`
export const SaveButton = styled.button`
  max-width: 71%;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: left;
  color: ${dark};
  border-color: transparent;
  border-radius: 6px;
  background-color: ${gray};
  text-align: center;
  padding-top: 15px;
  padding-bottom: 17px;

  &.saveBtn.dark {
    background-color: ${dark};
    color: ${white};
  }

  @media (min-width: 385px) {
    max-width: unset;
  }
`

export const ErrorMessage = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  bottom: 0;
  margin-top: 12px;
  margin-bottom: 0;
  opacity: 0.6;
  color: ${redError};
  grid-column: 1/3;

  @media (min-width: 1114px) {
    font-size: 16px;
    margin-bottom: -43px;
  }
`
