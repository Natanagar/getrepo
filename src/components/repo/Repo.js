import React, { Component } from 'react';
import axios from "axios";
import { api } from '../../api/Github';
import Header from "../Header"
import Counter from '../counter/Counter'
import {withRouter } from "react-router";
import moment from 'moment';

class GithubList extends Component{
    state ={ 
        listOfRepoFromGithub : [],
        api : '',
        repo : [],
        repoName : ""
    }
    getDataFromApi = () => {
        axios({
            method: 'get',
            url: api
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
            axios.get(`${this.state.api}`)
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
    }
    static getDerivedStateFromProps(props, state) {
      const repoKey = props.match.url.substring(6);
      const repo = state.listOfRepoFromGithub.filter(repo => repo.id == repoKey)
      const name = String(repo.map(item => item.name))
      state.api = `https://api.github.com/repos/Natanagar/${name}/contents`
      //console.log(state.api)
      
      return null;
    }
   
    componentDidUpdate(prevState, prevProps){
        if(prevState.repo !== this.state.repo && this.state.repo.length === 0){
            this.getInfoAboutRepo(this.state.api);
        }
        
    }
        
    render(){
            const { match, location, history } = this.props
            const { listOfRepoFromGithub, api, repo } = this.state
            console.log(repo[0])
            const repoId = match.url.substring(6) 
            const repoForRender = listOfRepoFromGithub.filter(repo => repo.id == repoId)
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