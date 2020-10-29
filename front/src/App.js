// src/App.js

import React, { Component } from 'react';
import FirstApp from './components/FirstApp';
import SecondApp from './components/SecondApp';
class App extends Component {
 


  render() {
    return (
      <div >
        <FirstApp/>
        <SecondApp/>
      </div>
    );
  }
}

export default App;