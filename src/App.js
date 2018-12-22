import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/repo/Repo';
import { Route } from 'react-router-dom';
import axios from 'axios';
import sortBy from 'sort-by';
import Splashscreen from './components/splashscreen/Splashscreen';
import Github from './api/Github';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.getDataFromGithub = this.getDataFromGithub.bind(this);
    this.sortingRepoInTheColumns = this.sortingRepoInTheColumns.bind(this);
    this.getDataFromTable = this.getDataFromTable.bind(this);
    this.getDataFromInputGithub = this.getDataFromInputGithub.bind(this)
    this.getAnotherRepoFromGithub = this.getAnotherRepoFromGithub.bind(this)
  }
  state = {
    wait : false,
    arrayFromRepo : [],
    totalAmount : 0,
    query : '',
    searchData : ''
  }
  sortingRepoInTheColumns = (event, data) => {
    //console.log("We've got it");
    console.log(event);
  }

  getDataFromInputGithub = (event,value) => {
    const searchRepo = event.target.value.substr(0,25)
    if(this.state.searchData !== searchRepo){
      this.setState({
        searchData : searchRepo
      })
    }
  }

  getDataFromTable = (event,value) => {
    const inputValue = event.target.value.substr(0.20)
    if(inputValue !== this.state.query ){
      this.setState({
        query : inputValue
      })
    }
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
  getAnotherRepoFromGithub = () => {
    axios.get(`https://api.github.com/users/${this.state.searchData}/repos`
    )
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
  static getDerivedStateFromProps(nextProps, nextState, prevState) {
    console.log(prevState)
    console.log(nextState)
  }
  componentDidUpdate(prevState, nextState){
    console.log(nextState);
    this.getAnotherRepoFromGithub();
  }
  componentDidMount() {
    this.getDataFromGithub();
  }

  render() {
    const { wait, arrayFromRepo, totalAmount, query, searchData } = this.state;
    //sorting array with repos
    const sortedRepos = arrayFromRepo.filter(repo=> {
      return repo.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

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
          sortedRepos={sortedRepos.sort(sortBy('name'))}
          getDataFromInputGithub={this.getDataFromInputGithub}
          />
          )
        } /> 
        <Route path ='/repo/:number' render={()=><GithubList />}/>
      </div>
    )
    
  }
}

export default App;
