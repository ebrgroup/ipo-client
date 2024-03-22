import userReducer from "./user-reducer";
import loadingReducer from "./loading-reducer";
import toggleReducer from "./toogle-reducer";
import helpdeskContentReducer from "./helpdesk-reducer";
import trademarkRegistrationReducer from "./Trademark registration/trademark-reducer";
import IpLookup from "./Ip-Lookup reducer/tableData-reducer";
import countTrademark from "./Count IP reducer/countTrademark-reducer";
import copyrightReducer from "./Copyright_data Reducers/copyright-reducer";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer,
    loadingReducer,
    toggleReducer,
    helpdeskContentReducer,
    trademarkRegistrationReducer,
    IpLookup,
    countTrademark,
    copyrightReducer

})


export default rootReducer;