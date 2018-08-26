import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {particlesConfig} from './resource/particlesjs-config.js';
import './App.css';

import Database from './components/database.js';
import Software from './components/software.js';
import SystemsAdministration from './components/systemsadministration.js';
import Hardware from './components/hardware.js';
import Social from './components/social.js';

class App extends Component {
  mouseInHandler(){
    console.log( 'asdf');
      this.setState( { highlight:true } );
  }
  mouseOutHandler(){
    console.log( 'fdsa')
      this.setState( { highlight:false } );
  }

  render() {
    return (
      <div className="App" style={{height:'100%'}}>
        <header className="App-header">
          <img src="/favicon-96x96.png" className="App-logo" alt="logo" />
          <h1 className="App-title" style={{fontFamily:'Rajdhani'}}>CArse Consulting</h1>
        </header>
        <Particles 
          params={ particlesConfig } 
          style={ { 
            position:'absolute',
            width:'100%',
            height:'calc( 100% - 75px)',
            left:0,
            right:0,
            top:0,
            bottom:0,
            zIndex:-1
          } }
        />
        <div style={ flexContainerStyle }>
          <Database mouseInHandler={this.mouseInHandler} mouseOutHandler={this.mouseOutHandler} style={ flexItemStyle } />
          <Software mouseInHandler={this.mouseInHandler} mouseOutHandler={this.mouseOutHandler} style={ flexItemStyle } />
          <SystemsAdministration mouseInHandler={this.mouseInHandler} mouseOutHandler={this.mouseOutHandler} style={ flexItemStyle } />
          <Hardware mouseInHandler={this.mouseInHandler} mouseOutHandler={this.mouseOutHandler} style={ flexItemStyle } />
          <Social style={ { ...flexItemStyle, width:'100%', height:'20%' } } />
        </div>
      </div>
    );
  }
}

const flexContainerStyle = {
  display: 'inline-felx',
  height:'calc( 100% - 75px )', 
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignContent: 'space-around',
};

const flexItemStyle = {
  flex:'0 1 auto',
  display:'inline-flex',
  flexDirection: 'row',
  width:'40%',
  alignSelf: 'center',
  alignItems: 'flex-end',
  justifyContent:'space-around',
  height:'calc( 40% )',
  fontSize: '2em',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center',
  boxShadow: '25px 25px 50px 20px #222 inset, -25px -25px 50px 20px #222 inset' 
}

export default App;