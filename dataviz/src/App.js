import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ScaleLinear} from 'd3-scale';
import {max} from 'd3-array';
import {select} from 'd3-selection';


 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Testing Git.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
