import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className='content-repos'>
        <table>
          <tr>
            <th>Name</th>
            <th>Last commit</th>
            <th>Last update</th>
          </tr>
          <tr>
            <td>First repo</td>
            <td>first repo last commit</td> 
            <td>first repo last update</td>
          </tr>
          <tr>
            <td>First repo</td>
            <td>second repo last commit</td> 
            <td>second repo last update</td>
          </tr>
        </table>
      </div>
    )
  }
}
