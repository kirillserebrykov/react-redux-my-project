import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REDUCER} from "./reducer/reducer"
import {USER_DATA_CHANG_REDUCER , USER_DATA_CHANG_OUR_REDUCER,PAGES_SIZE_CHANG_REDUCER,IS_FETCHING_CHANG_REDUCER,TOTAL_USERS_COUNT_CHANG_REDUCER } from "./reducer/reduserLog"
import {HADER_DATA_CHANG_REDUCER} from "./reducer/reduserHeader"
import {News_Data_CHANG_REDUCER} from "./reducer/reduserNews"
import {appReduser} from './reducer/reduserApp';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = combineReducers({
   ADDMES:MESEGES_REDUCER,
   USER_DATA_CHANG_REREDUCER:USER_DATA_CHANG_REDUCER,
   MessStandart: MESS_CHANGE_REDUCER,
   UserStandart: USER_CHANG_REDUCER,
   USER_DATA_CHANG_OUR_REREDUCER:USER_DATA_CHANG_OUR_REDUCER,
   PAGES_SIZE:PAGES_SIZE_CHANG_REDUCER,
   IS_FETCHING:IS_FETCHING_CHANG_REDUCER,  
   TOTAL_USERS:TOTAL_USERS_COUNT_CHANG_REDUCER,
   HADER:HADER_DATA_CHANG_REDUCER,
   News_Data:News_Data_CHANG_REDUCER,
   form: formReducer,
   AppSettings:appReduser
   
   

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)))

export default store;