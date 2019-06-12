import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  html, body {
    min-height: 450px;
    height: 100%
  }

  body {
    background: #efefef;
    font: 14px 'Inconsolata', Monaco, monospace;
    color: #fff
  }

  @media (max-width: 1024px) {
    body {
      background: url('./resources/poster.png') 50% no-repeat;
      background-size: cover
    }
  }

  a {
    color: #fff;
    transition: .1s ease-out;
    transition-property: color, background, opacity, border;
    will-change: color, background, opacity, border
  }

  a:hover, a:active {
    color: #4affff
  }
`
