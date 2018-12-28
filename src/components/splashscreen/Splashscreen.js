import React, { PureComponent } from 'react';
import Title from './Header_splashscreen';
import Content from './Content';
import Header from './Header_splashscreen';
const Splashscreen = () => {
    return(
        
        <React.Fragment className='splashscreen'>
            <Header />
            <Title />
            <Content />
        </React.Fragment>
    )
}
export default Splashscreen;