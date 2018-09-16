import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index'
import ReduxThunk from 'redux-thunk'


const enhancer = compose(
    applyMiddleware(ReduxThunk),

)

const store = createStore(reducer, enhancer)

export default store