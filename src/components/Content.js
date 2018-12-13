import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
     
      
      <div className='content-repos'>
        <table>
          <tr>
            <th>
            Name
            </th>
            <th
            onclick={()=>(console.log('Click the second column'))}
            >
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
