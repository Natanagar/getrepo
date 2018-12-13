import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          
          <ul className='menu' role="navigation">
            <li>
                <logo style={{
                paddingLeft : '2px',
                fontSize: '28px',
                color: '#e0e0eb'
              }}>
                  <i className="fab fa-github-alt"></i>
              </logo>

            </li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Activity</a></li>
            <li className="search">
              <span style={{
                  fontSize:"20px",
                  color: 'yellow',
                  marginRight: '5px'
                }}>
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search or jump to..."></input>
            </li>
            <li><a href='#'>PullRequests</a></li>
            <li><a href="#">Issues</a></li>
          </ul>

        </nav>
      </div>
    )
  }
}
