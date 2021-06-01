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

  .inputText:focus ~ .floating-label,
  .inputText:not(:focus):valid ~ .floating-label {
    font-family: Inter;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: -0.52px;
    text-align: left;
    top: 4px;
  }

  .floating-label {
    position: absolute;
    pointer-events: none;
    transition: 0.2s ease all;
    ${textStyles}
    display: block;
    left: 16px;
    top: 16px;
    color: #c4c4c4;
  }
`

export const DropDownContainer = styled.div`
  .dropdownOpen {
    border-bottom: transparent;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
    margin-bottom: 0;
  }

  span {
    ${textStyles}
    color: #c4c4c4;
  }
  .dropdownOpen ~ div {
    border-top-right-radius: unset;
    border-top-left-radius: unset;
  }

  &.selectOutlined .dropdownOpen {
    border: solid 2px #34394f;
    border-bottom: unset;
  }

  &.selectOutlined .dropdownClosed {
    border: solid 2px #34394f;
  }

  &.selectOutlined .dropdownOpen ~ div {
    border: solid 2px #34394f;
    border-top: unset;
  }

  .dropdownIcon,
  .arrowUpIcon {
    position: absolute;
    right: 7px;
  }

  .arrowUpIcon {
    transform: rotate(180deg);
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
  list-style: none;
  border-radius: 6px;

  &:hover {
    font-weight: 500;
    background-color: #e9e9e9;
    color: #34394f;
  }
`
export const Category = styled.a`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
`

export const InputImpersonate = styled.input`
  ${textStyles}
  ${baseInputStyles}
  margin-bottom: 32px;

  &:focus,
  &:not(:focus):valid {
    padding-top: 27px;
    padding-bottom: 0;
    border: solid 2px #34394f;
  }
`
export const DrawJokeButton = styled.button`
  ${textStyles}
  font-size: 14px;
  padding: 16px;
  font-weight: 600;
  border: solid 1px #34394f;
  border-radius: 6px;
  background-color: #34394f;
  color: #ffffff;
  @media (min-width: 1114px) {
    font-size: 16px;
    padding: 16.8px 93.4px 15.2px 93.4px;
  }
`
