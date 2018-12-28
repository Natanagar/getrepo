import React, { PureComponent } from 'react';
import Content from './Content';
import Header from './Header_splashscreen';
const Splashscreen = () => {
    return(
        
        <>  
            <div className="splash-content">
            <Header />
            <Content />
            </div>
        </>
    )
}
export default Splashscreen;