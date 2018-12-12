import React, { PureComponent } from 'react';
import Title from './Header_splashscreen';
import Content from './Content';
import Header from './Header_splashscreen';
const Splashscreen = () => {
    return(
        
        <div className='splashscreen'>
            <Header />
            <Title />
            <Content />
        </div>
    )
}
export default Splashscreen;