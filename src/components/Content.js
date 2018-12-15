import React, { Component } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import Counter from './counter/Counter';

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo } = this.props;
    const rowTable = arrayFromRepo.map(item => item.name)
    const dataNow = new Date()
    console.log(dataNow)
    const dataOfTheLastChanges = arrayFromRepo.map(item=>console.log(item.updated_at))
 
    const Headers = ['Name','Path','Description', 'Technology', 'Last Update']
   
    return (
     
      
      <div className='content-repos'>
        <table>
          <thead>
            <tr>
            {Headers.map(item=> (<th>{item}</th>))}
            </tr>
          </thead>
       
          <tbody>
            {arrayFromRepo.map(repo => 
              <tr key={repo.id}>
                <Link
                to='/repo'>
                  <td>
                    {repo.name}
                  </td>
                </Link>
                <td>{repo.full_name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
                <td>{repo.updated_at}</td>
                <Counter />
              </tr>
              )}

          </tbody>

        </table>
      </div>
    )
  }
}
