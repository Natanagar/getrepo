import React, { Component } from 'react';
import axios from "axios";
import { apiGithub } from '../../api/Github';
import Header from "../Header"
import Counter from '../counter/Counter'
import {withRouter } from "react-router";
import moment from 'moment';

class GithubList extends Component{
    state ={ 
        defaultReposFromGithub : [],
        api : '',
        repo : [],
        repoName : ""
    }
    getDataFromApi = () => {
        apiGithub.getData("Natanagar")
          .then((response) => {
            const reposFromGithub = Array.from(response.data);
            console.log(reposFromGithub)
            if(reposFromGithub !== this.state.listOfRepoFromGithub){
                this.setState({
                    defaultReposFromGithub : reposFromGithub  
                })
            }
          })
          .catch(error => console.log(error))
        }
    
    getInfoAboutRepo = () => {
        const repoKey = this.props.match.url.substring(6);
        console.log(this.props)
        console.log(repoKey)
        const repo = this.state.defaultReposFromGithub.filter(repo => repo.id == repoKey)
        console.log(repo)
        if (repo!== 'underfined' || repo.length !== 0){
            const name = String(repo.map(item => item.name))
            const urlRepo = String(repo.map(item=>item.owner.login))
            console.log(urlRepo, name)

            apiGithub.getRepo(urlRepo,name)
              .then((response) => {
                  console.log(response.data)
                const dataFromGithub = Array.from(response.data);
                    this.setState({
                        repo : dataFromGithub 
                    })
                })
              .catch(error => console.log(error))
          } else if (repo.length === 0) {
            console.log('underfined is not a function')
         }
    } 
        
    

    
    componentDidMount(){
        this.getDataFromApi()
    }
   
    componentDidUpdate(prevState, prevProps){
        if(prevState.repo !== this.state.repo && this.state.repo.length === 0){
            this.getInfoAboutRepo();
        }
        
    }
        
    render(){
            const { match, location, history } = this.props
            const { defaultReposFromGithub, api, repo } = this.state
            console.log(repo[0])
            const repoId = match.url.substring(6) 
            const repoForRender = defaultReposFromGithub.filter(repo => repo.id == repoId)
        return(
            <div className="list-of-the-repos">
                <Header />
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
                                fontWeight: '800',
                                padding: '20px auto auto'

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
                                    fontStyle : 'italic',
                                    fontFamily : 'Lobster cursive',
                                    fontSize: "16px"
                                }}
                                >Last updated {moment(item.updated_at.substr(0,10)).fromNow()}</td>
                                <td
                                style={{
                                    fontStyle : 'italic',
                                    fontFamily : 'Lobster cursive',
                                    fontSize: "16px",
                                    fontWeight: '800'
                                }}
                                >{item.language}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <label className='repo'>
                   <table>
                        <thead className="repoHeader">
                            <tr>
                                <th>Header</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {repo.map(item=> <tr
                            key={item.id}
                            >
                            <td>
                                <a
                                style={{
                                    textDecoration : 'none',
                                    color : 'black',
                                    fontSize: '18px',
                                    fontStyle : 'italic',
                                    padding: '15px',
                                    margin: '20px',
                                    marginTop: '10px',
                                }}
                                href={item.html_url} 
                                alt={item.name}
                                >
                                {item.name}
                                </a></td>
                            </tr>)}

                            
                        </tbody>
                    </table> 
                </label>
            </div>
        )
    }
    
}
export default withRouter(GithubList);