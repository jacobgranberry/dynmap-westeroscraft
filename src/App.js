import React, { Component } from 'react';
import LeafletMap from './components/LeafletMap';
import GlobalStyle from './theme/globalStyle';
// import ControlPanel from './components/ControlPanel';




class App extends Component {

  render() {
    return (
      <>
      <GlobalStyle />
      {/* <ControlPanel /> */}
      <LeafletMap />
      </>
    )
  }
}


export default App;
