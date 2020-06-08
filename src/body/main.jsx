import React from 'react';
import Heder from './header';
import Body from './content';



const MainBody = (props) =>{
    return(
        <div className="shell">
        <Heder /> 
        <div className="shell_wraper">
        <Body />
        </div>
        </div>
        
        
    );
}

export default MainBody;
