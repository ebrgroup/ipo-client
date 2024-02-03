import userReducer from "./user-reducer";

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;