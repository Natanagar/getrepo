import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/Home';
import Repo from './components/repo/Repo'
import { Route } from 'react-router-dom'
import Splashscreen from './components/splashscreen/Splashscreen';
import Github from '/Users/home/Documents/Programming/getrepo/src/api/Github'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.getDataFromGithub = this.getDataFromGithub.bind(this)
  }
  state = {
    wait : false
  }
  getDataFromGithub = () => {
    console.log(Github)
  }
  componentDidMount() {
    this.getDataFromGithub();
  }
  render() {
    console.log(this.state)
    const { wait } = this.state; 
    return (
      <div>
        <Route exact path='/' render={
          ()=>(
          <Home 
          wait={wait}
          />
          )
        } /> 
        <Route path ='/repo' render={()=>(<GithubList />)}/>
      </div>
    )
    
  }
}

export default App;
