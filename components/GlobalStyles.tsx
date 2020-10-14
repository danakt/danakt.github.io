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

    @media (max-width: 590px) {
      font-size: 17px;
      padding: 0 15px;
    }

    @media (prefers-color-scheme: dark) {
      background: #121212;
      color: #fff;
    }
  }

  a {
    text-decoration: none;
    background: 0 100% repeat-x;
    background-size: 100% 1px;

    &:visited {
      color: rgb(146, 54, 149);
      background-image: linear-gradient(rgba(146, 54, 149, .13), rgba(146, 54, 149, .13));

      @media (prefers-color-scheme: dark) {
        background-image: linear-gradient(rgba(146, 54, 149, .3), rgba(146, 54, 149, .3));
      }
    }

    &, &.always-fresh {
      color: #428bca;
      background-image: linear-gradient(rgba(66, 139, 202, .13), rgba(66, 139, 202, .13));

      @media (prefers-color-scheme: dark) {
        color: #5aa6e7;
        background-image: linear-gradient(rgba(90, 166, 231, .3), rgba(90, 166, 231, .3));
      }

      &:active, &:hover, &:focus {
        color: rgb(255, 0, 0);
        background-image: linear-gradient(rgba(255, 0, 0, .13), rgba(255, 0, 0, .13));

        @media (prefers-color-scheme: dark) {
          background-image: linear-gradient(rgba(255, 0, 0, .3), rgba(255, 0, 0, .3));
        }
      }
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

  p {
    margin-top: 20px;

    &.lead {
      font-size: 28px;
      line-height: 35px;
      margin-bottom: 15px;
    }
  }

  ul {
    margin: 20px 0 10px;
    padding-left: 45px;

    li {
      margin-bottom: 10px;

      @media (max-width: 590px) {
        margin-bottom: 5px;
      }

      &::before {
        content: "— ";
        position: relative;
        left: -6px;
        margin-left: -21px;
        display: inline-block;
        vertical-align: top;
        margin-right: 0px;
      }
    }
  }
`;
