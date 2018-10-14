import React, { Component } from 'react';
import Album from './Album.js'; /* main template used */
import SingleLineGridList from './SingleLineGridList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Glassdoor for women.
          </p>
          */
        }
          <Album>
          </Album>
          
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
    );
  }
}

export default App;
