import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux'
let mapStatetoPropsForRedirect = (state) =>{

    return{
        
        isAuth:state.HADER.isAuth,
    }
   
   }
   export const withCheckLoginUnlogin = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
        
    }
    
    let withCheckLoginUnloginContainer = connect(mapStatetoPropsForRedirect)(RedirectComponent);
    return withCheckLoginUnloginContainer
}

