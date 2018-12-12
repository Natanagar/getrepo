import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Splashscreen from './components/splashscreen/Splashscreen';
import Github from '/Users/home/Documents/Programming/getrepo/src/api/Github'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.getDataFromGithub = this.getDataFromGithub.bind(this)
  }
  getDataFromGithub = () => {
    console.log(Github)
  }
  componentDidMount() {
    this.getDataFromGithub();
  }
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
