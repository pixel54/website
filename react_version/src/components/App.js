import React, { Component } from 'react';
import '../css/base.css';
import '../css/vendor.css';
import '../css/main.css';
import { Switch, Route } from 'react-router-dom'
import MainIndexComps from './MainIndexComps';
import ThankYou from './ThankYou';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainIndexComps} />
        <Route exact path='/thankyou' component={ThankYou} />
      </Switch>
    );

  }
}

export default App;
