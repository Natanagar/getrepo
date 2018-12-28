import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/repo/Repo';
import { Route } from 'react-router-dom';
import axios from 'axios';
import sortBy from 'sort-by';
import Splashscreen from './components/splashscreen/Splashscreen';
import Api from './api/Github';
import { api, id, secret } from './api/Github';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.getDataFromGithub = this.getDataFromGithub.bind(this);
    this.sortingRepoInTheColumns = this.sortingRepoInTheColumns.bind(this);
    this.getDataFromTable = this.getDataFromTable.bind(this);
    this.getDataFromInputGithub = this.getDataFromInputGithub.bind(this);
    this.getAnotherRepoFromGithub = this.getAnotherRepoFromGithub.bind(this);
  }
  state = {
    wait : false,
    arrayFromRepo : [],
    totalAmount : 0,
    query : '',
    searchData : '',
    hidden : false,
    getStar : false
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
    const inputValue = event.target.value.substr(0,20)
    if(inputValue !== this.state.query ){
      this.setState({
        query : inputValue
      })
    }
  }
 
  getDataFromGithub = () => {
    axios.get(api)
    /*Api.getData('Natanagar')*/
    .then((response) => {
      console.log(`Данные с гитхаба ${response.data}`)
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
    //remove .then(()=>{setTimeout(()=>this.setState({hidden: false}), 1500)})
    .then((response) => {
      console.log(response)
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
  componentDidUpdate(prevState, nextState){
    console.log(prevState.searchData) 
    console.log(this.state.searchData)
    console.log(nextState.searchData)
    if(nextState.searchData !== this.state.searchData && this.state.searchData !== ''&& this.state.searchData.length >=2){
      setTimeout(()=> 
        this.getAnotherRepoFromGithub(), 
        500)
      //this.getAnotherRepoFromGithub();
    }
    
  }
  
  componentDidMount() {
    setTimeout(()=>this.setState({
      hidden: true
    }), 1500)
    this.getDataFromGithub();
  }

  render() {
    const { wait, arrayFromRepo, totalAmount, query, searchData, hidden, getStar } = this.state;
    //sorting array with repos
    console.log(searchData)
    const sortedRepos = arrayFromRepo.filter(repo=> {
      return repo.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    return (
      <React.Fragment> 
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
          hidden={hidden}
          getStar={getStar}
          />
          )
        } /> 
        <Route path ='/repo/:number' render={()=><GithubList />}/>
      </React.Fragment>
    )
    
  }
}

export default App;
