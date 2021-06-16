import React, { Component } from 'react';
// //import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header >
          <h1>City Explorer </h1>
        </header>
        <Main />

      </div>
    );
  }
}

export default App;
