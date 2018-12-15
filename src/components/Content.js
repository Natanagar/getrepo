import React, { Component } from 'react';
import Counter from './counter/Counter'

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo } = this.props;
    const rowTable = arrayFromRepo.map(item => item.name)
    console.log(rowTable)
    const Headers = ['Name','Path','Description']
   
    return (
     
      
      <div className='content-repos'>
        <Counter />
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
              </tr>
              )}

          </tbody>

        </table>
      </div>
    )
  }
}
