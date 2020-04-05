import { createGlobalStyle } from 'styled-components';

const reset = `
  /* stylelint-disable */

  /* http://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    max-width: 1460px;
    padding: 0 30px;
    margin: 0 auto;

    font-family: 'PT Serif', Times, serif;
    font-size: 20px;
    line-height: 1.5;
    font-style: normal;
    color: rgba(0, 0, 0, .87);
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #428bca;
    background-image: linear-gradient(rgba(66, 139, 202, .13), rgba(66, 139, 202, .13));
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 100% 1px;
    background-position: 0 100%;

    &:active, &:hover, &:focus {
      color: rgb(255, 0, 0);
      background-image: linear-gradient(rgba(255, 0, 0, .13), rgba(255, 0, 0, .13));
    }

     &:not(.always-fresh):visited {
      color: rgb(146, 54, 149);
      background-image: linear-gradient(rgba(146, 54, 149, .13), rgba(146, 54, 149, .13))

    } 
  }

  strong, b, h1, h2 {
    font-weight: 600;
  }
  strong, b, h1, h2, .sans-serif {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  i, em {
    font-style: italic;
  }

  h1 {
    margin: 60px 0 10px;
    font-size: 34px;
    line-height: 40px;
  }

  h2 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin: 70px 0 0;
  }

  p {
    margin-top: 20px;
  }

  ul {
    margin: 0 0 10px;
    padding-left: 45px;

    li {
      margin-bottom: 10px;
    }
  }
`;