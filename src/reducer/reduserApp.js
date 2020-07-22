import {getMeLogin } from "../stait"
const SetInitialized = "Set-Initialized"
let initialState = {
    initialized:false,
}

export const appReduser = (state = initialState, action) => {
    if (action.type === SetInitialized) {
        return { ...state, initialized:true }
    }
    return state
}
export  const initializedSuccsess = () =>({type:SetInitialized })
export const initialized = () => (dispatch) => {
     dispatch(getMeLogin()).then( 
         () => {dispatch(initializedSuccsess())})
        
}