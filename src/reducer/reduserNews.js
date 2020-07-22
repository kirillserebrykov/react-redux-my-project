
const NewsData = "NewsData"
let initialState = {
    news: [],
    isFetching:true,
}


export const News_Data_CHANG_REDUCER = (state = initialState, action) => {
    if (action.type === NewsData) {
        
        return { ...state, news:action.data }
    }
    return state

}
