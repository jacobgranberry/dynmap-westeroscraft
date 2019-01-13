import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: ${colors.main};
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
    }

    .leaflet-container {
        height: 1080px;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
    }
`

export default GlobalStyle;

