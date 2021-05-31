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
  position: relative;
  display: flex;
  flex-direction: column;

  .drawBtnMoved {
    margin-top: 8px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  span {
    ${textStyles}
    display: block;
    position: absolute;
    left: 16px;
    top: 16px;
    color: #c4c4c4;
  }

  input:focus {
    padding-top: 27px;
    padding-bottom: 0;
  }

  input:focus ~ span {
    margin: 0 0 5px;
    font-family: Inter;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: -0.52px;
    text-align: left;
    top: 0;
  }
`

export const DropDownContainer = styled.div`
  .dropdownOpen {
    border-bottom: transparent;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
    margin-bottom: 0;
  }

  .dropdownOpen ~ div {
    border-top-right-radius: unset;
    border-top-left-radius: unset;
  }
`

export const DropDownHeader = styled.div`
  ${textStyles}
  ${baseInputStyles}
  margin-bottom: 16px;
`

export const DropDownListContainer = styled.div`
  background-color: #ffffff;
  border: solid 2px #c4c4c4;
  border-radius: 6px;
  border-top: transparent;
  margin-bottom: 16px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
`

export const DropDownList = styled.ul`
  margin: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
`

export const ListItem = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  border-radius: 6px;
  list-style: none;

  &:hover {
    background-color: #e9e9e9;
  }
`

export const InputImpersonate = styled.input`
  ${textStyles}
  ${baseInputStyles}
  margin-bottom: 32px;
`
export const DrawJokeButton = styled.button`
  ${textStyles}
  font-size: 14px;
  padding: 16px;
  border: solid 1px #34394f;
  border-radius: 6px;
  background-color: #34394f;
  color: #ffffff;
  @media (min-width: 1114px) {
    font-size: 16px;
    padding: 16.8px 93.4px 15.2px 93.4px;
  }
`
