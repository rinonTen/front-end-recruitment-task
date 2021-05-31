import styled, { css } from 'styled-components'

const buttonStyles = css`
  border-color: transparent;
  background-color: transparent;
  position: absolute;
  top: 16px;
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
  color: #34394f;
`

export const SaveJokeContainer = styled.div`
  position: relative;
  display: flex;
  column-gap: 8px;
  margin-top: 52px;
`

export const CountContainer = styled.div`
  flex-basis: 30%;
`
export const DecrementButton = styled.button`
  ${buttonStyles}
  left: 8px;
`
export const NumberOfJokesInput = styled.input`
  ${textStyles}
  width: 146px;
  height: 58px;
  border: none;
  border-radius: 6px;
  background-color: #f5f6f8;
  text-align: center;
`
export const IncrementButton = styled.button`
  ${buttonStyles}
  left: 105px;
`
export const SaveJokeButtonContainer = styled.div`
  width: 285px;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-basis: 64%;
  }
`
export const SaveButton = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: left;
  color: #34394f;
  border-color: transparent;
  border-radius: 6px;
  background-color: #f5f6f8;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 17px;
`
