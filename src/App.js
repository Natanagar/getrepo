import React, { Component } from 'react';
import Home from './components/Home';
import GithubList from './components/repo/Repo';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import { apiGithub }  from './api/Github';
import './App.css';


class App extends Component {
  state = {
    wait : true,
    arrayFromRepo : [],
    totalAmount : 0,
    query: '',
    searchData : '',
    hidden : false,
    getStar : false,
    sortedRepos : [],
    githubRepo : []
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
    apiGithub.getData('Natanagar')
    .then((response) => {
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
  putDataGithubList = repo => {
    if(this.state.githubRepo !== repo){
      this.setState({
        githubRepo : repo
      })
    }
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
    }), 3000)
    this.getDataFromGithub();
  }

  render() {
    const { wait, arrayFromRepo, totalAmount, hidden, getStar, 
        githubRepo, sortedRepos,  } = this.state;


    return (
      <> 
        <Route exact path='/' render={
          ()=>(
          <Home 
          wait={wait}
          getDataFromTable={()=>this.getDataFromTable.bind(this)}
          arrayFromRepo={arrayFromRepo}
          totalAmount={totalAmount}
          sortedRepos={sortedRepos.sort(sortBy('name'))}
          getDataFromInputGithub={this.getDataFromInputGithub.bind(this)}
          putDataGithubList={this.putDataGithubList.bind(this)}
          hidden={hidden}
          getStar={getStar}
          />
          )
        } /> 
        <Route path ='/repo/:number' render={()=>< GithubList
         githubRepo={githubRepo}
          />}/>
      </>
    )
    
  }
}

export default App;
