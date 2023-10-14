import { createGlobalStyle } from 'styled-components';
import { defaultStyle } from './defaultStyles';
import { styledFonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${defaultStyle}
  ${styledFonts}
`;
