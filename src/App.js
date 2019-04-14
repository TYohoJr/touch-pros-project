import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttons: null
    }
  }

  componentWillMount() {
    let data = require('./assets/1athletes.json');
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <img src={require('./assets/logo-sm.png')} alt='logo-sm' id='logo-sm' />
        <p className='text'>SELECT ACCOMPLISHMENT</p>
        {this.state.buttons}
      </div>
    );
  }
}

export default App;
