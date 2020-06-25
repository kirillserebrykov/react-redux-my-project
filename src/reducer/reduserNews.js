
const NewsData = "NewsData"
let initialState = {
    news: [
        /* {id:"a",email:"b",password:"c",login:"d"},
        {id:"a",email:"b",password:"c",login:"d"},
        {id:"c",email:"d",password:"b",login:"a"}, */


    ],
    isFetching:true,


}


export const News_Data_CHANG_REREDUCER = (state = initialState, action) => {
    if (action.type === NewsData) {
        
        return { ...state, news:action.data }
    }
    return state

}
