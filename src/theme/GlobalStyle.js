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
   }

   li {
      list-style: none;
   }
`;
 
export default GlobalStyle;
