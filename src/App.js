import React, { Component } from 'react';
import LeafletMap from './components/LeafletMap';
import GlobalStyle from './theme/globalStyle';




class App extends Component {

  render() {
    return (
      <>
      <GlobalStyle />
      <LeafletMap />
      </>
    )
  }
}


export default App;
