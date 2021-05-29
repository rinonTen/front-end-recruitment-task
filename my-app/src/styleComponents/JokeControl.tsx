import styled, { css } from 'styled-components'
const textStyles = css`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
`
const baseInputStyles = css`
  padding: 16px;
  background-color: #ffffff;
  border: solid 2px #c4c4c4;
  border-radius: 6px;
`

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`
export const SelectCategories = styled.select`
  ${textStyles}
  ${baseInputStyles}
  margin-bottom: 16px;
`
export const InputImpersonate = styled.input`
  ${textStyles}
  ${baseInputStyles}
  margin-bottom: 32px;
`
export const DrawJokeButton = styled.button`
  ${textStyles}
  padding: 16.8px 93.4px 15.2px 93.4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #c4c4c4;
  border-radius: 6px;
  background-color: #34394f;
  color: #ffffff;
`
