import {createStore,combineReducers} from "redux";
import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REREDUCER} from "./reducer/reducer"
import USER_DATA_CHANG_REREDUCER from "./reducer/reduserLog"

const reducers = combineReducers({
   ADDMES:MESEGES_REDUCER,
   USER_DATA_CHANG_REREDUCER:USER_DATA_CHANG_REREDUCER,
   MessStandart: MESS_CHANGE_REDUCER,
   UserStandart: USER_CHANG_REREDUCER,

   
})

const store = createStore(reducers);

export default store;