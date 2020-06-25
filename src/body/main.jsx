import React from 'react';
import Body from './content';

import HederContainer from '../continer/HeaderContainer';

const MainBody = (props) =>{
    return(
        <div className="shell">
        <HederContainer/> 
        <div className="shell_wraper">
        <Body />
        </div>
        </div>
        
        
    );
}

export default MainBody;
