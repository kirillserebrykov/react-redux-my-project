import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REREDUCER} from "./reducer/reducer"



//  ПЕРЕМЕННЫЕ TYPE  ------------------------------------------
const ADD_MESS = "ADD-MESS";
const MESS_CHANGE = "MESS-CHANGE";
const USER_CHANGE = "USER-CHANGE";
const PD = "profile_data"
const UDO = "users_data_our"
const P = "pages"
const F = "isFetching"
const T ="TotalUsersCount"
const HD = "HADER_data"
//----------------------------------
// функции для формирования dispatch --------------------------
export const ADD_MESS_ACTION_CREATOR = (messtext,id) =>{
    return {
        type:ADD_MESS,
        messgetext:messtext,
        userID:id,
        
    }
    
}
export const MESS_CHANGE_ACTION_CREATOR = (messtext) =>{
    return {
        type:MESS_CHANGE,
        messgetext:messtext,
    }
}
export const USER_CHANGE_ACTION_CREATOR = (id) =>{
    return {
        type:USER_CHANGE,
        userID:id,
        
    }
}
export const setProfile = (Profile) =>{
    
    return {
        type:PD,
        Profile
        
    }
}

export const setUsersOur = (users) =>{
   
    return {
        type:UDO,
        usersDATA_OUR:users[0],
        
    }
}
export const setPages = (pages) =>{
   
    return {
        type:P,
        pages:pages,
        
    }
}
export const toggelIsFetching = (isFetching) =>{
   
    return {
        type:F,
        isFetching,
        
    }
}
export const setTotalUsersCount = (TotalUsersCount) =>{
   
    return {
        type:T,
        count:TotalUsersCount[0],
        
    }
}

export const loginData = (data) =>{
  
    return {
        type:HD,
        data,
        
    }
}



//-------------------------------------------------------------

// store ------------------------------------------------------
const store = {
    renderDOM (){
       
    },
   state_:{ 
    Mess :[{
    id:"Admin ", 
    content:"Hi",}],

    
    MessStandart :"",
    UserStandart :"",
    
   },


subscribe (observer) {
    this.renderDOM = observer
},

    dispatch(action){
        
        this.state_ = MESEGES_REDUCER(this.state_,action);
        this.renderDOM()

        this.state_= MESS_CHANGE_REDUCER(this.state_,action);
        this.renderDOM() 
        this.state_= USER_CHANG_REREDUCER(this.state_,action);
        this.renderDOM()    
    } }
//------_---------------------------------------------


