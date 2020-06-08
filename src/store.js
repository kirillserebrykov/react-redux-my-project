import {createStore,combineReducers} from "redux";
import {MESEGES_REDUCER,MESS_CHANGE_REDUCER,USER_CHANG_REREDUCER} from "./reducer/reducer"


const reducers = combineReducers({
   ADDMES:MESEGES_REDUCER,
   
   MessStandart: MESS_CHANGE_REDUCER,
   UserStandart: USER_CHANG_REREDUCER,
   
})

const store = createStore(reducers);

export default store;