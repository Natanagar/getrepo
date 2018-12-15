import React, { Component } from 'react';
import Counter from './counter/Counter'

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo } = this.props;
    const newRepo = Object.assign(arrayFromRepo);
    console.log(newRepo);
    return (
     
      
      <div className='content-repos'>
        <Counter />
        <table>
          <tr>
            <th
            onClick={getDataFromTable}
            >
            Name
            </th>
            <th
            onClick={getDataFromTable}
            >
            
            Last commit</th>
            <th
            onClick={()=>(console.log('Click the third column'))}
            >Last update</th>
          </tr>
          <tr>
            <td
            onClick={()=>(console.log('Clicking to first repo'))}
            >First repo</td>
            <td
            onClick={()=>(console.log('Clicking to second repo'))}
            >first repo last commit</td> 
            <td
            onClick={()=>(console.log('Clicking to third repo'))}
            >first repo last update</td>
          </tr>
          <tr>
            <td
            onClick={()=>(console.log('Clicking to first repo'))}
            >First repo</td>
            <td
            onClick={()=>(console.log('Clicking to second repo'))}
            >second repo last commit</td> 
            <td
            onClick={()=>(console.log('Clicking to third repo'))}
            >second repo last update</td>
          </tr>
        </table>
      </div>
    )
  }
}
