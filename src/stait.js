import { MESEGES_REDUCER, MESS_CHANGE_REDUCER, USER_CHANG_REREDUCER } from "./reducer/reducer"
import { DalApi } from './DAL/API'


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

export const loginData = (data) => {

    return {
        type: HD,
        data: data,

    }
}
export const News_Data = (data) => {
    debugger
    return {
        type: NewsData,
        data: data[0],

    }
}

export const setProfileAPI = (user_id_url) => (dispath) => {

    dispath(toggelIsFetching(true))
    DalApi.UserPage_Api(user_id_url).then(data => {
        dispath(setProfile([data]))
        dispath(toggelIsFetching(false))
    })
}

export const UserPage_OUR_Api = (CurrentPage, PageSize) => (dispath) => {
    dispath(toggelIsFetching(true))
    DalApi.UserPage_OUR_Api(CurrentPage, PageSize).then(data => {
        dispath(setUsersOur([data.items]))
        dispath(setTotalUsersCount([data.totalCount]))
        dispath(toggelIsFetching(false))
    })
}
export const getUsersOur = (pagesNum,PageSize) => (dispath) => {
    dispath(setPages(pagesNum))
    dispath(toggelIsFetching(true))
    DalApi.Users(pagesNum,PageSize).then(respose => {
        dispath(setUsersOur([respose.data.items]))
        dispath(toggelIsFetching(false))
    })
}
export const NewsDataApi  = () => (dispath) =>{
    dispath(toggelIsFetching(true))
          DalApi.NewsAPI().then(data => {
            dispath(toggelIsFetching(false))
            dispath(News_Data([data.articles]))
            
            
        })}
 
export const getMeLogin = () => (dispath) =>{
        DalApi.GetLoginApi().then(respose => {
            dispath(loginData([respose.data]))
        })
} 
//-------------------------------------------------------------

// store ------------------------------------------------------
const store = {
    renderDOM() {

    },
    state_: {
        Mess: [{
            id: "Admin ",
            content: "Hi",
        }],


        MessStandart: "",
        UserStandart: "",

    },


    subscribe(observer) {
        this.renderDOM = observer
    },

    dispatch(action) {

        this.state_ = MESEGES_REDUCER(this.state_, action);
        this.renderDOM()

        this.state_ = MESS_CHANGE_REDUCER(this.state_, action);
        this.renderDOM()
        this.state_ = USER_CHANG_REREDUCER(this.state_, action);
        this.renderDOM()
    }
}
//------_---------------------------------------------


