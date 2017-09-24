import { combineReducers } from 'redux'
//import firebaseReducer from './firebaseReducer'
import postReducer from './postReducer'
import userReducer from './userReducer'

export default combineReducers({
    //firebaseReducer,
    posts:postReducer,
    user:userReducer
})