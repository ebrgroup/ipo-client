import userReducer from "./user-reducer";
import loadingReducer from "./loading-reducer";
import toggleReducer from "./toogle-reducer";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer,
    loadingReducer,
    toggleReducer
})

export default rootReducer;