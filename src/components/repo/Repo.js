import React, { Component } from 'react';
import axios from "axios";
import Github from '/Users/home/Documents/Programming/getrepo/src/api/Github';
import Counter from '/Users/home/Documents/Programming/getrepo/src/components/counter/Counter'
import {withRouter } from "react-router";
import moment from 'moment';

class GithubList extends Component{
    state ={ 
        listOfRepoFromGithub : [],
        api : "",
        repo : []
    }
    getDataFromApi = () => {
        axios({
            method: 'get',
            url: Github.api
          })
          .then((response) => {
            const reposFromGithub = Array.from(response.data);
            if(reposFromGithub !== this.state.listOfRepoFromGithub){
                this.setState({
                    listOfRepoFromGithub : reposFromGithub  
                })
            }
          })
          .catch(error => console.log(error))
        }
    
    getInfoAboutRepo = () => {
            axios({
                method: 'get',
                url: this.state.api 
              })
              .then((response) => {
                const dataFromGithub = Array.from(response.data);
                    this.setState({
                        repo : dataFromGithub 
                    })
                })
              .catch(error => console.log(error))
            }   
    

    
    componentDidMount(){
        this.getDataFromApi()
        this.getInfoAboutRepo()
    }
    static getDerivedStateFromProps(props, state) {
      const repoKey = props.match.url.substring(6)
      const repo = state.listOfRepoFromGithub.filter(repo => repo.id == repoKey)
      let api = String(repo.map(item => item.contents_url))
      console.log(api)
      state.api = api
      //const repoForRender = this.state.listOfRepoFromGithub.filter(repo => repo.id == repoId)
      return null;
    }
        
    render(){
            const { match, location, history } = this.props
            const { listOfRepoFromGithub, api, repo } = this.state
            console.log(repo)
            const repoId = match.url.substring(6) 
            const repoForRender = listOfRepoFromGithub.filter(repo => repo.id == repoId)
            
        return(
            <div className="list-of-the-repos">
                <table>
                    <thead>
                        <tr>
                            {repoForRender.map(item=>
                            
                            <th 
                            key={item.id} 
                            style={{
                                fontFamily: 'Noto Serif TC',
                                textTransform : "uppercase",
                                fontSize: '24px',
                                fontWeight: '800'

                            }}>
                                {item.name}
                            </th>)}
                        </tr>
                    </thead>
                    <Counter />
                    <tbody>
                        {repoForRender.map(item=>
                            <tr key={item.id}>
                                <td style={{
                                    fontSize: '18px'
                                }}
                                
                                >{item.full_name}</td>
                                <td style={{
                                    fontStyle : 'italic'
                                }}
                                >Last updated {moment(item.updated_at.substr(0,10)).fromNow()}</td>
                                <td>{item.language}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
export default withRouter(GithubList);