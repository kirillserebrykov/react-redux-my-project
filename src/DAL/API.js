
import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})
export const DalApi = {
    NewsAPI() {
        return axios.get(`https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=6f5d96f4f44f49949ff224812b5d39d3`).then(response => {
            return response.data
        })

    },
    UserPage_Api(user_id_url = 2) {
        return instance.get("profile/" + user_id_url).then(response => {
            return response.data
        })
    },
    UserPage_OUR_Api(CurrentPage,PageSize) {
        return instance.get(`users?page=${CurrentPage}&count=${PageSize}`).then(response => {
            return response.data
        })
    },
    Users(pagesNum,PageSize) {
      return  instance.get(`users?page=${pagesNum}&count=${PageSize}`)
},
GetLoginApi (){
   return instance.get("auth/me",{
                withCredentials:true
            })
},
PostLoginData(email,password){
   return  instance.post("/auth/login",{
        email:email,
        password:password

    })
}
}

