import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { loginReducer } from './redux/reducer'

const combineReducer = combineReducers({
    auth : loginReducer , 
})


export const store = createStore(combineReducer , applyMiddleware(thunk))
