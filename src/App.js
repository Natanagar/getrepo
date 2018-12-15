import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/Home';
import Repo from './components/repo/Repo';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Splashscreen from './components/splashscreen/Splashscreen';
import Github from '/Users/home/Documents/Programming/getrepo/src/api/Github'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.getDataFromGithub = this.getDataFromGithub.bind(this);
    this.sortingRepoInTheColumns = this.sortingRepoInTheColumns.bind(this);
    this.getDataFromTable = this.getDataFromTable.bind(this)
  }
  state = {
    wait : false,
    arrayFromRepo : [],
    totalAmount : 0
  }
  sortingRepoInTheColumns = (event, data) => {
    //console.log("We've got it");
    console.log(event);
  }
  getDataFromTable = event => {
    console.log("We've got it")
  }
  getDataFromGithub = () => {
    axios({
      method: 'get',
      url: Github.api
    })
    .then((response) => {
      const totalRepos = response.data.length;
      const reposFromGithub = Array.from(response.data);
      if(totalRepos !== this.state.arrayFromRepo){
        this.setState({
          totalAmount : totalRepos,
          arrayFromRepo : reposFromGithub
        })
      }
    })
    .catch(error => console.log(error))
  }
  componentDidMount() {
    this.getDataFromGithub();
  }
  render() {
    console.log(this.state.arrayFromRepo)
    const { wait, arrayFromRepo, totalAmount } = this.state; 
    return (
      <div>
        <Route exact path='/' render={
          ()=>(
          <Home 
          wait={wait}
          sortingRepoInTheColumns={this.sortingRepoInTheColumns}
          getDataFromTable={this.getDataFromTable}
          arrayFromRepo={arrayFromRepo}
          totalAmount={totalAmount}
          />
          )
        } /> 
        <Route path ='/repo' render={()=>(<GithubList />)}/>
      </div>
    )
    
  }
}

export default App;
