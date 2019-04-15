import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      buttons: null
    }
  }

  componentWillMount() {
    let data = require('./assets/1athletes.json');
    this.setState({
      buttons: data[0].Sports.map((item, i) => {
        return <Button key={i} className='sport-data-title-btn' onClick={() => console.log(item.SportData.Title)}>{item.SportData.Title.toUpperCase()}</Button>
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img src={require('./assets/logo-sm.png')} alt='logo-sm' id='logo-sm' />
        <p className='text' id='header-text'>SELECT ACCOMPLISHMENT:</p>
        <div id='btns-container'>
          {this.state.buttons}
        </div>
        <footer>
          <div className='text' id='footer-page-navigation'>HOME <span id='footer-text-divider'>></span> WRESTLERS</div>
          <div id='footer-touchpros'>TouchWall by TouchPros.com</div>
        </footer>
      </div>
    );
  }
}
