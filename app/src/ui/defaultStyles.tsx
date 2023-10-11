import { css } from 'styled-components';
import { FONTS, COLORS } from './variables';

export const defaultStyle = css`
  * {
    box-sizing: border-box;
    font-family: ${FONTS.LATO} !important;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${COLORS.GRAY};
    box-sizing: border-box;
    margin: 0;
    overflow: auto !important;
    padding: 0 !important;
  }
`;
