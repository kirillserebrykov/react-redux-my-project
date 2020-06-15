const HD = "HADER_data"

let initialState = {
    data_login: [
        /* {id:"a",email:"b",password:"c",login:"d"},
        {id:"a",email:"b",password:"c",login:"d"},
        {id:"c",email:"d",password:"b",login:"a"}, */


    ],
    



}

export const HADER_DATA_CHANG_REREDUCER = (state = initialState, action) => {
    if (action.type === HD) {
        
        return { ...state, data_login: action.data }
    }
    return state

}


