import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REREDUCER} from "./reducer/reducer"



//  ПЕРЕМЕННЫЕ TYPE  ------------------------------------------
const ADD_MESS = "ADD-MESS";
const MESS_CHANGE = "MESS-CHANGE";
const USER_CHANGE = "USER-CHANGE";
//----------------------------------
// функции для формирования dispatch --------------------------
export const ADD_MESS_ACTION_CREATOR = (messtext,id) =>{
    return {
        type:ADD_MESS,
        messgetext:messtext,
        userID:id,
        
    }
    debugger
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


