import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import commentsReducer from '../reducers/commentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        allComments : commentsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore