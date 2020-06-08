import React from 'react';
import UserPege from '../userPege/UserPage'
import {connect} from 'react-redux'
let mapStatetoProps = (state) =>{
    return {
        email:state.USER_DATA_CHANG_REREDUCER.email, 
        login:state.USER_DATA_CHANG_REREDUCER.login,
        password:state.USER_DATA_CHANG_REREDUCER.password
    }      
    
   }
   let mapDispathToProps = (dispatch) => {
      return{ }
      
   
   }
   
   let UserPegeContainer = connect(mapStatetoProps,mapDispathToProps)(UserPege);





export default UserPegeContainer