import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Splashscreen from './components/splashscreen/Splashscreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Github repo">
        <Splashscreen />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
