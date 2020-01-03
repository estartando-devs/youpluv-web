import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import userReducer from './user/user.reducer'

const rootReducers = combineReducers({
    user: userReducer
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export {store}