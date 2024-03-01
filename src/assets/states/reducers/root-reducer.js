import userReducer from "./user-reducer";
import loadingReducer from "./loading-reducer";
import toggleReducer from "./toogle-reducer";
import helpdeskContentReducer from "./helpdesk-reducer";
import trademarkRegistrationReducer from "./Trademark registration/trademark-reducer";
import IpLookup from "./Ip-Lookup reducer/tableData-reducer";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer,
    loadingReducer,
    toggleReducer,
    helpdeskContentReducer,
    trademarkRegistrationReducer,
    IpLookup
    
})

export default rootReducer;