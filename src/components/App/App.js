import React, { Component } from 'react';
import './App.scss';
import Carousel from '../Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Carousel Test</h1>
        </header>
        <Carousel />
      </div>
    );
  }
}

export default App;
