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

    .leaflet-tooltip {
        font-family: 'Lato', sans-serif;
        padding: 3px;
        background-color: ${colors.black};
        color: ${colors.white};
        border: none;
    }

    .leaflet-tooltip::before {
        content: none;
    }

    .leaflet-tooltip-bottom {
        margin-top: 1px;
    }

/* =========Sidebar Styles============ */

/* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

/* Color/shape of close button cross */
    .bm-cross {
      background: ${colors.gray};
    }
/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
      margin-left: 75px;
    }

/* General sidebar styles */
    .bm-menu {
      background: ${colors.black};
      padding: 2.5em 1.5em 0;
      font-size: 16px;
    }

/* Wrapper for item list */
    .bm-item-list {
      color: ${colors.white};
      padding: 8px;
    }

/* Individual item */
    .bm-item {
      display: inline-block;
    }
`

export default GlobalStyle;

