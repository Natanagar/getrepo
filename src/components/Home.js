import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Splashscreen from './splashscreen/Splashscreen';

export default class Home extends Component {
  render() {
    console.log(this.props)
    const { wait } = this.props
    return (
     wait 
     ?
        <Splashscreen />
     : 
      <div className='home'>
        <Header />
        <Content />
      </div>
    )
  }
}
