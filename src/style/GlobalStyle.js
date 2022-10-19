import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video , input {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
      display: block;
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

   .App{
      display: flex;

      width: 100vw;
      min-height: 100vh;
      height: 100%;
      
      background-color: #c1dbe3;

   }
   *::-webkit-scrollbar {
      width: 10px;
   }

   *::-webkit-scrollbar-track {
      background: #ffffff;
   }

   *::-webkit-scrollbar-thumb {
      background-color: #63bfdc;
      border-radius: 10px;
      border: 2px solid #ffffff;
   }
`
