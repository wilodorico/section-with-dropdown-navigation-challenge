import { createGlobalStyle } from 'styled-components';
import {colors} from './colors'

const GlobalStyle = createGlobalStyle`

*, ::before, ::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-size: 16px;
      color: ${colors.almostBlack};
      background-color: ${colors.almostWhite};
      transition: 600ms;
   }

   li {
      list-style: none;
   }

   a {
      text-decoration: none;
      color: ${colors.mediumGray};
      transition: all 0.2s;
   }

   a:hover {
      color: ${colors.almostBlack}
   }
`;
 
export default GlobalStyle;
