import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Splashscreen from './splashscreen/Splashscreen';

export default class Home extends Component {
  render() {
    const { wait, sortingRepoInTheColumns } = this.props
    console.log(wait, sortingRepoInTheColumns)
    return (
     wait 
     ?
        <Splashscreen />
     : 
      <div className='home'>
        <Header />
        <Content 
        sortingRepoInTheColumns={sortingRepoInTheColumns}
        />
      </div>
    )
  }
}
