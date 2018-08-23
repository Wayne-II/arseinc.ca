import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {particlesConfig} from './resource/particlesjs-config.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/favicon-96x96.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Get It Done</h1>
        </header>
        <Particles 
          params={ particlesConfig } 
          style={ { 
            position:'absolute',
            width:'100%',
            height:'100%',
            left:0,
            right:0,
            top:0,
            bottom:0,
            zIndex:-1
          } }
       />
        <p className="App-intro">
          
        </p>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
