import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe,
         faLayerGroup,
         faUser,
         faStreetView,
         faSearch,
         faComment,
         faCheck,
         faAngleDown,
         faAngleUp,
         faMap,
         faDiceD6,
         faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';

require('typeface-lato');

library.add( faGlobe,
    faLayerGroup,
    faUser,
    faStreetView,
    faSearch,
    faComment,
    faCheck,
    faAngleDown,
    faAngleUp,
    faMap,
    faDiceD6,
    faDiceD20 );


ReactDOM.render(<App />, document.getElementById('root'));