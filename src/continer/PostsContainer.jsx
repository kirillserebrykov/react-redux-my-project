import React from 'react';
import {connect} from 'react-redux'
import Posts from '../posts/posts';
import { ADD_MESS_ACTION_CREATOR, MESS_CHANGE_ACTION_CREATOR, USER_CHANGE_ACTION_CREATOR } from '../stait';




let mapStatetoProps = (state) =>{

 return{
     PostsPage:state.ADDMES.state_,
     MessStandart:state.MessStandart,
     UserStandart:state.UserStandart
 }

}
let mapDispathToProps = (dispatch) => {
   
    return{
        addmess:(text,user) =>{
            dispatch(ADD_MESS_ACTION_CREATOR(text,user))
            
        },
        onChange_user:(text) =>{
           
            dispatch(USER_CHANGE_ACTION_CREATOR(text))
        },
        onChange_text:(text) =>{
        dispatch(MESS_CHANGE_ACTION_CREATOR(text))}
        
        
    }

}

let PostsContainer = connect(mapStatetoProps,mapDispathToProps)(Posts);

export default PostsContainer;