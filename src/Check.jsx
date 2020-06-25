import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux'
let mapStatetoPropsForRedirect = (state) =>{

    return{
        
        Login_Unlogin:state.HADER.login_unlogin
    }
   
   }
const withCheckLoginUnlogin = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.Login_Unlogin === 1) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
        
    }
    let withCheckLoginUnloginContainer = connect(mapStatetoPropsForRedirect)(RedirectComponent);
    return withCheckLoginUnloginContainer
}

export default withCheckLoginUnlogin