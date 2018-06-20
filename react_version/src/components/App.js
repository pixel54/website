import React, { Component } from 'react';
import GlobalFunctions from './GlobalFunctions';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <GlobalFunctions/>
      </div>
    );

  }
}

export default App;
