
const PD = "profile_data"
const UDO = "users_data_our"
const P = "pages"
const F = "isFetching"
const T ="TotalUsersCount"


let initialState = {
    users: [
        /* {id:"a",email:"b",password:"c",login:"d"},
        {id:"a",email:"b",password:"c",login:"d"},
        {id:"c",email:"d",password:"b",login:"a"}, */


    ],
    PageSize: 20,
    TotalUserCount:0,
    CurrentPage: 1, 
    isFetching:true,



}

export const USER_DATA_CHANG_REREDUCER = (state = initialState, action) => {

    if (action.type === PD) {

        return { ...state, users: action.Profile }
    }
    return state

}
export const USER_DATA_CHANG_OUR_REREDUCER = (state = initialState, action) => {
    if (action.type === UDO) {

        return { ...state, users: action.usersDATA_OUR }
    }
    return state

}
export const PAGES_SIZE_CHANG_REREDUCER = (state = initialState, action) => {
    if (action.type === P) {

        return { ...state, CurrentPage: action.pages }
    }
    return state

}

export const IS_FETCHING_CHANG_REREDUCER = (state = initialState, action) => {
    if (action.type === F) {

        return { ...state, isFetching: action.isFetching }
    }
    return state

}
export const TOTAL_USERS_COUNT_CHANG_REREDUCER = (state = initialState, action) => {
    if (action.type === T) {
            
        return { ...state, TotalUserCount:action.count }
    }
    return state

}
