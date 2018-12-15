import React, { Component } from 'react';
import moment from 'moment';
import Counter from './counter/Counter';

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo } = this.props;
    const rowTable = arrayFromRepo.map(item => item.name)
    console.log(rowTable)
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
                <td>{repo.name}</td>
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
