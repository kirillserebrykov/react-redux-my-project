

import { DalApi } from './DAL/API'
import { stopSubmit } from 'redux-form';
//  ПЕРЕМЕННЫЕ TYPE  ------------------------------------------
const ADD_MESS = "ADD-MESS";
const MESS_CHANGE = "MESS-CHANGE";
const USER_CHANGE = "USER-CHANGE";
const PD = "profile_data"
const UDO = "users_data_our"
const P = "pages"
const F = "isFetching"
const T = "TotalUsersCount"
const HD = "HADER_data"
const NewsData = "NewsData"
//----------------------------------
// функции для формирования dispatch --------------------------
export const ADD_MESS_ACTION_CREATOR = (messtext, id) => {
    return {
        type: ADD_MESS,
        messgetext: messtext,
        userID: id,
    }
}
export const MESS_CHANGE_ACTION_CREATOR = (messtext) => {
    return {
        type: MESS_CHANGE,
        messgetext: messtext,
    }
}
export const USER_CHANGE_ACTION_CREATOR = (id) => {
    return {
        type: USER_CHANGE,
        userID: id,

    }
}
export const setProfile = (Profile) => {

    return {
        type: PD,
        Profile

    }
}

export const setUsersOur = (users) => {

    return {
        type: UDO,
        usersDATA_OUR: users[0],

    }
}
export const setPages = (pages) => {

    return {
        type: P,
        pages: pages,

    }
}
export const toggelIsFetching = (isFetching) => {

    return {
        type: F,
        isFetching,

    }
}
export const setTotalUsersCount = (TotalUsersCount) => {

    return {
        type: T,
        count: TotalUsersCount[0],

    }
}

export const loginData = (data,boolen) => {
debugger    
    return {
        type: HD,
        data: data[0],
        isAuth:boolen,
       

    }
}
export const News_Data = (data) => {
    debugger
    return {
        type: NewsData,
        data: data[0],

    }
}


export const setProfileAPI = (user_id_url) => async(dispatch) => {

    dispatch(toggelIsFetching(true))
    let data = await  DalApi.UserPage_Api(user_id_url)
        dispatch(setProfile([data]))
        dispatch(toggelIsFetching(false))
    
}

export const UserPage_OUR_Api = (CurrentPage, PageSize) => async(dispatch) => {
    dispatch(toggelIsFetching(true))
    let data = await DalApi.UserPage_OUR_Api(CurrentPage, PageSize)
        dispatch(setUsersOur([data.items]))
        dispatch(setTotalUsersCount([data.totalCount]))
        dispatch(toggelIsFetching(false))
    
}
export const getUsersOur = (pagesNum,PageSize) => async(dispatch) => {
    dispatch(setPages(pagesNum))
    dispatch(toggelIsFetching(true))
    let respose = await  DalApi.Users(pagesNum,PageSize)
        dispatch(setUsersOur([respose.data.items]))
        dispatch(toggelIsFetching(false))
    
    
}
export const NewsDataApi  = () =>  async(dispatch) =>{
    dispatch(toggelIsFetching(true))
        let {articles}= await DalApi.NewsAPI()
            dispatch(toggelIsFetching(false))
            dispatch(News_Data([articles]))
        }
 
export const getMeLogin = () => async(dispatch) =>{
       let response = await  DalApi.GetLoginApi()
            if(response.data.resultCode === 0)dispatch(loginData([response.data],true))
            else dispatch(loginData([response.data],false))  
} 
  

export const Login = (email,password,remeberMe)  => async(dispatch) =>{
    let {resultCode,response} = await   DalApi.PostLoginData(email,password,remeberMe)
    if(resultCode === 0){
        dispatch(getMeLogin(email,password,remeberMe))
    }
    else{
        let messages = response.data.messages[0]
        dispatch(stopSubmit('Login',{_error:`Hmm ${messages} !` }))
        dispatch(toggelIsFetching(false))
    }
}
export const UnLogin = () => async(dispatch) =>{
   
    let response = await   DalApi.DelLoginData()
        if(response.data.resultCode === 0 ){
            dispatch(loginData([response.data],false))
           }
    
     
    }
//-------------------------------------------------------------

// store ------------------------------------------------------
// const store = {
//     renderDOM() {

//     },
//     state_: {
//         Mess: [{
//             id: "Admin ",
//             content: "Hi",
//         }],


//         MessStandart: "",
//         UserStandart: "",

//     },


//     subscribe(observer) {
//         this.renderDOM = observer
//     },

//     dispatch(action) {

//         this.state_ = MESEGES_REDUCER(this.state_, action);
//         this.renderDOM()

//         this.state_ = MESS_CHANGE_REDUCER(this.state_, action);
//         this.renderDOM()
//         this.state_ = USER_CHANG_REREDUCER(this.state_, action);
//         this.renderDOM()
//     }
// }
//------_---------------------------------------------


