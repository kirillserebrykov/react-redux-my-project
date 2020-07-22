//  ПЕРЕМЕННЫЕ TYPE  ------------------------------------------
const ADD_MESS = "ADD-MESS";
const MESS_CHANGE = "MESS-CHANGE";
const USER_CHANGE = "USER-CHANGE";

//----------------------------------



let initialState ={

    state_:{ 
        Mess :[{
        id:"Admin", 
        content:"Hi",}],
    
        
        MessStandart :"",
        UserStandart :"",
        
       }
}
export const MESEGES_REDUCER = (state = initialState, action) => {
  
    if (action.type === ADD_MESS ) {
        
        let k = action.userID
        let y = action.messgetext
        
        let newMess = {

        id: k,

        content: y}
       
        let StateCopy ={...state}
        StateCopy.state_ ={...state.state_}
        StateCopy.state_.Mess =[...state.state_.Mess]
     
       
        StateCopy.state_.Mess.push(newMess);
        k = ""
        y = ""
        
       
        return StateCopy
       
    }
   
    
    
 return state
}



export const MESS_CHANGE_REDUCER = (state = initialState.state_.MessStandart, action) => {


    if (action.type === MESS_CHANGE) {
        let StateCopy ={...state}
      
        StateCopy = action.messgetext
        return StateCopy
    }
    return state
}


export const USER_CHANG_REDUCER  = (state = initialState.state_.UserStandart, action) => {
    
    if (action.type === USER_CHANGE) {
        let StateCopy ={...state}
        StateCopy = action.userID;
       
        return StateCopy
    }
    return state
}



