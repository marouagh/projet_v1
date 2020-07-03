import {combineReducers} from 'redux'
import authReducer from './authreducer'
import employeReducer from './employeRrducer'
import errorReducer from './errorReducer'
import annonceReducer from './annonceReducer'
export default combineReducers({
    authReducer,
    employeReducer,
    errorReducer,annonceReducer
})