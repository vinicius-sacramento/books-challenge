import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    line-height: 1;
    color: black;
    background-color:#ffe207;
    color: #2C2605;
    font-family: roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, cite, code,
  em, img, small, strong, b, u, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, section,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  blockquote, q {
    quotes: none;
  }
  button, input, a, textarea {
    outline: none;
    color: inherit;
    font-family: inherit;
  }
  address {
    font-style: normal;
  }
`;
