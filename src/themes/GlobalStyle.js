// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './index';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-family: ${typography.fonts.base};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
