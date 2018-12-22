import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { getDataFromTable, getDataFromInputGithub } = this.props;
    return (
      <nav className="header">

          
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
            <li><a href="/some/valid/url">Projects</a></li>
            <li><a href="/some/valid/url">Groups</a></li>
            <li><a href="/some/valid/url">Activity</a></li>
            <li className="search">
              <span style={{
                  fontSize:"20px",
                  color: 'yellow',
                  marginRight: '5px'
                }}>
                <i className="fas fa-search"></i>
              </span>
              <input 
              type="text" 
              placeholder="Search or jump to..."
              //onChange={getDataFromTable}
              onKeyPress={getDataFromInputGithub}
              ></input>
            </li>
            <li><a href='/some/valid/url'>PullRequests</a></li>
            <li><a href="/some/valid/url">Issues</a></li>
          </ul>
      </nav>
    )
  }
}
