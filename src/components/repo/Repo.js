import React, { Component } from 'react';
import axios from "axios";
import Github from '/Users/home/Documents/Programming/getrepo/src/api/Github';
import {withRouter } from "react-router" 

class GithubList extends Component{
    state ={ 
        listOfRepoFromGithub : []
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: Github.api
          })
          .then((response) => {
            const reposFromGithub = Array.from(response.data);
            if(
                reposFromGithub !== this.state.listOfRepoFromGithub
            ){
                this.setState({
                    listOfRepoFromGithub : reposFromGithub  
                })
            }
          })
          .catch(error => console.log(error))
        }
    
    render(){
            const { match, location, history } = this.props
            const { listOfRepoFromGithub } = this.state
            const repoId = match.url.substring(6) 
            const repoForRender = listOfRepoFromGithub.filter(repo => repo.id == repoId)
            console.log(Object.entries(repoForRender)[0]))
        return(
            <div className="list-of-the-repos">
                <ul>
                    Hello World!
                    {/*{repoForRender[0].map(repo=><li>
                        {repo.name}
                    </li>)}*/}
                </ul>
            </div>
        )
    }
    
}
export default withRouter(GithubList);