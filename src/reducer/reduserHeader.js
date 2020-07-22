const HD = "HADER_data"

let initialState = {
    data_login: [],
    isAuth:false,
    idUser:null
}

export const HADER_DATA_CHANG_REDUCER = (state = initialState, action) => {
    
    if (action.type === HD) {   
       debugger
        return { ...state, data_login: [action.data],isAuth:action.isAuth,idUser:action.data.data.id}
    }
    return state

}


