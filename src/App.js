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
    this.getDataFromGithub = this.getDataFromGithub.bind(this);
    this.sortingRepoInTheColumns = this.sortingRepoInTheColumns.bind(this)
  }
  state = {
    wait : false
  }
  sortingRepoInTheColumns = (event, data) => {
    console.log("We've got it");
    console.log(event);

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
          sortingRepoInTheColumns={this.sortingRepoInTheColumns}
          />
          )
        } /> 
        <Route path ='/repo' render={()=>(<GithubList />)}/>
      </div>
    )
    
  }
}

export default App;
