import {createStore,combineReducers,applyMiddleware} from "redux";
import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REREDUCER} from "./reducer/reducer"
import {USER_DATA_CHANG_REREDUCER , USER_DATA_CHANG_OUR_REREDUCER,PAGES_SIZE_CHANG_REREDUCER,IS_FETCHING_CHANG_REREDUCER,TOTAL_USERS_COUNT_CHANG_REREDUCER } from "./reducer/reduserLog"
import {HADER_DATA_CHANG_REREDUCER} from "./reducer/reduserHeader"
import {News_Data_CHANG_REREDUCER} from "./reducer/reduserNews"
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

const reducers = combineReducers({
   ADDMES:MESEGES_REDUCER,
   USER_DATA_CHANG_REREDUCER:USER_DATA_CHANG_REREDUCER,
   MessStandart: MESS_CHANGE_REDUCER,
   UserStandart: USER_CHANG_REREDUCER,
   USER_DATA_CHANG_OUR_REREDUCER:USER_DATA_CHANG_OUR_REREDUCER,
   PAGES_SIZE:PAGES_SIZE_CHANG_REREDUCER,
   IS_FETCHING:IS_FETCHING_CHANG_REREDUCER,  
   TOTAL_USERS:TOTAL_USERS_COUNT_CHANG_REREDUCER,
   HADER:HADER_DATA_CHANG_REREDUCER,
   News_Data:News_Data_CHANG_REREDUCER,
   form: formReducer
})

const store = createStore(reducers,applyMiddleware(thunk));
window.store=store
export default store;