import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/repo/Repo';
import { Route } from 'react-router-dom';
import axios from 'axios';
import sortBy from 'sort-by';
import Splashscreen from './components/splashscreen/Splashscreen';
import Api from './api/Github';
import { apiGithub }  from './api/Github';
import { api, id, secret } from './api/Github';
import './App.css';


class App extends Component {
  state = {
    wait : true,
    arrayFromRepo : [],
    totalAmount : 0,
    query : '',
    searchData : '',
    hidden : false,
    getStar : false,
    sortedRepos : []
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
  sortingArray = (array, query) => {
    const sortedArray = array.filter(repo=> {
      return repo.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    this.setState({
      sortedRepos : sortedArray
    })
  }
  //ask to get first data
  getDataFromGithub = () => {
    /*axios.get(api)*/
    apiGithub.getData('Natanagar')
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
      this.sortingArray(this.state.arrayFromRepo,this.state.query)
    })
    .catch(error => console.log(error))
  }
  //ask Github to another repo
  getAnotherRepoFromGithub = () => {
    console.log(typeof `${this.state.searchData}`)
    apiGithub.getData(`${this.state.searchData}`)
    .then((response) => {
      console.log(`Данные гитхаба по запросу ${response}`)
      const totalRepos = response.data.length;
      const reposFromGithub = Array.from(response.data);
      if(totalRepos !== this.state.arrayFromRepo){
        this.setState({
          totalAmount : totalRepos,
          arrayFromRepo : reposFromGithub
        })
        this.sortingArray(this.state.arrayFromRepo, this.state.query )
      }
    })

    .catch(error => console.log(error))
  }
  componentDidUpdate(prevState, nextState){
    if(nextState.searchData !== this.state.searchData && this.state.searchData !== ''&& this.state.searchData.length >=2){
      setTimeout(()=>
        //request throttling 0,5 sek 
        this.getAnotherRepoFromGithub(), 
        500)
    }
    
  }
  
  componentDidMount() {
    setTimeout(()=>this.setState({
      hidden: true,
      wait : false
    }), 1500)
    this.getDataFromGithub();
  }

  render() {
    const { wait, arrayFromRepo, totalAmount, query, searchData, hidden, getStar, sortedRepos } = this.state;
    //sorting array with repos
    /*const sortedRepos = arrayFromRepo.filter(repo=> {
      return repo.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })*/

    return (
      <> 
        <Route exact path='/' render={
          ()=>(
          <Home 
          wait={wait}
          sortingRepoInTheColumns={this.sortingRepoInTheColumns}
          getDataFromTable={()=>this.getDataFromTable.bind(this)}
          arrayFromRepo={arrayFromRepo}
          totalAmount={totalAmount}
          sortedRepos={sortedRepos.sort(sortBy('name'))}
          getDataFromInputGithub={this.getDataFromInputGithub.bind(this)}
          hidden={hidden}
          getStar={getStar}
          />
          )
        } /> 
        <Route path ='/repo/:number' render={()=><GithubList />}/>
      </>
    )
    
  }
}

export default App;
