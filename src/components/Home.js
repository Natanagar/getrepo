import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Splashscreen from './splashscreen/Splashscreen';

export default class Home extends Component {
  render() {
    const { wait, sortingRepoInTheColumns, getDataFromTable, totalAmount, arrayFromRepo, sortedRepos } = this.props
    return (
     wait 
     ?
        <Splashscreen />
     : 
      <div className='home'>
        <Header 
        getDataFromTable={getDataFromTable}
        />
        <Content
        sortedRepos={sortedRepos}
        sortingRepoInTheColumns={sortingRepoInTheColumns}
        arrayFromRepo={arrayFromRepo}
        totalAmount={totalAmount}
        />
      </div>
    )
  }
}
