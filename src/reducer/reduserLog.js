const UD = "users_data"

let initialState ={
    users:[ 
        /* {id:"a",email:"b",password:"c",login:"d"},
        {id:"a",email:"b",password:"c",login:"d"},
        {id:"c",email:"d",password:"b",login:"a"}, */
       
    ]
}

 const USER_DATA_CHANG_REREDUCER  = (state = initialState, action) => {
        if(action.type === UD){
            
            return { ...state,users:action.usersDATA}
        }
        return state
        
    }

    export default USER_DATA_CHANG_REREDUCER