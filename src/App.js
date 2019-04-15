import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

export default class App extends Component {
  constructor() {
    super();
    this.goToHome = this.goToHome.bind(this);
    this.goToWrestlers = this.goToWrestlers.bind(this);
    this.goToAccomplishment = this.goToAccomplishment.bind(this);
    this.state = {
      buttons: null,
      data: null
    }
  }

  goToHome(e) {
    console.log(e.target.innerHTML);
  }

  goToWrestlers(e) {
    console.log(e.target.innerHTML);
  }

  goToAccomplishment(e) {
    console.log(e.target.innerHTML)
  }

  // Map the array of button titles from the local JOSN file into bootstrap buttons when the component mounts
  componentWillMount() {
    let data = require('./assets/1athletes.json');
    this.setState({
      buttons: data[0].Sports.map((item, i) => {
        return <Button key={i} className='sport-data-title-btn' onClick={this.goToAccomplishment}>{item.SportData.Title.toUpperCase()}</Button>
      }),
      // Load the JSON object into the component state for faster access in case more API info is needed
      data
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
          <div className='text' id='footer-page-navigation'>
            <span onClick={this.goToHome}>HOME</span>
            <span id='footer-text-divider'>></span>
            <span onClick={this.goToWrestlers}>WRESTLERS</span>
          </div>
          <div id='footer-touchpros'>TouchWall by TouchPros.com</div>
        </footer>
      </div>
    );
  }
}
