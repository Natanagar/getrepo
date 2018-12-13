import React, { Component } from 'react';
import Counter from './counter/Counter'

export default class Content extends Component {
  render() {
    const { sortingRepoInTheColumns, getDataFromTable } = this.props;
    console.log(getDataFromTable)
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
            <th>
            <input 
            type="text"
            placeholder="Last Commit"
            onChange={getDataFromTable}
            ></input>
            Last commit</th>
            <th
            onclick={()=>(console.log('Click the third column'))}
            >Last update</th>
          </tr>
          <tr>
            <td
            onclick={()=>(console.log('Clicking to first repo'))}
            >First repo</td>
            <td
            onclick={()=>(console.log('Clicking to second repo'))}
            >first repo last commit</td> 
            <td
            onclick={()=>(console.log('Clicking to third repo'))}
            >first repo last update</td>
          </tr>
          <tr>
            <td
            onclick={()=>(console.log('Clicking to first repo'))}
            >First repo</td>
            <td
            onclick={()=>(console.log('Clicking to second repo'))}
            >second repo last commit</td> 
            <td
            onclick={()=>(console.log('Clicking to third repo'))}
            >second repo last update</td>
          </tr>
        </table>
      </div>
    )
  }
}
