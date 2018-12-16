import React, { Component } from 'react';
import moment from 'moment';
import GithubList from '/Users/home/Documents/Programming/getrepo/src/components/repo/Repo';
import { Link } from "react-router-dom";
import Counter from './counter/Counter';

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo, sortedRepos } = this.props;
    const rowTable = arrayFromRepo.map(item => item.name)
    const Headers = ['Name','Path','Description', 'Technology', 'Last Update']
    console.log(sortedRepos.length)
     
    return (
     <div className='content-repos'>
        <table>
          <thead>
            <tr>
            {Headers.map(item=> (<th>{item}</th>))}
            </tr>
          </thead>
       
          <tbody>
            {sortedRepos.map(repo => 
              <tr style={{
                border : "2px solid black",
                fontSize : "10px",
                fontFamily: 'Noto Serif TC',
                fontWeight : 'italic'
              }} key={repo.id}>
                
                  <td>
                  <Link to={`/repo/${repo.id}`}>
                    {repo.name}
                    </Link>
                  </td>
                
                <td>{repo.full_name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
                <td>{moment(repo.updated_at.substr(0,10)).fromNow()}</td>
                <Counter />
              </tr>
              )}

          </tbody>

        </table>
      </div>
    )
  }
}
