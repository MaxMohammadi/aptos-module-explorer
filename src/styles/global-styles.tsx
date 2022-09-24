import { createGlobalStyle } from 'styled-components'
import { cream, jetBlack, tiffany } from './colors'
import { fontFamily, fontFamilyHeading, fontWeightRegular } from './fonts'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    overflow-y: overlay;
  }
  body {
    height: 100%;
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: ${fontWeightRegular};
    line-height: 1.25;
    background-color: ${jetBlack};
    color: ${cream};
    h1, h2 {
      font-family: ${fontFamilyHeading};
    }
    a, button {
      :enabled:hover,
      :enabled:focus {
        color: ${tiffany};
      }
    }
    input {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > div#__next {
      height: 100%;
      display: flex;
      flex-flow: column;
      main {
        flex: 1;
      }
    }
  }
`
