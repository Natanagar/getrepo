import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <logo style={{
            paddingLeft : '10px',
            paddingTope : '10px',
            fontSize: '64px',
            color: '244858'
          }}>
            <i className="fab fa-github-alt"></i>
          </logo>
          <ul className='menu'>
            <li>Projects</li>
            <li>Groups</li>
            <li>Activity</li>
            <li>Search</li>
            <li>PullRequests</li>
            <li>Issues</li>
          </ul>

        </nav>
      </div>
    )
  }
}
