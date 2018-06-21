import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
      <header className="s-header">
        <div className="header-logo">
            <a href="index.html">
                <div className="pixel54-logo">
                <h1>pixel54.</h1>
            </div>
            </a>
        </div>
          <Nav/>
        <a className="header-menu-toggle" href="#0">
            <span className="header-menu-text">Menu</span>
            <span className="header-menu-icon"></span>
        </a>
    </header>
</div>

    );
  }
}

export default App;
