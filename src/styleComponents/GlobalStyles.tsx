import { createGlobalStyle } from 'styled-components'
import { mainBgColor } from './colors'

export const GlobalStyle = createGlobalStyle`
 html, body {
        background-color: ${mainBgColor};
        font-family: Inter;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal
  }

  button {
        cursor: pointer;
  }
`
