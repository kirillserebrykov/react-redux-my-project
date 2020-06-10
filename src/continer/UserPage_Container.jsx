import React from 'react';
import UserPege from '../userPege/UserPage'
import {connect} from 'react-redux'
import {DATA_USER_CHANGE_AC} from "../stait"
let mapStatetoProps = (state) =>{
    debugger
    
    return {
        USER_DATA:state.USER_DATA_CHANG_REREDUCER.users
    }      
    
   }
   let mapDispathToProps = (dispatch) => {
      return{
          setUsers:(users)=>{
            dispatch(DATA_USER_CHANGE_AC(users))
          }
      }
      
   
   }
   
   let UserPegeContainer = connect(mapStatetoProps,mapDispathToProps)(UserPege);





export default UserPegeContainer